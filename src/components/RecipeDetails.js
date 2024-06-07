import React from "react";
import styled from "styled-components";

const DetailsContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Image = styled.img`
width: 100%;
max-height: 400px;
object-fit: cover;
border-radius: 8px;
`

const Title = styled.h2`
font-size: 32px;
margin: 20px 0;
text-align: center;`

const Instructions = styled.div`
font-size: 18px;
line-height: 1.6;
margin: 20px 0;
ol, ul {
padding-left: 20px;

}

li {
margin-bottom: 10px;}`

const IngredientList = styled.ul`
list-style-type: disc;
margin: 20px 0;
padding-left: 20px;
li {
font-size: 18px
line-height: 1.6}`


function RecipeDetails({recipe}) {
  return (
    <DetailsContainer>
      <Image src={recipe.image} alt={recipe.title} />
      <Title>{recipe.title}</Title>
      <IngredientList>
        {recipe.extendedIngredients && recipe.extendedIngredients.map((ingredient, index) => (
          <li key={index}>{ingredient.original}</li>
        ))}
      </IngredientList>
      <Instructions dangerouslySetInnerHTML={{__html: recipe.instructions}} />
    </DetailsContainer>
  )
}

export default RecipeDetails;