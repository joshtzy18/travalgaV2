import React from 'react'
import { useState } from 'react';
import logo from '../assets/images/logo.png';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen); //!false = true

};

const handleScroll = (event, id) => {
  event.preventDefault();
  setActiveNav(id);
  const section = document.getElementById(id);
  setIsMenuOpen(false);
   // section.scrollIntoView({ behavior: 'smooth' }); // Align to start
    //   setIsMenuOpen(false);
    if (section) {
      // Calculate the offset from the top of the section
      const headerOffset = 200; // Adjust this value based on your fixed header height
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      // Scroll to the position
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
  
    }
    
};
  return (
  
    <nav className='p-4 top-0 sticky z-10 bg-white'>
      <div className="flex items-center justify-between">
        <div className="">
        <img src={logo} alt="logo" />
        </div>
        
        <button className='flex md:hidden' onClick={toggleMenu}>
          <MenuIcon />

        </button>

        {/* desktop menu */}
      <ul className='hidden md:flex space-x-4'>
       <li className=' font-mulish font-normal text-[18px]'><a href="#about-us">About us</a></li>
       <li className='font-extrabold'><a href="#testimonials">Testimonials</a></li>
       <li className=''><a href="#">Apps</a></li>
       <li><a href="#find-doctor">Find a doctor</a></li>
       <li><a href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</a></li>

      </ul>

      </div>

       {/* mobile menu */}
       {/* if isMenuOpen = true display it, if not hide it */}
       {isMenuOpen ? (
  <ul className='md:hidden flex items-center justify-center flex-col-reverse pt-4 transform translate-y-0 transition-transform duration-500 ease-in-out'>
    <li className={`py-1 justify-center items-center font-muli font-normal text-sm hover:text-hover  ${activeNav === 'articles' ? 'text-blue-500' : ' opacity-50'}`}>
      <a href="#articles" onClick={(e) => handleScroll(e, 'articles')}>About us</a>
    </li>
    <li className={`py-1 justify-center items-center font-muli font-normal text-sm hover:text-hover  ${activeNav === 'testimonials' ? 'text-blue-500' : 'opacity-50'}`}>
      <a href="#testimonials" onClick={(e) => handleScroll(e, 'testimonials')}>Testimonials</a>
    </li>
    <li className={`py-1 justify-center items-center font-muli font-normal text-sm hover:text-hover  ${activeNav === 'download-apps' ? 'text-blue-500 ' : 'opacity-50'}`}>
      <a href="#download-apps" onClick={(e) => handleScroll(e, 'download-apps')}>Apps</a>
    </li>
    <li className={`py-1 justify-center items-center font-muli font-normal text-sm hover:text-hover  ${activeNav === 'find-doctor' ? ' text-blue-500' : 'opacity-50'}`}>
      <a href="#find-doctor" onClick={(e) => handleScroll(e, 'find-doctor')}>Find a doctor</a>
    </li>
    <li className={`py-1 justify-center items-center font-muli text-sm hover:text-hover  ${activeNav === 'home' ? 'text-blue-500' : 'opacity-50'}`}>
      <a href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</a>
    </li>
  </ul>
) : (
  <ul className='md:hidden flex items-center justify-center flex-col-reverse pt-4 transform -translate-y-full transition-transform duration-500 ease-in-out'>
    {/* Same menu items here */}
  </ul>
)}
    </nav>
  )
}

export default Navbar