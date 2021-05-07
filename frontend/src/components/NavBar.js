import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NavBar.css';
const NavBar = () => {
  return (
    <nav className='navBar'>
      <div className='navBarBrand'>
        <Link className='navLinks' to='/'>
          Welcome To My World
        </Link>
      </div>
      <div className='navBarLinks'>
        <motion.div
          className='navLinkContainer'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link className='navLinks' to='/'>
            Home
          </Link>
        </motion.div>
        <motion.div
          className='navLinkContainer'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link className='navLinks' to='/about'>
            About
          </Link>
        </motion.div>
        <motion.div
          className='navLinkContainer'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link className='navLinks' to='/projects'>
            Projects
          </Link>
        </motion.div>
        <motion.div
          className='navLinkContainer'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link className='navLinks' to='/contacts'>
            Contacts
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};

export default NavBar;
