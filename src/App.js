import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      //Using exact tells react-router that you will only render this component if the URL matches exactly with the path definition.         
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/profile" component={Profile} />
    </Router>
  );
}

export default App;
