import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import Cards from './Cards'

import axios from 'axios';
import {
    Link
  } from "react-router-dom";

export default class SigninComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            designs: []
        }
        axios.get(`http://localhost:3001/signin`)
        .then(res => { 
            this.setState({ designs : res.data });
        })
    }

    render() {
        return (
            <div>   
               {/* </div> <Cards designs={this.state.designs}/>  */}
               <div class="row">
                                    <form class="col s12">
                                    <div class="row">
                                        <div class="input-field col s4">
                                        <input id="email_inline" type="email" class="validate"/>
                                            <label for="email_inline">Email</label>
                                            <span class="helper-text" data-error="wrong" data-success="right"></span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="input-field col s4">
                                        <input id="password" type="password" class="validate"/>
                                        <label for="password">Password</label>
                                        </div>
                                    </div>
                                    <Link to="/"><a href="#!" class="btn waves-effect waves-red">signin</a></Link>
                                    </form>
                                </div>            
            </div>
    
        )
    }
}
