import React from 'react';
import logo from '../../assets/landing_page/Group 33072.png';
const Navbar = () => {
  return (
    <div className=' flex justify-between items-center mx-4 sm:mx-[135px] py-10 text-[#3C3C3C] font-medium'>
      <img className='w-50 h-8 sm:w-60 sm:h-10' src={logo} alt="Penguin Com" />
      <ul className=' hidden sm:flex '>
        <li className=' ml-14'><a href="home">Home</a></li>
        <li className=' ml-14'><a href="product">Product</a></li>
        <li className=' ml-14'><a href="about us">About Us</a></li>
        <li className=' ml-14'><a href="contact us">Contact Us</a></li>
      </ul>
      
    </div>
  );
};

export default Navbar;