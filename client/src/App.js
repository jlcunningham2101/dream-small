import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import NoMatch from '../src/pages/NoMatch';
import Profile from "../src/pages/Profile";
import Signup from "../src/pages/Signup";
import SinglePost from "../src/pages/SinglePost";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
