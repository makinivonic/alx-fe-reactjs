import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);

        const usersData = await fetchUserData(username, location, minRepos);

        if (usersData.length === 0) {
            setError(true);
        } else {
            setUsers(usersData); // Store users in state and display them
        }

        setLoading(false);
    };

    return (
        <div className="p-4 max-w-lg mx-auto">
            <form onSubmit={handleSearch} className="bg-gray-100 p-4 rounded-lg shadow">
                <input
                    type="text"
                    placeholder="GitHub Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border p-2 rounded w-full mb-2"
                />
                <input
                    type="text"
                    placeholder="Location (optional)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="border p-2 rounded w-full mb-2"
                />
                <input
                    type="number"
                    placeholder="Min Repos (optional)"
                    value={minRepos}
                    onChange={(e) => setMinRepos(e.target.value)}
                    className="border p-2 rounded w-full mb-2"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
                    Search
                </button>
            </form>

            {loading && <p className="mt-2">Loading...</p>}
            {error && <p className="text-red-500">No users found.</p>}

            {users.length > 0 && (
                <div className="mt-4">
                    {users.map((user) => (
                        <div key={user.id} className="bg-white p-4 rounded-lg shadow mb-2 flex items-center gap-4">
                            <img src={user.avatar_url} alt="Avatar" className="w-12 h-12 rounded-full" />
                            <div>
                                <p className="font-semibold">{user.login}</p>
                                <p>Location: {user.location}</p>
                                <p>Repos: {user.public_repos}</p>
                                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                                    View Profile
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
