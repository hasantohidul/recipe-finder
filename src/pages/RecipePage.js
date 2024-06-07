import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchRecipeDetails } from "../utils/api";
import RecipeDetails from "../components/RecipeDetails";
import RecipeList from "../components/RecipeList";

function RecipePage({ recipes }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecipeDetails = async () => {
      try {
        const data = await fetchRecipeDetails(id);
        setRecipe(data);
      } catch (err) {
        setError("Failed to fetch recipe details");
      }
    };
    getRecipeDetails();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>Back to Search Results</button>
      <RecipeDetails recipe={recipe} />
      {recipes.length > 0 && <RecipeList recipes={recipes} />}
    </div>
  );
}

export default RecipePage;
