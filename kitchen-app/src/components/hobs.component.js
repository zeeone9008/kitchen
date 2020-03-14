import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import Cards from './Cards'
import axios from 'axios';
import _ from 'lodash';

export default class HobComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            designs: []
        }
        axios.get(`http://localhost:3001/hobs`)
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
               
                <h3><u>HOBS</u></h3>
                <Cards addToCart={ this.addItemForCheckout.bind(this)} designs={this.state.designs}/> 
            </div>
        )
    }
}
