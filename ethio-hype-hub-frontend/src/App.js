import React from 'react';
import PostCard from './components/PostCard';

const App = () => {
  const posts = [
    {
      id: 1,
      image: 'https://via.placeholder.com/400',
      username: 'JohnDoe',
      caption: 'Loving this new trending fashion!',
      likes: 45,
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/400',
      username: 'JaneSmith',
      caption: 'Delicious coffee at this amazing café! ☕',
      likes: 30,
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/400',
      username: 'Alex99',
      caption: 'Check out this cool slang: "Chillax"',
      likes: 20,
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/400',
      username: 'EveStar',
      caption: 'This food trend is amazing! 🍔',
      likes: 50,
    },
    // Add more posts if needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Ethio-Hype-Hub Trending Posts
      </h1>
      {/* Horizontal layout with wrapping */}
      <div className="flex flex-wrap gap-6 justify-start px-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default App;
