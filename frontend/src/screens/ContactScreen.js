import axios from 'axios';
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
    setLoading(true);
    axios
      .post('http://localhost:5000/api/messages', { email, name, message })
      .then((response) => {
        setDispMessage('Thank you for Submitting the form');
      })
      .catch((error) => {
        setError(error.message);
      });
    setTimeout(() => {
      setLoading(false);
      history.push('/');
    }, 1000);
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
        <Loader message={dispMessage} />
      ) : (
        <div className='contactForm'>
          <div className='contactFormCard'>
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
          </div>
        </div>
      )}
    </>
  );
};

export default ContactScreen;
