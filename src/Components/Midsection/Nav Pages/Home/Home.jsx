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
            <span>Do You Have Account Already? <span style={{color:'#B65F54'}}>Logn In</span></span>
        </div>
        <div className='upper-div-two'>
            <div></div>
        </div>
    </main>
    </>
  )
}
