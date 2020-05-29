import React from 'react'
import {Link} from '@reach/router';
import Home from './Home';
import About from './About';
import projects from './Projects';

const Nav = ()=>
    (<div>
        <Link to ='/'>Home</Link>
        <Link to = '/about'>About</Link>
        <Link to ='/projects'>Projects</Link>
        
    </div>)

export default Nav;