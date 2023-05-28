import React, { useState } from 'react'
import SZP from '../assets/SZP.png'
import gif from '../assets/giphy.gif'
import { navLinks } from '../constants/constants'
const NavBar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);
    return (
        <nav className='bg-gray-800 py-2 fixed top-0 w-full z-10 w-full px-16 flex justify-between items-center navbar fixed text-[20px]'>
            <img src={gif} alt="SZP" className='w-50 h-16'/>
            {/* ul nav bar from constants.js to link */}
            <ul className="flex space-x-4">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a href={`#${link.id}`} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-[18px] font-medium">{link.name}</a>
                  </li>
                ))}
            </ul>
        </nav>
  )
}

export default NavBar