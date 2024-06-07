import React, {useState} from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  width: 300px;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;


function SearchBar({onSearch}) {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (query.trim() !== "") {
            onSearch(query)
        }
    }

    return (
        <SearchContainer>
            <Input 
                type="text"
                placeholder="Search for recipes..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                />
                <Button onClick={handleSearch}>Search</Button>
        </SearchContainer>
    )
}

export default SearchBar;