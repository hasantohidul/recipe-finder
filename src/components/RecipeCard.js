import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import placeholder from '../assets/images/placeholder.jpg';

const Card = styled.div`
box-sizing: border-box;
background-color: #fff;
border: 1px solid #ddd;
border-radius: 10px;
overflow: hidden;
width: 220px;
height: 320px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
position: relative;

&:hover {
transform: translateY(-10px);
}
 `;

const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-bottom: 1px solid #ddd;
`;

const Title = styled.h3`
  font-size: 20px;
  padding: 15px;
  margin: 0;
  color: #333;
  text-align: center;
  height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Button = styled.button`
  width: calc(100% - 30px);
  margin: 10px 15px 15px;  
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

function RecipeCard({ recipe, searchResults }) {
  const handleImageError = e => {
    e.target.src = placeholder;
  }
  return (
    <Card>
      <Image src={recipe.image} alt={recipe.title} onError={handleImageError} />
      <Title>{recipe.title}</Title>
      <Link to={`/recipe/${recipe.id}`}
      state={{searchResults}}>
        <Button>View Recipe</Button>
      </Link>
    </Card>
  );
}

export default RecipeCard;
