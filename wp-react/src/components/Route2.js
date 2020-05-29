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
      <About path ='/about'/>
      <Nav path ='/nav'/>
      <Project path ='/project'/>
      </router>
   
  );
}

export default Route2;
