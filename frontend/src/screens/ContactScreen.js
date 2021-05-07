import axios from 'axios';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Loader from '../components/Loader';
import './styles/ContactScreen.css';
const ContactScreen = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [dispMessage, setDispMessage] = useState('');
  const history = useHistory();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setDispMessage('Thank you for Submitting the form');
    setLoading(true);
    axios
      .post('http://localhost:5000/api/messages', { email, name, message })
      .then((response) => {})
      .catch((error) => {
        setError(error.message);
      });
    setTimeout(() => {
      setLoading(false);
      error ? history.push('/contacts') : history.push('/');
    }, 1000);
  };

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      {loading ? (
        <Loader message={dispMessage} />
      ) : (
        <div className='contactForm'>
          <motion.div
            className='contactFormCard'
            whileHover={{ scale: 1.1, transition: { duration: 1 } }}
          >
            <form className='contact-form' onSubmit={onSubmitHandler}>
              <div className='inputContainer' style={{ fontSize: '1.1em' }}>
                Contact Me <i className='fas fa-comment-dots'></i>
                <hr />
              </div>
              <div className='inputContainer'>
                <legend>
                  Name <i className='fas fa-signature'></i> &nbsp;:
                </legend>
                <input type='text' onChange={(e) => setName(e.target.value)} />
              </div>
              <div className='inputContainer'>
                <legend>
                  Email <i className='far fa-envelope'></i> &nbsp;:
                </legend>
                <input
                  type='email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='inputContainer'>
                <legend>
                  Message <i className='fas fa-th-large'></i>&nbsp;
                </legend>
                <textarea
                  type='text'
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <button className='submitButton' type='submit'>
                SUBMIT
              </button>
            </form>
            <div className='myDetails'>
              <div className='myDetailsItem'>
                Email &nbsp;
                <i style={{ fontSize: '2.5vh' }} className='fas fa-at'></i>
                :&nbsp;
                <a href='mailto:kmadhav907@gmail.com'>kmadhav907@gmail.com</a>
              </div>

              <div className='myDetailsItem'>
                Contact &nbsp;
                <i
                  style={{ fontSize: '2.5vh' }}
                  className='far fa-address-book'
                ></i>
                :&nbsp; +91-8197795213
              </div>
              <div className='myDetailsItem'>
                Github &nbsp;
                <i
                  style={{ fontSize: '2.5vh' }}
                  className='fab fa-github-square'
                ></i>
                :&nbsp;
                <a href='https://github.com/kmadhav907'>kmadhav907</a>
              </div>
              <div className='myDetailsItem'>
                Twitter &nbsp;
                <i style={{ fontSize: '2.5vh' }} className='fab fa-twitter'></i>
                :&nbsp;
                <a href='https://twitter.com/MadhavBhat19'>MadhavBhat19</a>
              </div>
              <div className='myDetailsItem'>
                LinkedIn &nbsp;
                <i
                  style={{ fontSize: '2.5vh' }}
                  className='fab fa-linkedin-in'
                ></i>
                :&nbsp;
                <a href='https://www.linkedin.com/in/madhav-bhat-k-0042ab1a1/'>
                  Madhav Bhat K
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ContactScreen;
