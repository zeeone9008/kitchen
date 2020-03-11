import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import { FaOtter } from 'react-icons/fa';


export default class Cards extends Component {

    constructor(props){
        super(props); 
 
    }
    buyProduct(item){

    }
    render() {
        return (
            <div> 
            <div class="row"> 
                {this.props.designs ? 
                    
                    this.props.designs.map(item => {
                    return  <div class="col s4">
                        <div class="card medium">
                            <div class="card" >
                                <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator" src={item.image_url} />
                                </div>
                                <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4"><div class="caption center-align">{item.name}</div><i class="material-icons right">+</i></span>
                                <p><a href="#" onClick='buyProduct(item)'>BUY NOW</a></p>
                                </div>
                                <div class="card-reveal">
                                <span class="card-title grey-text text-darken-4">{item.name}<i class="material-icons right">X</i></span>
                                <p>{item.description}</p>
                                </div>
                            </div> 
                        </div>
                    
                        
                    </div>
                    })  
                     : null
                }
                </div> 
                            
            </div>
        )
    }
}
