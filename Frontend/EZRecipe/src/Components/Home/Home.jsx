import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import hero from '../../assets/hero.png'

function Home() {
  return (
    <div className='home-outer-container'>
      <Navbar />

      <div className="home-main-container">
        <div className="text-container">
          <h4>Join the Tasteful Community at EZRecipe</h4>
          <h1>Discover, Create, Share Your Culinary Journey Begins Here! </h1>
          <ul>
            <li>Easy-to-follow step-by-step guides for all skill levels</li>
            <li>Explore a variety of cuisines and dishes</li>
            <li>Create delicious meals with our curated recipes</li>
          </ul>
        </div>

        <div className="img-container">
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home