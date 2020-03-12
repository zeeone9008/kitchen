import React, { Component } from 'react'
import M from 'materialize-css'

export default class Calender extends Component {
    componentDidMount(){document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.datepicker');
        var instances = M.Datepicker.init(elems, {});
      });
    }
    render() {
        return (
            <div>
                <input placeholder="date of birth " type="text" class="datepicker"></input>
            </div>
        )
    }
}
