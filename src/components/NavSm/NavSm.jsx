import React from 'react';
import home from '../../assets/landing_page/house-solid.svg';
import about from '../../assets/landing_page/address-card-solid.svg';
import product from '../../assets/landing_page/product-hunt.svg';
import contact from '../../assets/landing_page/address-book-solid.svg';
const NavSm = () => {
  return (
    <div className= 'flex justify-around sm:hidden  bg-[#f0dcd4] rounded-t-2xl w-full fixed z-50 bottom-0 p-3 '>
      <img className=' w-10' src={home} alt="home" />
      <img className=' w-10' src={product} alt="product" />
      <img className=' w-10' src={about} alt="about" />
      <img className=' w-10' src={contact} alt="contact" />
    </div>
  );
};

export default NavSm;