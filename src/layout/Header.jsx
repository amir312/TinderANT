import React from 'react';

function header(){
    
    return(
        
        <header style={headerStyle}>
            <h1>Tinder - Amir Nadav Tamir</h1>
        </header>
         )
        
   }

const headerStyle ={
    background:'#996666',
    color: '#fff',
    textAlign:'center',
    padding: '10px',
}

export default header;