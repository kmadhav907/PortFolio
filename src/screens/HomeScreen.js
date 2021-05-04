import React from 'react';
import Typewriter from 'typewriter-effect';
import './styles/HomeScreen.css';
import { myProfile } from './constant/constant';

const HomeScreen = () => {
  return (
    <div className='homeScreenCard'>
      <div className='welcomeText'>
        <Typewriter
          options={{
            loop: true,
            strings: myProfile,
            autoStart: true
          }}
        />
      </div>
    </div>
  );
};

export default HomeScreen;
