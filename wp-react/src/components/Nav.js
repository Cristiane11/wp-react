import React from 'react'
import {Link} from '@reach/router';
import Home from './Home';
import About from './About';
import Projects from './Projects';

const Nav = ()=>
    (<div>
        <Link to ='/'>Home</Link>
        <Link to = '/About'>About</Link>
        <Link to = '/Projects'>Projects</Link>
        
    </div>)

export default Nav;