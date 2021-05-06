import axios from 'axios';
import React, { useState } from 'react';
import Loader from '../components/Loader';
import './styles/ContactScreen.css';
const ContactScreen = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    axios({
      method: 'POST',
      url: '/send',
      data: {
        name,
        email,
        message
      }
    })
      .then((response) => {
        if (response.data.status === 'success') {
          resetForm();
        } else if (response.data.status === 'failure') {
          setError('There is some Error');
        }
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((e) => {
        setTimeout(() => {
          setError('There is some Error');
          setLoading(false);
        }, 1000);
      });
  };
  const resetForm = () => {
    setEmail('');
    setMessage('');
    setName('');
  };
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='contactForm'>
          <div className='contactFormCard'>
            <form className='contact-form' onSubmit={onSubmitHandler}>
              <div className='inputContainer' style={{ fontSize: '1.1em' }}>
                Contact Me <i class='fas fa-comment-dots'></i>
                <hr />
              </div>
              <div className='inputContainer'>
                <legend>
                  Name <i class='fas fa-signature'></i> &nbsp;:
                </legend>
                <input type='text' onChange={(e) => setName(e.target.value)} />
              </div>
              <div className='inputContainer'>
                <legend>
                  Email <i class='far fa-envelope'></i> &nbsp;:
                </legend>
                <input
                  type='email'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='inputContainer'>
                <legend>
                  Message <i class='fas fa-th-large'></i>&nbsp;
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
          </div>
        </div>
      )}
    </>
  );
};

export default ContactScreen;
