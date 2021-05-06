import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ContactScreen from './screens/ContactScreen';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />

        <Route path='/' component={HomeScreen} exact />
        <Route path='/about' component={AboutScreen} />
        <Route path='/contacts' component={ContactScreen} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
