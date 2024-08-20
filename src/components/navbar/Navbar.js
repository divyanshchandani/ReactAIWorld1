import React from 'react'
// import { RiMenu3Line , RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'
import { useState } from 'react'
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'

const Menu = () => {
  return(
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wgpt3'>What is GPT3?</a></p>
    <p><a href='#features'>Case Studies</a></p>
    <p><a href='#possibility'>Open AI</a></p>
    <p><a href='#blog'>Library</a></p>
  </>
  )
}

const Navbar = () => {

  const[toggleMenu , setToggleMenu] = useState(false);

  return (
    <div className='navbar__main'>
      
      <div className='navbar__container1'>
        <div className='navbar__container1-logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className='navbar__container1-items'>
          <Menu />
        </div>
      </div>

      <div className='navbar__container2'>
        <p> Sign In </p>
        <button type='button'> Sign Up </button>
      </div>

      <div className='navbar__menu'>
        {toggleMenu
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {
          toggleMenu &&(
            <div className='navbar__menu-container scale-up-center'>
              <div className='navbar__menu-container-links'>
                <Menu />
              </div>
              <div className='navbar__menu-container-button'>
              <p> Sign In </p>
              <button type='button'> Sign Up </button>
              </div>
            </div> 
          )}
      </div>
   
    </div>
  )
}

export default Navbar
