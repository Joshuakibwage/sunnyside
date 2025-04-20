import React, { useState } from 'react'
import logo from '../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';
import hamburger from '../assets/images/icon-hamburger.svg'


const navLinks = [
  {
    label: 'Home',
    path: '/'
  },
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

  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav)
  }


  return (
    <nav className="w-full fixed z-2">
      <div className="w-[90%] mx-auto flex items-center justify-between py-8">
        <div>
          <img 
            src={logo} 
            alt="logo" 
          />
        </div>
        <ul className="hidden md:flex gap-4">
           {
            navLinks.map((link, index) => (
              <li key={index} className="font-semibold text-white hover:text-black hover:bg-White py-1 px-3 rounded-full transition-all delay-200 ease-in-out">
                <NavLink to={link.path} 
                className={({isActive, isPending}) => (
                  isActive
                  ? "active"
                  : isPending
                  ? "pending"
                  : ""
                )}
                >
                  {link.label}
                </NavLink>
              </li>
            ))
           }
        </ul>
        {/* hamburger menu */}
        <button onClick={toggleNav} className="block md:hidden cursor-pointer">
          {
            nav ? (
              <img 
                src={hamburger} 
                alt="hamburger menu" 
                className=""
              />
            )  : (
              <img 
                src={hamburger} 
                alt="hamburger menu" 
                className=""
              />
            )
          }
        </button>
      </div>
      {
        nav && (
          <div className="flex justify-center items-center md:hidden bg-White w-[90%] mx-auto py-6 relative">
            <div className="element absolute right-0 -top-6"></div>
            <ul className="flex flex-col space-y-2">
              {
                navLinks.map((link, index) => (
                  <li key={index} 
                  onClick={toggleNav}
                  className="font-bold text-l text-grayish-blue hover:text-black hover:bg-White py-1 px-3 rounded-full transition-all delay-200 ease-in-out">
                    <NavLink to={link.path} 
                    className={({isActive, isPending}) => (
                      isActive
                      ? "active"
                      : isPending
                      ? "pending"
                      : ""
                    )}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
        )
      }
    </nav>
  )
}

export default Navbar
