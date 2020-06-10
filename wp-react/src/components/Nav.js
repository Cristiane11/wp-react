import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './Home';
import About from './About';

import Route2 from './Route2';

const Nav = ()=>
    (<Router>
        <Link to ='/'>Home</Link>
        <Link to = '/About'>About</Link>
        <Link to = '/Projects'>Projects</Link>
    </Router>)

export default Nav;