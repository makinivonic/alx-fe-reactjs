import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load recipes");
        }
        return response.json();
      })
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error loading recipes:", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-500">
        Recipe Sharing Platform
      </h1>
      <button
        className="bg-green-500 text-white py-2 px-4 rounded mb-6 hover:bg-green-600"
        onClick={() => navigate("/add-recipe")}
      >
        Add New Recipe
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer"
              onClick={() => navigate(`/recipe/${recipe.id}`)}
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{recipe.title}</h2>
                <p className="text-gray-600">{recipe.summary}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
