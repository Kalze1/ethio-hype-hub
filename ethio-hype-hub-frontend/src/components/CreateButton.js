// src/components/TopBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const CreateButton = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      <Link to="/create" className="relative group">
        <FontAwesomeIcon icon={faPlusCircle} size="2x" className="text-gray-800 hover:text-blue-500 cursor-pointer" />
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-sm bg-black text-white rounded px-2 py-1 mt-2">Create</span>
      </Link>
    </div>
  );
};

export default CreateButton;
