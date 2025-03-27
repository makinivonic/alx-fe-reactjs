import { useState } from "react";
import Search from "./components/Search";
import UserCard from "./components/UserCard";
import { fetchUserData } from "./services/githubService.js";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (username) => {
    setLoading(true);
    const userData = await fetchUserData(username);
    setUser(userData);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      <div className="mt-4">
        <UserCard user={user} loading={loading} />
      </div>
    </div>
  );
};

export default App;
