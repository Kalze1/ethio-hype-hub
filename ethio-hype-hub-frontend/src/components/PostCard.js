const PostCard = ({ post }) => {
    return (
      <div className="w-72 rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full h-48 object-cover" src={post.image} alt={post.username} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{post.username}</div>
          <p className="text-gray-700 text-base">{post.caption}</p>
        </div>
        <div className="px-6 pt-4 pb-2 flex items-center justify-between">
          <button className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-1 px-4 rounded">
            👍 Like ({post.likes})
          </button>
          <button className="text-white bg-red-500 hover:bg-red-700 font-bold py-1 px-4 rounded">
            👎 Dislike
          </button>
          <button className="text-white bg-green-500 hover:bg-green-700 font-bold py-1 px-4 rounded">
            💬 Comments
          </button>
        </div>
      </div>
    );
  };
  
  export default PostCard;
  