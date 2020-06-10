import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Button from '@material-ui/core/Button'
import Nav from './Nav';
const Home = ()=>
    (<div>
        <Nav/>
        <p>This is home</p>
        <Button variant="contained">
            Click Me
        </Button>
    </div>)

export default Home;