import React, { Component } from 'react';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import Icon from '@material-ui/core/Icon';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Switch, Route, Link, withRouter } from 'react-router-dom';




export default class like extends Component  {

      transferFuncs=()=>{
        this.props.Add_To_Likes_Arr();
        this.props.nextUser();
      }

      
   render(){

        return(
            <Container>      
            <Button onClick={this.transferFuncs} variant="contained" color="primary" ><ThumbUpAltIcon/></Button>{' '}{' '}{' '}
            <Button onClick={()=>this.props.nextUser()} variant="contained" color="primary"><ThumbDownIcon /></Button>
            <p> <Button variant="contained" color="primary"><Link to="/mylikes">See My Likes</Link></Button></p>

            </Container>

            )
              
        }
        
       
          
        }
        


