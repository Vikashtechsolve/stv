import React, { useState, useRef } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
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
import data from "../../../rawdata.json";

const BLOGS = data?.blogData || [];

export default function BlogDetail({ blog, onBack, onSelectBlog }) {
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

  const [copied, setCopied] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, margin: "-100px" });

  // Get related blogs (same category, excluding current blog)
  const relatedBlogs = (BLOGS || []).filter(
    (b) => b && b.category === blog?.category && b.id !== blog?.id
  ).slice(0, 3);

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
    // Split by double newlines to create paragraphs
    const paragraphs = content.split("\n\n").filter((p) => p.trim());
    return paragraphs.map((para, idx) => {
      // Check for headings (lines starting with #)
      if (para.startsWith("✅") || para.includes("**")) {
        // Format bullet points and emphasized text
        const formatted = para
          .replace(/\*\*(.*?)\*\*/g, "<strong class='font-semibold text-gray-900'>$1</strong>")
          .replace(/✅/g, "<span class='text-green-600 mr-2'>✓</span>");
        return (
          <p
            key={idx}
            className="text-gray-700 leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: formatted }}
          />
        );
      }
      // Check for code blocks
      if (para.includes("function") || para.includes("const") || para.includes("let")) {
        return (
          <pre
            key={idx}
            className="bg-gray-100 border-l-4 border-[#ED0331] p-4 rounded-lg overflow-x-auto mb-4 font-mono text-sm text-gray-800"
          >
            <code>{para}</code>
          </pre>
        );
      }
      return (
        <p key={idx} className="text-gray-700 leading-relaxed mb-4 font-nunito">
          {para}
        </p>
      );
    });
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
        src={blog.hero}
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
                <span className="font-medium">{blog.date}</span>
              </div>

              {/* Read Time */}
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-5 h-5 text-[#ED0331]" />
                <span className="font-medium">{blog.readTime}</span>
              </div>

              {/* Engagement Stats */}
              <div className="flex items-center gap-4 ml-auto">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all ${
                    isLiked
                      ? "bg-red-100 text-red-600"
                      : "bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-600"
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
                  <span className="text-sm font-medium">24</span>
                </button>
                <div className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm font-medium">1.2K</span>
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
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#ED0331] to-[#87021C] flex items-center justify-center mb-4 shadow-lg">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-semibold text-xl text-gray-900 mb-1">{blog.author}</h3>
                <p className="text-sm text-gray-500">Tech Writer & Educator</p>
              </div>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                Passionate about sharing knowledge and helping developers grow their skills.
              </p>
            </motion.div>

            {/* Related Blogs */}
            {relatedBlogs.length > 0 && (
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
                <div className="space-y-4">
                  {relatedBlogs.map((relatedBlog, idx) => (
                    <motion.div
                      key={relatedBlog.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + idx * 0.1 }}
                      onClick={() => {
                        if (onSelectBlog) {
                          onSelectBlog(relatedBlog);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }}
                      className="group cursor-pointer p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200"
                    >
                      <div className="flex gap-3">
                        <img
                          src={relatedBlog.hero}
                          alt={relatedBlog.title}
                          className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm text-gray-900 line-clamp-2 mb-1 group-hover:text-[#ED0331] transition-colors">
                            {relatedBlog.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Clock className="w-3 h-3" />
                            {relatedBlog.readTime}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
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
                  <span className="font-semibold">{blog.readTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-90">Views</span>
                  <span className="font-semibold">1.2K</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-90">Likes</span>
                  <span className="font-semibold">24</span>
                </div>
              </div>
            </motion.div>
          </aside>
        </div>
      </div>
    </div>
  );
}
