import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  User,
  Calendar,
  Share2,
  Twitter,
  Facebook,
  Linkedin,
  Link as LinkIcon,
  BookOpen,
  TrendingUp,
  Tag,
  Eye,
  Heart,
  MessageCircle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { getRelatedBlogs, incrementBlogViews, likeBlog, getAllBlogs } from "../../services/blogApi";

export default function BlogDetail({ blog, onBack, onSelectBlog }) {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(blog?.likes || 0);
  const [viewsCount, setViewsCount] = useState(blog?.views || 0);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loadingRelated, setLoadingRelated] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, margin: "-100px" });

  // Track views when blog loads
  useEffect(() => {
    const blogId = blog?._id || blog?.id;
    if (blogId) {
      incrementBlogViews(blogId)
        .then((updatedBlog) => {
          if (updatedBlog?.views !== undefined) {
            setViewsCount(updatedBlog.views);
          }
        })
        .catch((err) => {
          console.error('Error tracking views:', err);
        });
    }
  }, [blog?._id, blog?.id]);

  // Fetch related blogs
  useEffect(() => {
    const fetchRelated = async () => {
      const blogId = blog?._id || blog?.id;
      const blogCategory = blog?.category;
      if (!blogId) return;
      
      try {
        setLoadingRelated(true);
        // Try to get related blogs from API
        let related = await getRelatedBlogs(blogId);
        
        // If no related blogs from API, fetch all blogs and filter by category
        if (!related || related.length === 0) {
          const allBlogs = await getAllBlogs('published');
          if (Array.isArray(allBlogs) && blogCategory) {
            // Filter by same category, exclude current blog
            related = allBlogs
              .filter(b => {
                const bId = b._id || b.id;
                const currentId = blog._id || blog.id;
                return b.category === blogCategory && bId !== currentId;
              })
              .slice(0, 3); // Limit to 3 related blogs
          }
        }
        
        setRelatedBlogs(related || []);
      } catch (err) {
        console.error('Error fetching related blogs:', err);
        // Fallback: try to get blogs from same category
        try {
          if (blog?.category) {
            const allBlogs = await getAllBlogs('published');
            if (Array.isArray(allBlogs)) {
              const blogId = blog._id || blog.id;
              const related = allBlogs
                .filter(b => {
                  const bId = b._id || b.id;
                  return b.category === blog.category && bId !== blogId;
                })
                .slice(0, 3);
              setRelatedBlogs(related);
            }
          }
        } catch (fallbackErr) {
          console.error('Error in fallback related blogs:', fallbackErr);
          setRelatedBlogs([]);
        }
      } finally {
        setLoadingRelated(false);
      }
    };

    fetchRelated();
  }, [blog?._id, blog?.id, blog?.category]);

  // Initialize likes state from blog data
  useEffect(() => {
    if (blog?.likes !== undefined) {
      setLikesCount(blog.likes);
    }
    if (blog?.views !== undefined) {
      setViewsCount(blog.views);
    }
  }, [blog]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Blog not found</p>
          <button
            onClick={onBack}
            className="px-4 py-2 bg-[#ED0331] text-white rounded-lg hover:bg-[#87021C] transition-colors"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  // Handle like/unlike
  const handleLike = async () => {
    const blogId = blog?._id || blog?.id;
    if (!blogId) return;
    
    const newAction = isLiked ? 'unlike' : 'like';
    try {
      const updatedBlog = await likeBlog(blogId, newAction);
      setIsLiked(!isLiked);
      if (updatedBlog?.likes !== undefined) {
        setLikesCount(updatedBlog.likes);
      } else {
        setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
      }
    } catch (err) {
      console.error('Error liking blog:', err);
    }
  };

  // Copy link to clipboard
  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Share functions
  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(window.location.href)}`;
    window.open(url, "_blank");
  };

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(url, "_blank");
  };

  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
    window.open(url, "_blank");
  };

  // Format content with better structure
  const formatContent = (content) => {
    if (!content) return <p className="text-gray-700 leading-relaxed mb-4 font-nunito">No content available.</p>;
    
    // Convert literal \n escape sequences to actual newlines
    let processedContent = content;
    if (typeof content === 'string') {
      // Replace literal \n with actual newlines
      processedContent = content.replace(/\\n/g, '\n');
    }
    
    // Split by double newlines to create paragraphs, or single newlines if no double newlines
    const paragraphs = processedContent.includes('\n\n') 
      ? processedContent.split('\n\n').filter((p) => p.trim())
      : processedContent.split('\n').filter((p) => p.trim());
    
    return paragraphs.map((para, idx) => {
      const trimmedPara = para.trim();
      if (!trimmedPara) return null;
      
      // Check for headings (lines starting with # or emoji indicators)
      if (trimmedPara.startsWith('#') || trimmedPara.startsWith('⚡') || trimmedPara.startsWith('✅') || trimmedPara.startsWith('**')) {
        // Format headings
        if (trimmedPara.startsWith('#')) {
          const level = trimmedPara.match(/^#+/)?.[0]?.length || 2;
          const text = trimmedPara.replace(/^#+\s*/, '');
          const headingClass = `font-playfair font-bold text-gray-900 mb-4 mt-6 ${
            level === 1 ? 'text-3xl' : level === 2 ? 'text-2xl' : 'text-xl'
          }`;
          
          if (level === 1) {
            return <h1 key={idx} className={headingClass}>{text}</h1>;
          } else if (level === 2) {
            return <h2 key={idx} className={headingClass}>{text}</h2>;
          } else if (level === 3) {
            return <h3 key={idx} className={headingClass}>{text}</h3>;
          } else {
            return <h4 key={idx} className={headingClass}>{text}</h4>;
          }
        }
        
        // Format bullet points and emphasized text
        const formatted = trimmedPara
          .replace(/\*\*(.*?)\*\*/g, "<strong class='font-semibold text-gray-900'>$1</strong>")
          .replace(/✅/g, "<span class='text-green-600 mr-2'>✓</span>")
          .replace(/⚡/g, "<span class='text-yellow-600 mr-2'>⚡</span>")
          .replace(/^-\s+/gm, "<span class='text-[#ED0331] mr-2'>•</span>")
          .replace(/\n/g, '<br />');
        
        return (
          <div
            key={idx}
            className="text-gray-700 leading-relaxed mb-4 font-nunito"
            dangerouslySetInnerHTML={{ __html: formatted }}
          />
        );
      }
      
      // Check for bullet points (lines starting with -)
      if (trimmedPara.startsWith('-') || trimmedPara.match(/^[•·]\s/)) {
        const formatted = trimmedPara
          .replace(/^[-•·]\s*/, '')
          .replace(/\*\*(.*?)\*\*/g, "<strong class='font-semibold text-gray-900'>$1</strong>");
        return (
          <div
            key={idx}
            className="flex items-start mb-2 text-gray-700 leading-relaxed font-nunito"
          >
            <span className="text-[#ED0331] mr-2 mt-1">•</span>
            <span dangerouslySetInnerHTML={{ __html: formatted }} />
          </div>
        );
      }
      
      // Check for code blocks
      if (trimmedPara.includes('function') || trimmedPara.includes('const') || trimmedPara.includes('let') || trimmedPara.startsWith('```')) {
        return (
          <pre
            key={idx}
            className="bg-gray-100 border-l-4 border-[#ED0331] p-4 rounded-lg overflow-x-auto mb-4 font-mono text-sm text-gray-800 whitespace-pre-wrap"
          >
            <code>{trimmedPara.replace(/```/g, '')}</code>
          </pre>
        );
      }
      
      // Regular paragraph - handle inline formatting and line breaks
      const formatted = trimmedPara
        .replace(/\*\*(.*?)\*\*/g, "<strong class='font-semibold text-gray-900'>$1</strong>")
        .replace(/\*(.*?)\*/g, "<em class='italic'>$1</em>")
        .replace(/\n/g, '<br />');
      
      return (
        <p 
          key={idx} 
          className="text-gray-700 leading-relaxed mb-4 font-nunito"
          dangerouslySetInnerHTML={{ __html: formatted }}
        />
      );
    }).filter(Boolean); // Remove null entries
  };

  return (
    <div className="min-h-screen bg-gray-50 font-nunito">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#ED0331] origin-left z-50"
        style={{ scaleX }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-[#ED0331] transition-colors duration-200 mb-6 group font-nunito font-semibold"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Blogs
        </motion.button>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden mb-8 shadow-2xl"
        >
          <img
        src={blog.hero || blog.heroImage || '/placeholder.jpg'}
        alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          
          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute top-6 left-6"
          >
            <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-[#ED0331] shadow-lg flex items-center gap-2">
              <Tag className="w-4 h-4" />
              {blog.category}
            </span>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Article Content */}
          <article className="lg:col-span-8">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-playfair text-3xl md:text-4xl lg:text-5xl mb-6 text-gray-900 leading-tight"
            >
              <span className="heading-primary">{blog.title}</span>
            </motion.h1>

            {/* Meta Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 md:gap-6 mb-8 pb-6 border-b border-gray-200"
            >
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ED0331] to-[#87021C] flex items-center justify-center shadow-lg">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{blog.author}</p>
                  <p className="text-sm text-gray-500">Author</p>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-5 h-5 text-[#ED0331]" />
                <span className="font-medium">
                  {blog.date || blog.createdAt ? new Date(blog.date || blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : 'N/A'}
                </span>
              </div>

              {/* Read Time */}
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-5 h-5 text-[#ED0331]" />
                <span className="font-medium">{blog.readTime || '5 min'}</span>
              </div>

              {/* Engagement Stats */}
              <div className="flex items-center gap-4 ml-auto">
                <button
                  onClick={handleLike}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all ${
                    isLiked
                      ? "bg-red-100 text-red-600"
                      : "bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600"
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
                  <span className="text-sm font-medium">{likesCount}</span>
                </button>
                <div className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {viewsCount >= 1000 ? `${(viewsCount / 1000).toFixed(1)}K` : viewsCount}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Share Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-3 mb-8 p-4 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl border border-red-100"
            >
              <span className="font-semibold text-gray-700 flex items-center gap-2">
                <Share2 className="w-5 h-5 text-[#ED0331]" />
                Share:
          </span>
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={shareOnTwitter}
                  className="w-10 h-10 rounded-full bg-white hover:bg-blue-50 flex items-center justify-center text-blue-500 transition-colors shadow-md"
                  title="Share on Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={shareOnFacebook}
                  className="w-10 h-10 rounded-full bg-white hover:bg-blue-50 flex items-center justify-center text-blue-600 transition-colors shadow-md"
                  title="Share on Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={shareOnLinkedIn}
                  className="w-10 h-10 rounded-full bg-white hover:bg-blue-50 flex items-center justify-center text-blue-700 transition-colors shadow-md"
                  title="Share on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopyLink}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-md ${
                    copied
                      ? "bg-green-100 text-green-600"
                      : "bg-white hover:bg-gray-50 text-gray-600"
                  }`}
                  title="Copy link"
                >
                  {copied ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    <LinkIcon className="w-5 h-5" />
                  )}
                </motion.button>
              </div>
            </motion.div>

            {/* Article Content */}
            <motion.div
              ref={contentRef}
              initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="prose prose-lg max-w-none bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg border border-gray-100"
            >
              <div className="text-base md:text-lg leading-relaxed">
                {formatContent(blog.content)}
              </div>

              {/* Tags */}
              {blog.tags && blog.tags.length > 0 && (
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Tag className="w-5 h-5 text-[#ED0331]" />
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isContentInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                        className="px-4 py-2 bg-gradient-to-r from-red-50 to-pink-50 text-[#ED0331] rounded-full text-sm font-semibold border border-red-100 hover:from-red-100 hover:to-pink-100 transition-all cursor-pointer"
                      >
                        #{tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Author Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#ED0331] to-[#87021C] flex items-center justify-center mb-4 shadow-lg">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900">{blog.author}</h3>
              </div>
            </motion.div>

            {/* Related Blogs */}
            {loadingRelated ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <p className="text-gray-500 text-sm">Loading related articles...</p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="font-semibold text-xl text-gray-900 mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#ED0331]" />
                  Related Articles
                </h3>
                {relatedBlogs.length > 0 ? (
                  <div className="space-y-4">
                    {relatedBlogs.map((relatedBlog, idx) => {
                      const relatedBlogId = relatedBlog._id || relatedBlog.id || idx;
                      return (
                      <motion.div
                        key={relatedBlogId}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                        onClick={() => {
                          if (relatedBlog?.slug) {
                            navigate(`/blog/${relatedBlog.slug}`);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          } else if (onSelectBlog) {
                            onSelectBlog(relatedBlog);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }
                        }}
                        className="group cursor-pointer p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
                      >
                        <div className="flex gap-3">
                          <img
                            src={relatedBlog.hero || relatedBlog.heroImage || '/placeholder.jpg'}
                            alt={relatedBlog.title}
                            className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-sm text-gray-900 line-clamp-2 mb-1 group-hover:text-[#ED0331] transition-colors">
                              {relatedBlog.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <Clock className="w-3 h-3" />
                              {relatedBlog.readTime || '5 min'}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm text-center py-4">No related articles found.</p>
                )}
              </motion.div>
            )}

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-br from-[#ED0331] to-[#87021C] rounded-2xl p-6 text-white shadow-lg"
            >
              <h3 className="font-semibold text-xl mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Article Stats
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-90">Reading Time</span>
                  <span className="font-semibold">{blog.readTime || '5 min'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-90">Views</span>
                  <span className="font-semibold">
                    {viewsCount >= 1000 ? `${(viewsCount / 1000).toFixed(1)}K` : viewsCount}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-90">Likes</span>
                  <span className="font-semibold">{likesCount}</span>
                </div>
              </div>
            </motion.div>
          </aside>
        </div>
      </div>
    </div>
  );
}
