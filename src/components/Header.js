import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
background-color: #343a40;
color: #fff;
padding: 20px;
text-align: center;`

function Header() {
  return (
    <HeaderContainer>
      <h1>Recipe Finder</h1>
    </HeaderContainer>
  )
};

export default Header;