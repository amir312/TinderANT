import React, { Component } from 'react'

export default class LikedUsers extends Component {

    render() {
        return (

            <ul>
                <h1>My Likes</h1>
            {this.props.likes_Arr.map(item => {
            return <div> <img style={imageStyle} src={item.image} fluid></img> <br/> {item.name} , {item.age} , {item.location} <br/> <br/> </div>    ;
            })}
          </ul>           
        )                            
    }
}

const imageStyle = {
    maxWidth:'50%',

}

