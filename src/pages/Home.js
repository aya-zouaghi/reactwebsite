import React from 'react'
import {Link}from "react-router-dom"
import BannerImage from "../assets/pizza.jpeg"
import '../styles/Home.css'
function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${BannerImage})`}}>
    <div className='headerContainer'>
        <h1>Pedro's Pizzaria</h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <link to="/menu"></link>
        <button> ORDER NOW</button>
    </div>
    </div>
  )
}

export default Home
