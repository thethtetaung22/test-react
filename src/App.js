import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';
import Records from './components/Records';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
    </Router>
  );
}

export default App;
