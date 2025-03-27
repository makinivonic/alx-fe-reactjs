const UserCard = ({ user, loading }) => {
    if (loading) return <p className="text-gray-500">Loading...</p>;
  
    if (!user) return <p className="text-red-500">Looks like we can't find the user.</p>;
  
    return (
      <div className="border p-4 rounded-lg shadow-md flex flex-col items-center">
        <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full" />
        <h2 className="text-lg font-semibold">{user.name || user.login}</h2>
        <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          View Profile
        </a>
      </div>
    );
  };
  
  export default UserCard;
  