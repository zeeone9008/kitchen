import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import Cards from './Cards' 
import axios from 'axios';
export default class AppliancesComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            designs: []
        }
        axios.get(`http://localhost:3001/appliances`)
        .then(res => { 
            this.setState({ designs : res.data });
        })
    }

    render() {
        return (
            <div>
                
                <Cards designs={this.state.designs}/> 
            </div>
        )
    }
}
