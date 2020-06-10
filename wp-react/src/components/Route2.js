import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import Projects from './Projects';
import Home from './Home';
import Nav from './Nav';

function Route2() {
  return (
      <router>
        <div>
      <Home path='/'/>
      <About path='./About'/>
      <Projects path='./Projects'/>
      
      <Switch>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Projects">
            <Projects/>
          </Route>
        </Switch>

        </div>
      </router>
   
  );
}

export default Route2;
