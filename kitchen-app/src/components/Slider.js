import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'


export default class Slider extends Component {

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.slider');
            var instances = M.Slider.init(elems, {});
          });
    }
    render() {
        return (
               <div className="container">
                     <div class="slider full-width">
                                <ul class="slides">
                                <li>
                                <img className="img-fluid activator" src="images/8.jpg"/> 
                                <div class="caption left-align">
                                    <h3>Oven</h3>
                                    <h5 class="light grey-text text-lighten-3"></h5>
                                    </div>
                                </li>
                                <li>
                                <img class="activator" src="images/7.jpg"/>
                                    <div class="caption left-align">
                                    <h3>Next Gen HOBS</h3>
                                    <h5 class="light grey-text text-lighten-3"></h5>
                                    </div>
                                </li>
                                <li>
                                <img class="activator" src="images/h4.jpg"/>
                                    <div class="caption right-align">
                                    <h3>Gas Hobs</h3>
                                    <h5 class="light grey-text text-lighten-3"></h5>
                                    </div>
                                </li>
                                <li>
                                <img class="activator" src="images/d1.jpg"/> 
                                    <div class="caption center-align">
                                    <h3>Next Gen Appliances Designs</h3>
                                    <h5 class="light grey-text text-lighten-3"></h5>
                                    </div>
                                </li>
                                </ul>
                            </div> 
               </div> 
            
            
           
        )
    }
}   
