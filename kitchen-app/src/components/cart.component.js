import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import Cards from './Cards'
import M from 'materialize-css'
import axios from 'axios';

export default class CartComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            cartItems: [],
            totalPrice: 0
        }
        axios.get(`http://localhost:3001/cart`)
        .then(res => {
            let totalPrice = 0; 
            res.data.map(e => {
              totalPrice += e.price;
            });
            this.setState({ cartItems : res.data, totalPrice: totalPrice  });
        })
    }

    render() {
        return (
            <div>
             <div class="row">

             <div class="col s9 ">
             <table class="striped">
        <thead>
          <tr>
              <th>Name</th>
              {/* <th>Item Name</th> */}
              <th>Item Price</th>
          </tr>
        </thead>

        <tbody>
          {this.state.cartItems.map(item => {
            return <tr>
                    <td>{item.name}</td>
                    {/* <td>{item.description}</td> */}
                    <td>{item.price} €</td>
                  </tr>
          })}
          
        </tbody>
      </table>
      <div class="col"> 
                                 <p>Total:</p>
                                </div>
                                <div class="col ">                               
        <div class="card-content black-text">
        <p>{this.state.totalPrice} $</p>
        
        <a class="btn" onClick={e => M.toast({html: 'item ordered successfully', completeCallback: 
                   function(){alert('Successfully ordered the item please wait for it to deliver to your address')}})}>CONFIRM</a>
        </div>
                                 </div>
                                </div>
                            <div class="col s3 m2">
                                <div class="card">
                                    <div class="card-image">
                                    <img class="activator" src="images/7.jpg"/>
                                    {/* <span class="card-title">Card Title</span> */}
                                    </div>
                                    <div class="card-content">
                                    <p>price :€19</p>
                                    </div>    
                                </div>
                                
                                
                                </div>
                            
                            </div> 
                            </div>
        )
    }
}