import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Catalogue.css'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'

function Catalogue({ data, setSelectedRecipe }) {

    const navigate = useNavigate();

    function handleNavigate(id) {
        setSelectedRecipe(id)
        navigate("/recipe")
    }

    return (
        <div className='cat-outer-container'>
            <Navbar />

            <div className="cat-main-container">

                <div className="cards-container">
                    {
                        data && data.map((item, index) => {
                            return (
                                <div className="card">
                                    <div className="cuisine">
                                        <p>{item.cuisine_style}</p>
                                    </div>

                                    <div className="title">
                                        {item.title}
                                    </div>

                                    <div className="desc">
                                        {item.desc}
                                    </div>
                                    <div className="btn-container" onClick={() => { handleNavigate(item.id) }}>
                                        <Button text={"View Recipe"} btnClass={"secondary"} />
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Catalogue