import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'

export default class RandomCard extends Component {

   
    render() {
       
        return (           
            <div>                       
                <Image style={imageStyle} src={this.props.usersList[this.props.userIndex].image} fluid/>
                <p>{this.props.usersList[this.props.userIndex].name}</p>
                <p>{this.props.usersList[this.props.userIndex].age}</p>
                <p>{this.props.usersList[this.props.userIndex].location}</p>
            </div>
        )
    }
}

const imageStyle = {
    maxWidth:'50%',

}

//The array after getting the values from tamir's page
