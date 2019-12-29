import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'

export default class RandomCard extends Component {


   

    render() {

        return (
                <div>
                    <h1 style={h1font}>My Likes</h1>
                    {this.props.show_liked}
                </div>
        )
                             
    }
}

const imageStyle = {
    maxWidth:'50%',

}

const h1font ={
    color: 'blue'
}
