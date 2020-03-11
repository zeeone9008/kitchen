import React, { Component } from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaYoutubeSquare} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'
import {FaWhatsapp} from 'react-icons/fa'
export default class Footer extends Component {
    render() {
        return (
            <div>
            
               <footer class="page-footer">
              <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                 
                </ul>
              </div>
            </div>
          </div>
          
          <div class="footer-copyright">
            <div class="container">
            <a class="black-text text-lighten-4 left">© 2014 Copyright Text</a>
            <a class="black-text text-lighten-4 right" href="#!"><FaFacebookSquare size='1.5rem'/></a>
            <a class="black-text text-lighten-4 right" href="#!"><FaInstagram size='1.5rem'/></a>
            <a class="black-text text-lighten-4 right" href="#!"><FaYoutubeSquare size='1.5rem'/></a>
            <a class="black-text text-lighten-4 right" href="#!"><IoLogoTwitter size='1.5rem'/></a>
            <a class="black-text text-lighten-4 right" href="#!"><FaWhatsapp size='1.5rem'/></a>
            
            </div>
          </div>
        </footer> 
            </div>
        )
    }
}
