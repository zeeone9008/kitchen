import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import Search from './Search' 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div>
            <div class="navbar-fixed">
                <nav>
    <div class="nav-wrapper">
     {/* <a href="#" class="brand-logo right">Logo</a>*/}
     <Router></Router>
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li> <Link to="/">Home</Link></li>
        <li> <Link to="/designs">Designs</Link></li>
        <li> <Link to="/appliances">Appliances</Link></li>
        <li> <Link to="/sinks">Sinks</Link></li>
        
    </ul>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><div class="caption right-align"><Search/> </div> </li> 
        <li><a href="sass.html">Cart</a></li>
        <li><a href="badges.html">Signin</a></li>
        <li><a href="collapsible.html">Create Account</a></li> </ul>  
       

      
    </div>
  </nav>
 
  </div>
            </div>
        )
    }
}
