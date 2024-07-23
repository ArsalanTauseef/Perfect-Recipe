import React from 'react'
import './Home.css'

export const Home = () => {
  return (
    <>
    <main className='upper-main-section'>
        <div className='upper-div-one'>
            <h1>Your Daily Dish A <span style={{color:'#B65F54'}}>Food</span> Journey</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed enim magni voluptatum pariatur odio tempora ex, hic tempore iusto ipsam?</p>
            <div><button>Sign Up</button></div>
            <span>Do You Have Account Already? <span style={{color:'#B65F54', cursor:'pointer'}}>Logn In</span></span>
        </div>
        <div className='upper-div-two'>
            <div></div>
        </div>
    </main>
    <main className='upper-middle-section'>
      <div>
        <img src="https://media.istockphoto.com/id/1160735570/photo/healthy-vegan-meal.jpg?s=612x612&w=0&k=20&c=4D7qqrqEPubOXN-K0JPeDGsioN5A6YhgxY-PmI9EcGk=" alt="" />
      </div>
      <div>
        <h1>Share Your <span style={{color:'#B65F54', cursor:'pointer'}}>Recipes</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit </p>
        <button>Create New Recipe </button>
      </div>
    </main>
    </>
  )
}
