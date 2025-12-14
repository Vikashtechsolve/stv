import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../component/Layout';
import BlogDetail from '../component/blogs/BlogDetail';
import { getBlogBySlug } from '../services/blogApi';
import { Loader2 } from 'lucide-react';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) {
        setError('Invalid blog slug');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const fetchedBlog = await getBlogBySlug(slug);
        if (fetchedBlog) {
          setBlog(fetchedBlog);
        } else {
          setError('Blog not found');
        }
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError('Failed to load blog. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  const handleBack = () => {
    navigate('/blogs');
  };

  const handleSelectBlog = (selectedBlog) => {
    if (selectedBlog?.slug) {
      navigate(`/blog/${selectedBlog.slug}`);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-12 h-12 text-[#ED0331] animate-spin mx-auto mb-4" />
            <p className="text-gray-600 font-nunito">Loading blog...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !blog) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600 mb-4 text-lg">{error || 'Blog not found'}</p>
            <button
              onClick={handleBack}
              className="px-6 py-3 bg-[#ED0331] text-white rounded-lg hover:bg-[#87021C] transition-colors font-semibold"
            >
              Back to Blogs
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <BlogDetail blog={blog} onBack={handleBack} onSelectBlog={handleSelectBlog} />
    </Layout>
  );
};

export default BlogDetailPage;

