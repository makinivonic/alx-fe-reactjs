import axios from "axios";

export const fetchUserData = async (username, location, minRepos) => {
    let query = `q=${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    try {
        const response = await axios.get(`https://api.github.com/search/users?${query}`);
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
