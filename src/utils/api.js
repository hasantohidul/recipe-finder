import axios from "axios";

const API_URL = "https://api.spoonacular.com/recipes";
const API_KEY = "c4fe594478d34627a8353cb2b34581f7";

export const fetchRecipes = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/complexSearch`, {
      params: {
        query: query,
        apiKey: API_KEY,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};

export const fetchRecipeDetails = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}/information`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    return null;
  }
};
