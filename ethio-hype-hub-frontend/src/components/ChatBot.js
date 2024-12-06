import React, { useState } from 'react';
import { FiMessageSquare } from 'react-icons/fi'; 
import { AiOutlineClose } from 'react-icons/ai'; 

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await fetch('http://127.0.0.1:8000/chatbot/response/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();
      setMessages((prev) => [...prev, { sender: 'bot', text: data.response }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [...prev, { sender: 'bot', text: 'An error occurred. Please try again.' }]);
    }

    setInput('');
  };

  return (
    <div>
      {/* Chat Icon */}
      {!isOpen && (
        <div
          onClick={toggleChat}
          className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-blue-600 transition-all duration-300"
        >
          <FiMessageSquare size={24} />
        </div>
      )}

      {/* Chat Section */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between bg-blue-500 text-white p-4">
            <h2 className="text-lg font-bold">Chat with Us</h2>
            <AiOutlineClose
              size={20}
              className="cursor-pointer hover:text-gray-200"
              onClick={toggleChat}
            />
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 ${msg.sender === 'bot' ? 'text-gray-600' : 'text-right text-gray-800'}`}
              >
                <p>{msg.sender === 'bot' ? `Bot: ${msg.text}` : `You: ${msg.text}`}</p>
              </div>
            ))}
          </div>

          {/* Input Section */}
          <div className="p-4 bg-gray-100 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={sendMessage}
              className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
