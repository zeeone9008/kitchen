import React from 'react';
import './App.css';

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomeComponent from './components/home.component'
import HobComponent from './components/hobs.component'
import AppliancesComponent from './components/appliances.component'
import SinksComponent from './components/appliances.component'
import {  BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar/> 
       <Switch>
           <Route path="/" exact component={HomeComponent} />
            <Route path="/home" exact component={HomeComponent} /> 
            <Route path="/hobs" component={HobComponent} />   
            <Route path="/appliances" component={AppliancesComponent} />  
            <Route path="/sinks" component={SinksComponent} />   
        </Switch> 
       <Footer/>
       </BrowserRouter>

    </div>
  );
}

 export default App;
