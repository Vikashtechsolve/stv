import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../component/Layout';
import BlogDetail from '../component/blogs/BlogDetail';
import data from '../../rawdata.json';

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const blogs = data?.blogData || [];

  useEffect(() => {
    const foundBlog = blogs.find(b => b.id === id);
    if (foundBlog) {
      setBlog(foundBlog);
    }
  }, [id, blogs]);

  const handleBack = () => {
    navigate('/blogs');
  };

  const handleSelectBlog = (selectedBlog) => {
    setBlog(selectedBlog);
  };

  if (!blog) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600 mb-4 text-lg">Blog not found</p>
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

