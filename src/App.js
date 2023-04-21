import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import Services from './Components/Pages/Services';
import Product from './Components/Pages/Product';
import SignUp from './Components/Pages/SignUp';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path= '/' exact element = {<Home/>}/>
        <Route path= '/Services'  element = {<Services/>}/>
        <Route path= '/products'  element = {<Product/>}/>
        <Route path= '/sign-up'  element = {<SignUp/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
