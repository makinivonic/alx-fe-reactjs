import { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !instructions) {
      setError("All fields are required.");
      return;
    }

    const newRecipe = {
      id: Date.now(), 
      title,
      ingredients: ingredients.split(",").map((item) => item.trim()),
      instructions: instructions.split(".").map((item) => item.trim()),
    };

    onAddRecipe(newRecipe);

    setTitle("");
    setIngredients("");
    setInstructions("");
    setError("");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-2xl font-bold text-center text-blue-500 mb-4">Add New Recipe</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
        <textarea
          placeholder="Ingredients (comma-separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
        <textarea
          placeholder="Preparation Steps (separate by periods)"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
