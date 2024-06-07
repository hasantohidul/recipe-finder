import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import RecipePage from './pages/RecipePage';

function App() {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = results => {
    setRecipes(results);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home recipes={recipes} onSearch={handleSearch} />} />
        <Route path="/recipe/:id" element={<RecipePage recipes={recipes} />} />
      </Routes>
    </Router>
  )
}

export default App;