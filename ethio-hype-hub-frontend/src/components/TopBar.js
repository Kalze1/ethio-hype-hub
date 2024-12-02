import React from 'react';
import NotificationButton from './Notification';
import logo from '../assets/logo.png';




const TopBar = () => {
  return (
    <div className="bg-white shadow-md py-2 px-6 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
        {/* <img
          src="https://via.placeholder.com/40"
          alt="Ethio-Hype-Hub Logo"
          className="h-10 w-10 rounded-full"
        /> */}
        <span className="text-2xl font-bold text-gray-800">Ethio Hype Hub</span>
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Search trends, topics, or users"
          className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-4">
        <button className="text-gray-800 font-bold hover:text-blue-500">
          Home
        </button>
        <button className="text-gray-800 font-bold hover:text-blue-500">
          Explore
        </button>
        <NotificationButton/>
        <button className="text-gray-800 font-bold hover:text-blue-500">
          Profile
        </button>
      </div>
    </div>
  );
};

export default TopBar;
