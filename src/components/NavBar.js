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
        <div className='navLinkContainer'>
          <Link className='navLinks' to='/'>
            Home
          </Link>
        </div>
        <div className='navLinkContainer'>
          <Link className='navLinks' to='/about'>
            About
          </Link>
        </div>
        <div className='navLinkContainer'>
          <Link className='navLinks' to='/projects'>
            Projects
          </Link>
        </div>
        <div className='navLinkContainer'>
          <Link className='navLinks' to='/contacts'>
            Contacts
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
