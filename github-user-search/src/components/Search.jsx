import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = ({ onSearch }) => {
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);

        const users = await fetchUserData(username, location, minRepos);

        if (users.length === 0) {
            setError(true);
        } else {
            onSearch(users);
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
            {error && <p className="text-red-500">Looks like we can't find the user</p>}
        </div>
    );
};

export default Search;
