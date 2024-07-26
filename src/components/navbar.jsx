import React from 'react'
import { useState } from 'react';
import logo from '../assets/images/logo.png';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen); //!false = true
};
  return (
    <nav className='p-4'>
      <div className="flex items-center justify-between">
        <div className="">
        <img src={logo} alt="logo" />
        </div>
        
        <button className='flex md:hidden' onClick={toggleMenu}>
          <MenuIcon />

        </button>

        {/* desktop menu */}
      <ul className='hidden md:flex space-x-4'>
       <li className=' font-mulish font-normal text-[18px]'><a href="#">About us</a></li>
       <li className='font-extrabold'><a href="#">Testimonials</a></li>
       <li className=''><a href="#">Apps</a></li>
       <li><a href="#">Find a doctor</a></li>
       <li><a href="#">Home</a></li>

      </ul>

      </div>

       {/* mobile menu */}
       {/* if isMenuOpen = true display it, if not hide it */}
       {isMenuOpen ? (
        <ul className='md:hidden flex items-center justify-center flex-col-reverse pt-4 '>
        <li className='py-1 justify-center items-center font-muli font-normal text-sm  text-color opacity-50'><a href="#">About us</a></li>
        <li className='py-1 justify-center items-center font-muli font-normal text-sm  text-color opacity-50'><a href="#">Testimonials</a></li>
        <li className='py-1 justify-center items-center font-muli font-normal text-sm  text-color opacity-50 '><a href="#">Apps</a></li>
        <li className='py-1 justify-center items-center font-muli font-normal text-sm text-color opacity-50' ><a href="#">Find a doctor</a></li>
        <li className='py-1 justify-center items-center font-muli text-sm active:text-color font-bold' ><a href="#">Home</a></li>
       </ul>
       ) : null}
    </nav>
  )
}

export default Navbar