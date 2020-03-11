import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'

import Cards from './Cards'
import Slider from './Slider' 
import axios from 'axios';

export default class HomeComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            designs: []
        }
        axios.get(`http://localhost:3001/designs`)
        .then(res => { 
            this.setState({ designs : res.data });
        })
    }

    render() {
        return (
            <div>
                <Slider />
                <Cards designs={this.state.designs}/> 
            </div>
        )
    }
}
