import './App.css';
import RecipeBook from './RecipeBook'
import Layout from './Layout'
import About from './About'
import Missing from './Missing'
import AddRecipe from './AddRecipe';
import { Route, Routes } from 'react-router-dom';
import { useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Recipe 1",
      submittedBy: "Person 1",
      context: "my favorite dish",
      timeInMinutes: 90,
      persons: 4,
      ingredients: [{"ingredient 1": "100g"}, {"ingredient 2": "400g"}],
      utilities: ["utility 1"],
      instructions: ["instruction 1", "instruction 2"],
      image: "url with image"
    },
    {
      id: 2,
      title: "Recipe 2",
      submittedBy: "Person 2",
      context: "my favorite dish",
      timeInMinutes: 110,
      persons: 4,
      ingredients: [{"ingredient 1": "100g"}, {"ingredient 2": "400g"}],
      utilities: ["utility 2"],
      instructions: ["instruction 1", "instruction 2"],
      image: "url with image2"
    },
    {
      id: 3,
      title: "Recipe 3"}
  ])

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<RecipeBook recipes={recipes} />} />
          <Route path='recept-toevoegen' element={<AddRecipe setRecipes={setRecipes} />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
