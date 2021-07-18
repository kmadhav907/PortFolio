import React from 'react';
import './styles/AboutScreen.css';
import { motion } from 'framer-motion';
const aboutMeVariants = {
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
const softwareVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1
    }
  }
};
const AboutScreen = () => {
  return (
    <div className='cardContainer'>
      <motion.div
        className='aboutMeText'
        variants={aboutMeVariants}
        initial='hidden'
        animate='visible'
      >
        Hi I am Madhav Bhat 🧑‍✈️ <br />
        I enjoy being challenged and engaging with projects that require me to
        work outside my comfort and knowledge set🧆🌮
        <br />I love to read and document the code also love to optimize it 🥎🎾
      </motion.div>
      <br />
      <br />
      <motion.div
        className='titleText'
        variants={softwareVariants}
        initial='hidden'
        animate='visible'
        className='software-container'
      >
        My Interests and SkillSet
      </motion.div>
      <br />

      <motion.div
        variants={softwareVariants}
        initial='hidden'
        animate='visible'
        className='software-container'
      >
        <SoftwareCard
          icon={<i class='devicon-html5-plain-wordmark icon-style'></i>}
          software={'HTML-5'}
        />
        <SoftwareCard
          icon={<i class='devicon-css3-plain icon-style'></i>}
          software={'CSS-3'}
        />
        <SoftwareCard
          icon={<i class='devicon-javascript-plain icon-style'></i>}
          software={'JS'}
        />
        <SoftwareCard
          icon={<i class='devicon-nodejs-plain icon-style'></i>}
          software={'Node-JS'}
        />
        <SoftwareCard
          icon={<i class='devicon-react-original icon-style'></i>}
          software={'ReactJS'}
        />
      </motion.div>
      <motion.div
        variants={softwareVariants}
        initial='hidden'
        animate='visible'
        className='software-container'
      >
        <SoftwareCard
          icon={<i class='devicon-python-plain icon-style'></i>}
          software={'Phyton'}
        />
        <SoftwareCard
          icon={<i class='devicon-tensorflow-original icon-style'></i>}
          software={'TensorFlow'}
        />
        <SoftwareCard
          icon={<i class='devicon-flutter-plain icon-style'></i>}
          software={'Flutter'}
        />
      </motion.div>
      <div></div>
      <div></div>
    </div>
  );
};
const SoftwareCard = ({ icon, software }) => {
  return (
    <>
      <motion.div
        whileHover={{
          scale: 1.05
        }}
        className='icon-container'
      >
        {icon}
        <div>{software}</div>
      </motion.div>
    </>
  );
};

export default AboutScreen;
