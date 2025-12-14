import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Search, Filter, Clock, User, ArrowRight, Sparkles, BookOpen, TrendingUp, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getAllBlogs } from '../../services/blogApi';
import BlogDetail from './BlogDetail';

export default function BlogHero() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        // Fetch only published blogs for public view
        // getAllBlogs now returns empty array on error instead of throwing
        const fetchedBlogs = await getAllBlogs('published');
        setBlogs(Array.isArray(fetchedBlogs) ? fetchedBlogs : []);
      } catch (err) {
        // This catch is now unlikely since getAllBlogs returns [] instead of throwing
        console.error('Error fetching blogs:', err);
        setError(null);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = (blogs || []).filter(b => {
    if (!b || !b.title || !b.excerpt) return false;
    const matchesSearch = b.title.toLowerCase().includes(search.toLowerCase()) || 
                          b.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || b.category === category;
    return matchesSearch && matchesCategory;
  });

  // Handle blog selection - navigate to detail page
  const handleSelectBlog = (blog) => {
    if (blog?.slug) {
      navigate(`/blog/${blog.slug}`);
    } else {
      setSelectedBlog(blog);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-nunito">
      {!selectedBlog ? (
        <BlogList 
          blogs={filteredBlogs}
          allBlogs={blogs}
          onSelect={handleSelectBlog}
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          loading={loading}
          error={error}
        />
      ) : (
        <BlogDetail 
          blog={selectedBlog} 
          onBack={() => setSelectedBlog(null)}
          onSelectBlog={handleSelectBlog}
        />
      )}
    </div>
  );
}

function BlogList({ blogs, allBlogs, onSelect, search, setSearch, category, setCategory, loading, error }) {
  const categories = ['All', ...new Set((allBlogs || []).map(b => b.category).filter(Boolean))];
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-[#ED0331] animate-spin mx-auto mb-4" />
          <p className="text-gray-600 font-nunito">Loading blogs...</p>
        </div>
      </div>
    );
  }

  // Show error state only if there's a specific error message
  // Otherwise, show empty state below

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 md:mb-16"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-50 to-pink-50 rounded-full mb-6"
        >
          <Sparkles className="w-4 h-4 text-[#ED0331]" />
          <span className="text-sm font-semibold text-gray-700">Latest Articles & Insights</span>
        </motion.div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair mb-4">
          <span className="heading-primary">DevNotes</span>
        </h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Curated blogs on <span className="font-semibold text-gray-800">Coding</span> • <span className="font-semibold text-gray-800">AI</span> • <span className="font-semibold text-gray-800">Data Science</span> • <span className="font-semibold text-gray-800">Technology</span>
        </motion.p>
      </motion.div>

      {/* Search and Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-10 md:mb-12"
      >
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-gray-100">
          {/* Search Input */}
          <div className="relative w-full lg:w-2/3">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input 
          type="text" 
              placeholder="Search blogs by title or content..."
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
              className="w-full pl-12 pr-4 py-3 md:py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ED0331]/50 focus:border-[#ED0331] transition-all font-nunito text-gray-700 placeholder-gray-400"
        />
          </div>

          {/* Category Filter */}
          <div className="relative w-full lg:w-auto">
            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
        <select 
          value={category}
          onChange={(e) => setCategory(e.target.value)}
              className="w-full lg:w-auto pl-12 pr-10 py-3 md:py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ED0331]/50 focus:border-[#ED0331] transition-all font-nunito text-gray-700 cursor-pointer appearance-none"
        >
              {categories.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
        </select>
      </div>
        </div>

        {/* Active Filters Display */}
        {(search || category !== 'All') && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-wrap gap-2 mt-4"
          >
            {search && (
              <motion.span
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="px-3 py-1 bg-[#ED0331]/10 text-[#ED0331] rounded-full text-sm font-semibold flex items-center gap-2"
              >
                Search: {search}
                <button
                  onClick={() => setSearch('')}
                  className="hover:bg-[#ED0331]/20 rounded-full p-0.5"
                >
                  ×
                </button>
              </motion.span>
            )}
            {category !== 'All' && (
              <motion.span
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="px-3 py-1 bg-[#ED0331]/10 text-[#ED0331] rounded-full text-sm font-semibold flex items-center gap-2"
              >
                Category: {category}
                <button
                  onClick={() => setCategory('All')}
                  className="hover:bg-[#ED0331]/20 rounded-full p-0.5"
                >
                  ×
                </button>
              </motion.span>
            )}
          </motion.div>
        )}
      </motion.div>

      {/* Results Count */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mb-6 flex items-center justify-between"
      >
        <p className="text-gray-600 font-nunito">
          <span className="font-semibold text-gray-800">{blogs.length}</span> {blogs.length === 1 ? 'article' : 'articles'} found
        </p>
      </motion.div>

      {/* Blog Grid */}
      <AnimatePresence mode="wait">
        {blogs.length === 0 ? (
          <motion.div
            key="no-results"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-center py-16 md:py-24"
          >
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-xl font-semibold text-gray-600 mb-2">No blogs found</p>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </motion.div>
        ) : (
          <motion.div
            key="blog-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {blogs.map((blog, index) => {
              const blogId = blog._id || blog.id || index;
              return (
              <BlogCard
                key={blogId}
                blog={blog}
                index={index}
                onSelect={onSelect}
              />
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function BlogCard({ blog, index, onSelect }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => {
        onSelect(blog);
      }}
      className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col transform hover:-translate-y-2 border border-gray-100"
    >
      {/* Hover Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#ED0331]/5 to-[#87021C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl z-10"
        initial={false}
      />
      
      {/* Image Container */}
      <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <motion.img
          src={blog.hero || blog.heroImage || '/placeholder.jpg'}
          alt={blog.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: index * 0.1 + 0.2 }}
          className="absolute top-4 left-4 z-20"
        >
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#ED0331] shadow-lg">
            {blog.category}
          </span>
        </motion.div>

        {/* Read Time Badge */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs font-semibold text-white z-20"
        >
          <Clock className="w-3 h-3" />
          {blog.readTime || '5 min'}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 flex flex-col flex-1 relative z-10">
        <div className="flex-1">
          <motion.h3
            className="font-playfair text-xl md:text-2xl mb-3 leading-tight text-gray-900 group-hover:text-[#ED0331] transition-colors duration-300 line-clamp-2"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {blog.title}
          </motion.h3>
          
          <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-3 font-nunito leading-relaxed">
            {blog.excerpt}
          </p>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 pt-4 mt-auto">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ED0331] to-[#87021C] flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-800">{blog.author || 'Anonymous'}</p>
                <p className="text-xs text-gray-500">
                  {blog.date || (blog.createdAt ? new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '')}
                </p>
              </div>
            </div>
            
            <motion.div
              animate={isHovered ? { x: 5 } : { x: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#ED0331] to-[#87021C] flex items-center justify-center text-white shadow-lg">
                <ArrowRight className="w-5 h-5" />
              </div>
            </motion.div>
          </div>

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {blog.tags.slice(0, 3).map((tag, tagIndex) => (
                <motion.span
                  key={tagIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 + tagIndex * 0.1 }}
                  className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium hover:bg-[#ED0331]/10 hover:text-[#ED0331] transition-colors"
                >
                  #{tag}
                </motion.span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
