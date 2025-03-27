import { useState } from "react";
import axios from "axios";

const Search = () => {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchUserData = async (e) => {
        e.preventDefault(); // Prevent page refresh on form submit
        setLoading(true);
        setError(false);

        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            setUserData(response.data);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4">
            {/* ✅ Add form with onSubmit */}
            <form onSubmit={fetchUserData} className="flex gap-2">
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border p-2 rounded"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Search
                </button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>Looks like we can't find the user</p>}

            {userData && (
                <div className="mt-4">
                    <img src={userData.avatar_url} alt="Avatar" className="w-16 h-16 rounded-full" />
                    <p>{userData.login}</p>
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                        View Profile
                    </a>
                </div>
            )}
        </div>
    );
};

export default Search;
