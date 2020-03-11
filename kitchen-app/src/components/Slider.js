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
            <div class="col s4">
            <div className="container">
             
               <div className="container">
                                        <div class="slider">
                                <ul class="slides">
                                <li>
                                <img class="activator" src="images/hob3.jpg"/> 
                                    <div class="caption center-align">
                                    <h3>This is our big Tagline!</h3>
                                    <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                                    </div>
                                </li>
                                <li>
                                <img class="activator" src="images/hob3.jpg"/>
                                    <div class="caption left-align">
                                    <h3>Left Aligned Caption</h3>
                                    <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                                    </div>
                                </li>
                                <li>
                                <img class="activator" src="images/hob3.jpg"/>
                                    <div class="caption right-align">
                                    <h3>Right Aligned Caption</h3>
                                    <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                                    </div>
                                </li>
                                <li>
                                <img class="activator" src="images/hob3.jpg"/> 
                                    <div class="caption center-align">
                                    <h3>This is our big Tagline!</h3>
                                    <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                                    </div>
                                </li>
                                </ul>
                            </div> 
               </div> 
             </div>
             </div>
        )
    }
}   
