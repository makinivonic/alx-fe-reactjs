import { useState } from "react";

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
      onSearch(username);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="flex space-x-2">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded-lg"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
