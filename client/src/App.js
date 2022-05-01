import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import NoMatch from '../src/pages/NoMatch';
import Profile from "../src/pages/Profile";
import Signup from "../src/pages/Signup";
import SinglePost from "../src/pages/SinglePost";


function App() {
  return (
    <Home />
  )
}

export default App;

