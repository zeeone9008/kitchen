import React, { Component } from 'react'
import {FaSearch} from 'react-icons/fa'
import SearchField from "react-search-field";

export default class Search extends Component {
   onchange(){}
    render() {
       
        return (
            <div>
            <div class="SearchField-fixed">
            <div class="caption right-align">

<SearchField
  placeholder="Search..."
  onChange={e=>this.onChange}
  searchText=" "
  classNames="test-class"
/>
</div>
</div>
            </div>
//             <div>
//             <div class="row">

// <div class="col s4"></div>
//                   <nav>
//                     <div class="nav-wrapper">
//                     <form>
//                         <div class="input-field">
//                         <input id="search" type="search" required/>
//                         { /*</input> <label class="FaSearch" for="search"><i class="material-icons">search</i></label>*/}
//                       { /*<a class="grey-text text-lighten-4 right" href="#!"><FaSearch size='1.5rem'/></a>*/}
//                         <i class="react-icons"><FaSearch size='1.5rem'/></i>
//                         </div>
//                     </form>
//                     </div>
//                 </nav>
//                 </div>
//                 </div>
            
        )
    }
}
