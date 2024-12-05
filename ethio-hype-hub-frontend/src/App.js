import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TopBar from './components/TopBar';
import ChatBot from './components/ChatBot';
import Posts from './components/Posts';

const App = () => {
  return (
    <Router>
      <TopBar />
      <div className="bg-gray-100 min-h-screen py-10">
        <Posts />
      </div>
      <ChatBot />
    </Router>
  );
};

export default App;
