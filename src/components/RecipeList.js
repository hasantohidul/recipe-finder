import React from "react";
import styled from "styled-components";
import RecipeCard from "./RecipeCard";

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

function RecipeList({ recipes, onSelectRecipe }) {
  return (
    <ListContainer>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onSelectRecipe={onSelectRecipe}
          searchResults={recipes}
        />
      ))}
    </ListContainer>
  );
}

export default RecipeList;
