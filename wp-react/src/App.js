import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
// import { Router } from "@reach/router";
// import About from './components/About';
// import Project from './components/Projects';
// import './App.css';

import Home from './components/Home';


function App() {
  return (
    
      <div>
        <Home/>
      </div>
      
      
   
  );
}

export default App;
