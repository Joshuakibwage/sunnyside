import React from 'react'
import logo from '../assets/images/logo.svg';


const navItems = [
  {
    label: 'About',
    path: '/about'
  },
  {
    label: 'Services',
    path: '/services'
  },
  {
    label: 'Projects',
    path: '/projects'
  },
  {
    label: 'Contact',
    path: '/contact'
  },
]

const Navbar = () => {
  return (
    <nav className="w-full bg-moderate-cyan">
       <div className="w-[90%] mx-auto">
        <div>
          <img 
            src={logo} 
            alt="logo" 
          />
        </div>
        <div></div>
       </div>
    </nav>
  )
}

export default Navbar
