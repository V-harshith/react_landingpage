import {useState} from 'react'

import {close, logo, menu} from '../assets';
import {navLinks} from '../constants';

const NavBar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt=""
      className="w-[80px] h-[20px]" />
        </nav>
  
    )
}

export default NavBar

