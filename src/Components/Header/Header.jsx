import React from 'react'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

export const Header = () => {

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
    const scrollY = window.scrollY;
    // 6em in pixels (assuming 1em = 16px, 6em = 96px)
    if (scrollY > 96) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    };

    useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      
      window.removeEventListener('scroll', handleScroll);
      console.log("Unmounted.");
    };
    }, [scrollY]);

  return (
    <>
    <header id='mandatory-class' className={scrolled ? 'header-css' : ''}>
        <nav>
            <div className='nav-left'>
                <h3>Perfect<span style={{color:'#B65F54'}}>Recipe</span></h3>
            </div>
            <div className='nav-mid'>
                <ul>
                    <li><NavLink to='/' id='tagNav' >Home</NavLink></li>
                    <li><NavLink to='recipe' id='tagNav'>Recipe</NavLink></li>
                    <li><NavLink to='addrecipe' id='tagNav'>Add Recipe</NavLink></li>
                    <li><NavLink to='blogs' id='tagNav'>Blogs</NavLink></li>
                    <li><NavLink to='aboutus' id='tagNav'>About Us</NavLink></li>
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
