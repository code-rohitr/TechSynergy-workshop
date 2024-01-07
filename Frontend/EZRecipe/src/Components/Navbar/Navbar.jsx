import React from 'react'
import Button from '../Button/Button'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='nav-outer-container'>
            <div className="logo">
                <h2>EZRecipe</h2>
            </div>

            <div className="nav-links">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/recipes"}>Recipes</Link></li>
                    <li><Link to={"/add"}>Add Recipe</Link></li>
                    {/* <li><Link to={"/"}>About</Link></li> */}
                    {/* <li><Link to={"/"}>Contact</Link></li> */}
                </ul>
            </div>

            <div className="btn-container">
                <Button text="Account" btnClass={"primary"} />
            </div>
        </div>
    )
}

export default Navbar