import React from 'react';
import Logo from './tinderLogo.jpg'
import ANTlogo from './TinderANTLogo.JPG'


function header(){
    
    return(
        
        <header style={headerStyle}>
            <p><img style={imageStyle} src={Logo}/></p>
            <img style={imageStyle2}  src={ANTlogo}/>

        </header>
         )
        
   }

const headerStyle ={
    background:'#fff',
    color: '#000',
    textAlign:'center',
    padding: '10px',
}

const imageStyle ={
    height: '15vmin',
    width: '20vmin'

}

const imageStyle2 ={
    height: '30vmin',
    width: '80vmin'

}

export default header;