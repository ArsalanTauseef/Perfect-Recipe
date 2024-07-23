import React from 'react'
import { useState, useEffect } from 'react';
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
    };
    }, []);

  return (
    <>
    <header id='mandatory-class' className={scrolled ? 'header-css' : ''}>
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
