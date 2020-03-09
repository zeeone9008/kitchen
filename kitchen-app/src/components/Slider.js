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
             <div className="row">
                 <div className="col s6">
                     col 1
                 </div>
                 <div className="col s6">
                     col 2
                 </div>
               </div>
               <div className="container">
                                        <div class="slider">
                                <ul class="slides">
                                <li>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQBKxaxRcSSqeHpF60oLFE01mTJsgtUEozK77uDJMkGGmWCafxC"/> 
                                    <div class="caption center-align">
                                    <h3>This is our big Tagline!</h3>
                                    <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4f0ahW0ocrTiIFTPXjMpC0Apq74OnMlaj5TULdhiOkeMShYxD"/>
                                    <div class="caption left-align">
                                    <h3>Left Aligned Caption</h3>
                                    <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLaOmA0W8ueB-qaC9yxqPUuE5StouTnuIiDa7-Sd3RPRI9MPp1"/>
                                    <div class="caption right-align">
                                    <h3>Right Aligned Caption</h3>
                                    <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                                    </div>
                                </li>
                                <li>
                                    <img src="https://p2.piqsels.com/preview/599/64/916/gas-stove-gas-orange-kitchen-thumbnail.jpg"/> 
                                    <div class="caption center-align">
                                    <h3>This is our big Tagline!</h3>
                                    <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                                    </div>
                                </li>
                                </ul>
                            </div> 
               </div> 
             </div>
        )
    }
}   
