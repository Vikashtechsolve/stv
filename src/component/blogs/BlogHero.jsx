import React, { useState } from 'react';
import data from "../../../rawdata.json";
import BlogDetail from './BlogDetail';
const BLOGS = data.blogData;

export default function BlogPage() {
  
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filteredBlogs = BLOGS.filter(b => {
    const matchesSearch = b.title.toLowerCase().includes(search.toLowerCase()) || b.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || b.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#E2E2E2] p-6 md:p-12 font-nunito">
      {!selectedBlog ? (
        <BlogList 
          blogs={filteredBlogs} 
          onSelect={setSelectedBlog}
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
        />
      ) : (
        <BlogDetail blog={selectedBlog} onBack={() => setSelectedBlog(null)} />
      )}

      <style jsx>{`
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-nunito { font-family: 'Nunito Sans', sans-serif; }
        .red-gradient{ background: linear-gradient(to right, #ED0331, #87021C); -webkit-background-clip: text; -webkit-text-fill-color: transparent; line-height: 1.375; }
      `}</style>
    </div>
  );
}

function BlogList({ blogs, onSelect, search, setSearch, category, setCategory }) {
  const categories = ['All', ...new Set(BLOGS.map(b => b.category))];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-playfair mb-6 text-center"><span className="red-gradient">DevNotes</span></h1>
      <p className="text-center text-gray-600 mb-10">Curated blogs on Coding • AI • Science • Data</p>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <input 
          type="text" 
          placeholder="🔍 Search blogs..." 
          value={search} 
          style={{border:"1px solid gray"}}
          onChange={(e) => setSearch(e.target.value)} 
          className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ED0331]"
        />

        <select 
          value={category}
          style={{border:"1px solid gray"}}
          onChange={(e) => setCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ED0331]"
        >
          {categories.map(c => <option key={c}>{c}</option>)}
        </select>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((b) => (
          <div key={b.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden cursor-pointer flex flex-col" onClick={() => onSelect(b)}>
            <img src={b.hero} alt={b.title} className="w-full h-48 object-cover" />
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-playfair text-xl mb-2 leading-tight">{b.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{b.excerpt}</p>
              </div>
              <div className="text-xs text-gray-500 flex justify-between">
                <span>{b.author} • {b.date}</span>
                <span>{b.readTime}</span>
              </div>
            </div>
          </div>
        ))}

        {blogs.length === 0 && (
          <p className="col-span-full text-center text-gray-500">No blogs found 😔</p>
        )}
      </div>
    </div>
  );
}
