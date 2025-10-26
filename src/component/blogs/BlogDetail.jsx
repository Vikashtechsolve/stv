import React, { useState } from "react";

export default function BlogDetail({ blog, onBack }) {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6 md:p-10">
      <button onClick={onBack} className="text-gray-600 mb-4 hover:underline">
        ← Back to Blogs
      </button>

      <img
        src={blog.hero}
        alt={blog.title}
        className="w-full h-72 object-cover rounded-xl mb-6"
      />

      <h2 className="font-playfair text-3xl md:text-4xl mb-3 red-gradient">
        {blog.title}
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        {blog.author} • {blog.date} • {blog.readTime}
      </p>

      <div className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
        {blog.content}
      </div>

      <div className="flex flex-wrap gap-2 mt-6">
        {blog.tags.map((t) => (
          <span
            key={t}
            className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-700"
          >
            #{t}
          </span>
        ))}
      </div>
    </div>
  );
}