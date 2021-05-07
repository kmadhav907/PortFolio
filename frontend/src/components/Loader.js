import React from 'react';
import './styles/Loader.css';

const Loader = ({ message }) => {
  console.log(message);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
      }}
    >
      <div className='loader'>Loading</div>
      <div className='loaderText'>{message}</div>
    </div>
  );
};

export default Loader;
