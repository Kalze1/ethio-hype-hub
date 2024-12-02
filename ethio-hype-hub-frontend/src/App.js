import React from 'react';
import TopBar from './components/TopBar';
import PostCard from './components/PostCard';
import ChatBot from './components/ChatBot';

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
  ];

  return (
    <div>
      <TopBar />
      <div className="bg-gray-100 min-h-screen py-10 ">
        <div className="flex flex-wrap gap-6 justify-start pt-4 px-4">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
      <ChatBot />
    </div>
  );
};

export default App;
