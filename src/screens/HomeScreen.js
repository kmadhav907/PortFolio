import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import './styles/HomeScreen.css';
import { myProfile } from './constant/constant';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Loader from '../components/Loader';

const imageVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,

    scale: 1,
    transition: {
      type: 'spring',
      duration: 2.5,
      damping: 20
    }
  }
};
const profileVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 3
    }
  }
};

const HomeScreen = () => {
  const [galleryItems, setGalleryItems] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    axios
      .get(`https://picsum.photos/v2/list?limit=6`, {})
      .then((res) => {
        const data = res.data;
        // const img = data.map((m) => <img src={m.download_url} alt='' />);
        const img = data.map((m) => m.download_url);
        setGalleryItems(img);
        console.log('Data is generated');
        console.log(img);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getData();
      setLoading(false);
    }, 2000);
  }, [loading, galleryItems]);

  return (
    <>
      {loading && !galleryItems ? (
        <Loader />
      ) : (
        <div className='homeScreen'>
          <div className='homeScreenCard'>
            <motion.div
              className='welcomeText'
              animate={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.8 }}
            >
              <Typewriter
                options={{
                  loop: true,
                  strings: myProfile,
                  autoStart: true
                }}
              />
            </motion.div>
          </div>
          <motion.div
            variants={imageVariants}
            initial='hidden'
            animate='visible'
          >
            <div className='imageCard'></div>
          </motion.div>
          <motion.div
            variants={profileVariants}
            initial='hidden'
            animate='visible'
            className='profileCaresol'
          >
            <AliceCarousel
              autoPlayInterval={2000}
              autoPlayDirection='rtl'
              autoPlay={true}
              fadeOutAnimation={true}
              mouseTrackingEnabled={true}
            >
              {galleryItems &&
                galleryItems.map((item) => {
                  return <img src={item} alt='' className='imageContainer' />;
                })}
            </AliceCarousel>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default HomeScreen;
