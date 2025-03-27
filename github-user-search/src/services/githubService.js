import axios from "axios";

export const fetchUserData = async (username, location, minRepos) => {
    // Ensure the query starts with "https://api.github.com/search/users?q"
    let query = `https://api.github.com/search/users?q=${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    try {
        // Make API request with pagination for better results
        const response = await axios.get(`${query}&per_page=10`);
        const usersData = response.data.items;

        // Fetch detailed user info (since search API doesn’t return repo count)
        const detailedUsers = await Promise.all(
            usersData.map(async (user) => {
                const userResponse = await axios.get(user.url);
                return {
                    ...user,
                    location: userResponse.data.location || "N/A",
                    public_repos: userResponse.data.public_repos || "N/A",
                };
            })
        );

        return detailedUsers;
    } catch (error) {
        console.error("Error fetching user data:", error);
        return [];
    }
};
