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
      <div className='dropdown'>
        <button className='dropbtn'>
          <i className='fas fa-map-marked icon'></i>
        </button>
        <div className='dropdown-content'>
          <Link to='/'>
            <i className='fas fa-igloo icon-contained'></i>&nbsp;&nbsp;Home
          </Link>
          <Link to='/about'>
            <i className='fas fa-cheese icon-contained'></i>&nbsp;&nbsp;About Me
          </Link>
          <Link to='/contacts'>
            <i className='fas fa-file-contract icon-contained'></i>
            &nbsp;&nbsp;Contact Me
          </Link>
          <Link to='/contacts'>
            <i class='fas fa-terminal icon-contained'></i>
            &nbsp;&nbsp;Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
