// src/components/Posts.js
import React, { useEffect, useState } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/posts/');
      if (!response.ok) throw new Error('Failed to fetch posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-5">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Latest Posts</h1>
      {/* Masonry Layout */}
      <div className="masonry-grid">
        {posts.map((post) => (
          <div key={post.id} className="masonry-item ">
            <img
              src={`http://127.0.0.1:8000${post.image}`}
              alt={post.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="p-4 bg-white">
              <p className="font-bold">{post.creator}</p>
              <p className="text-gray-600 text-sm">{post.title || 'No caption provided'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
