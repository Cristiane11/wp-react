import React from 'react';
import logo from './logo.svg';
import { Router } from "@reach/router";
import './App.css';
import About from './components/About';
import Project from './components/Projects';

function App() {
  return (
    <div className="App">
      <router>
      <Home path ='/'/>
      <About path ='/about'/>
      <Nav path ='/nav'/>
      <Project path ='/project'/>
      </router>
    </div>
  );
}

export default App;
