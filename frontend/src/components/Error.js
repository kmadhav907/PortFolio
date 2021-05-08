import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Error.css';
const Error = ({ message }) => {
  return (
    <div className='errorCardBackground'>
      <div className='errorCard'>
        {message}
        <div className='errorBTNList'>
          <Link className='errorBTN' to='/'>
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
