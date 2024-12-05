import { AiOutlineBell } from "react-icons/ai"; // Import the notification icon

function NotificationButton() {
  return (
    <div className="relative group">
      <button className="text-gray-800 hover:text-blue-500">
        <AiOutlineBell size={24} />
      </button>
      <span className="absolute top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-gray-800 text-white text-xs font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Notifications
      </span>
    </div>
  );
}

export default NotificationButton;
