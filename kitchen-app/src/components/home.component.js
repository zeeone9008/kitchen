import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import _ from 'lodash';
import Cards from './Cards'
import Slider from './Slider' 
import axios from 'axios';

export default class HomeComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            designs: []
        }
        axios.get(`http://localhost:3001/home`)
        .then(res => { 
            this.setState({ designs : res.data });
        })
    }
    addItemForCheckout(item){
        let items = this.state.designs;
        let checkoutItem = _.find(items, function(o) { return o.id === item.id });
        checkoutItem.addedToCart = true;

        axios.post('http://localhost:3001/cart',  item )
          .then((response) => {
            this.setState({designs: items} )
          })
          .catch( (error) => {
            console.log(error);
          });
    }
    render() {
        return (
            <div>
                <Slider />
                <h3><u>Trending Appliances</u></h3>
                <Cards addToCart={ this.addItemForCheckout.bind(this)} designs={this.state.designs}/> 
            </div>
        )
    }
}
