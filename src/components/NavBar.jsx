import React, { useState } from 'react'
import SZP from '../assets/SZP.png'
import { navLinks } from '../constants/constants'
const NavBar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);
    return (
        <nav className='w-full flex justify-between items-center navbar text-[20px]'>
            <img src={SZP} alt="SZP" className='w-50 h-20'/>
            <ul className = 'list-none sm:flex hidden justify-end items-center flex-1'>
                {navLinks.map((nav, index) =>
                    <li
                        key={nav.id}
                        className = 'mr-5'
                    >
                        <a href={`#${nav.id}`}>{nav.name}</a>
                    </li>
                )}
            </ul>
        </nav>

  )
}

export default NavBar