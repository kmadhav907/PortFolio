import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />

        <Route path='/' component={HomeScreen} exact />
        <Route path='/about' component={AboutScreen} />
      </Router>
    </div>
  );
}

export default App;
