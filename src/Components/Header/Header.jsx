import React from 'react'
import './Header.css'

export const Header = () => {
  return (
    <>
    <header>
        <nav>
            <div className='nav-left'>
                <h3>Perfect<span style={{color:'#B65F54'}}>Recipe</span></h3>
            </div>
            <div className='nav-mid'>
                <ul>
                    <li>Home</li>
                    <li>Recipe</li>
                    <li>Add Recipe</li>
                    <li>Blogs</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className='nav-right'>
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </nav>
    </header>
    </>
  )
}
