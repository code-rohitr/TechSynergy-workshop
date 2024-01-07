import { useState, useEffect } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Catalogue from './Components/catalogue/Catalogue'
import Upload from './Components/Upload/Upload'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Recipe from './Components/Recipe/Recipe'

function App() {

  const [data, setData] = useState();
  const [selectedRecipe, setSelectedRecipe] = useState();

  useEffect(() => {
    // Defining the API endpoint
    const apiUrl = 'https://tech-synergy-backend-3uoftpsktq-uc.a.run.app';

    // making a get request
    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        // Handle the error
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Upload />} />
        <Route path='/recipe' element={<Recipe id={selectedRecipe} data={data} />} />
        <Route path='/recipes' element={<Catalogue data={data} setSelectedRecipe={setSelectedRecipe} />} />
      </Routes>
    </div>
  )
}

export default App
