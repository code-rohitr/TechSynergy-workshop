import { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import './Upload.css'
import Button from '../Button/Button'
import axios from 'axios'

function Upload() {
    const [title, setTitle] = useState();
    const [cuisine, setCuisine] = useState();
    const [prepTime, setPrepTime] = useState();
    const [cookingTime, setCookingTime] = useState();
    const [serves, setServes] = useState();
    const [desc, setDesc] = useState();
    const [ingredients, setIngredients] = useState([]);
    const [recipes, setRecipes] = useState([]);

    // input states
    const [ingredient, setIngredient] = useState('');
    const [recipe, setRecipe] = useState('');

    function addIngredient() {
        setIngredients([...ingredients, ingredient])
        setIngredient('')
    }

    function addRecipe() {
        setRecipes([...recipes, recipe])
        setRecipe('')
    }

    const postData = {
        "title": title,
        "desc": desc,
        "cuisine_style": cuisine,
        "prep": prepTime,
        "cooking_time": cookingTime,
        "serves": serves,
        "ingredients": ingredients,
        "recipe_steps": recipes
    }

    // making post request
    const handlePostRequest = () => {
        console.log("working");
        const apiUrl = 'https://tech-synergy-backend-3uoftpsktq-uc.a.run.app/add_recipe';

        axios.post(apiUrl, postData)
            .then(response => {
                console.log('POST request successful:', response.data);
            })
            .catch(error => {
                console.error('Error encountered', error);
            });
    };

    return (
        <div className='upload-outer-container'>
            <Navbar />

            <div className="upload-main-container">
                <form action="#">
                    <input type="text" placeholder='Title' onChange={(e) => { setTitle(e.target.value) }} />
                    <input type="text" placeholder='Cuisine' onChange={(e) => { setCuisine(e.target.value) }} />
                    <input type="text" placeholder='Prep Time' onChange={(e) => { setPrepTime(e.target.value) }} />
                    <input type="text" placeholder='Cooking Time' onChange={(e) => { setCookingTime(e.target.value) }} />
                    <input type="number" placeholder='Serves' onChange={(e) => { setServes(e.target.value) }} />
                    <br />
                    <input type="text" placeholder='Description' onChange={(e) => { setDesc(e.target.value) }} />


                    <div className="ingredients-container">
                        <input type="text"
                            placeholder='Ingredients'
                            onChange={(e) => { setIngredient(e.target.value) }}
                        />
                        <button onClick={addIngredient}>ADD</button>
                        <ul>
                            {
                                ingredients.map((item, index) => {
                                    return (
                                        <li key={index}>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="recipe-container">
                        <input type="text"
                            placeholder='Recipe'
                            onChange={(e) => { setRecipe(e.target.value) }} />
                        <button onClick={addRecipe}>ADD</button>
                        <ul>
                            {
                                recipes.map((item, index) => {
                                    return (
                                        <li key={index}>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="btn-container" onClick={handlePostRequest}>
                        <Button text={"submit"} btnClass={"primary"} />
                    </div>
                    <input type="reset" />
                </form>
            </div>
        </div>
    )
}

export default Upload