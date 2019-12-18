import React, { Component } from 'react';
import './Gender_style.css';

class Gender extends Component {

    constructor (props) {
        super (props);
        this.state = {
            gender : null
        };
    }


    render() {
        return (
            <div class = "gender">
       <select >
         <option>Select gender</option>
         <option value="male">Male</option>
         <option value="female">Female</option>
       </select>
            </div>
        );
    }
}

export default Gender;