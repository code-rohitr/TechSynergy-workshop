import React from 'react'
import './Recipe.css'
import Navbar from '../Navbar/Navbar'

function Recipe({ id, data }) {



    return (
        <div className='recipe-outer-container'>
            <Navbar />

            {
                data && data.map((item, index) => {
                    if (item.id == id) {
                        return (
                            <div className="recipe-main-container" key={index}>
                                <h2>Title: <p>{item.title}</p></h2>
                                <h2>Description: <p>{item.desc}</p></h2>
                                <h2>Cuisine: <p>{item.cuisine_style}</p></h2>
                                <h2>Preparation Time: <p>{item.prep}</p></h2>
                                <h2>Cooking Time: <p>{item.cooking_time}</p></h2>
                                <div className="ingredients-container">
                                    <h2>Ingredients: </h2>
                                    <ul>
                                        {
                                            item.ingredients.map((element) => {
                                                return (
                                                    <li>{element}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="steps-container">
                                    <h2>Cooking steps: </h2>
                                    <ul>
                                        {
                                            item.recipe_steps.map((element) => {
                                                return (
                                                    <li>{element}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default Recipe