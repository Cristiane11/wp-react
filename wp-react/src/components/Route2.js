import React from 'react';
import { Router } from "@reach/router";
import About from './About';
import Project from './Projects';
import Home from './Home';
import Nav from './Nav';

function Route2() {
  return (
    
      <router>
      <Home path ='/'/>
      <About path ='./About'/>
      <Nav path ='./Nav'/>
      <Project path ='./Project'/>
      </router>
   
  );
}

export default Route2;
