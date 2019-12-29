import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Button from '@material-ui/core/Button';
import App from '../App';
import { Switch, Route, Link, withRouter } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

export default  function RangeSlider(props)  {
  const classes =useStyles();
  const [Min_Age , setMinAge] = React.useState(18);
  const [Max_Age, setMaxAge] = React.useState(99);

  const MinAgeChange = (event, newValue) => {
    if (newValue > Max_Age || newValue < 18) {
      newValue = 18;
    }
    setMinAge(newValue);
    props.handlerMinAge(Min_Age);
  };

  const MaxAgeChange = (event, newValue) => {
    if (newValue < Min_Age) {
      newValue = 99;
    }   
    setMaxAge(newValue);
    props.handlerMaxAge(Max_Age);
  };

function submitAges() {
  props.handlerMinAge(Min_Age);
  props.handlerMaxAge(Max_Age); 
  props.filter_tinder(props.filter_Gender);
  
}
 

  return (    
    <div className={classes.root} >
              
         <Typography id="range-slider" gutterBottom >
         {/* <h1>Show Ages</h1> */}
         </Typography>
         
         <Slider value={Min_Age} onChange={MinAgeChange}  valueLabelDisplay="on" aria-labelledby="range-slider" />
         <Slider value={Max_Age} onChange={MaxAgeChange}  valueLabelDisplay="on" aria-labelledby="range-slider"/>

         
{/* 
          <p> Min Age: {Min_Age} </p>
          <p> Max Age: {Max_Age} </p> */}

          <div style={agesStyle} className="submit_btn">               
           <Button onClick={submitAges} variant="contained" color="primary"> 
           <Link to="/filter">Submit</Link>
         </Button>
            </div>
    </div>
  );
 
}

const agesStyle ={
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
  
}


