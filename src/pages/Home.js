import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
import { fetchRecipes } from "../utils/api";

function Home({recipes, onSearch}) {

  const handleSearch = async (query) => {
    const data = await fetchRecipes(query);
    onSearch(data);
  };

  return (
    <div>
        <Header />
        <SearchBar onSearch={handleSearch} />
        <RecipeList recipes={recipes} />

    </div>
  )
}


export default Home;