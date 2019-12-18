import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Submit extends Component {
    render() {

        function filter (e)
        {  
            alert ("#");
        }
        return (
            <div className="submit_btn">               
      <Button onClick= {filter} variant="contained" color="primary">
           Submit 
         </Button>
            </div>
        );
    }
}

export default Submit;