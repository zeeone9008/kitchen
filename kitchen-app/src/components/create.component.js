import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import Cards from './Cards'
import date from './calender'
import axios from 'axios';
import M from 'materialize-css'
import Calender from './calender';

export default class CreateComponent extends Component {
    constructor(props){
      
        super(props)
        this.state = {
            designs: []
        }
        axios.get(`http://localhost:3001/create`)
        .then(res => { 
            this.setState({ designs : res.data });
        })
    }

    render() {
        return (
            <div>
                
                {/* <Cards designs={this.state.designs}/>  */}
                <div class="row">
                                    <form class="col s12">
                                    <div class="row">
                                        <div class="input-field col s4">
                                        <input id="first_name" type="text" class="validate"/>
                                        <label for="first_name">First Name</label>
                                        </div>
                                        <div class="input-field col s4">
                                        <input id="last_name" type="text" class="validate"/>
                                        <label for="last_name">Last Name</label>
                                        </div>
                                        <div class="input-field col s4">
                                        <Calender/>
                                        </div>
                                    </div>
                                    
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
                                    </form>
                               
                     <a class="btn" onClick={e => M.toast({html: 'Account Created', completeCallback: 
                   function(){alert('Successfully created account please signin using your Email and Password')}})}>Create Account</a>
 </div>
            </div>
        )
    }
}
