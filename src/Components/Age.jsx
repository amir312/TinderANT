import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});



export default function RangeSlider()  {
  const classes = useStyles();
  const [Min_Age, setMinAge] = React.useState(18);
  const [Max_Age, setMaxAge] = React.useState(99);

  const MinAgeChange = (event, newValue) => {
    if (newValue > Max_Age || newValue < 18) {
      newValue = 18;
    }
    setMinAge(newValue);
  };

  const MaxAgeChange = (event, newValue) => {
    if (newValue < Min_Age) {
      newValue = 99;
    }   
    setMaxAge(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom >
        <h1>Show Ages</h1>
      </Typography>
      <Slider
        value={Min_Age} 
        onChange={MinAgeChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
      />

<Slider
        value={Max_Age} 
        onChange={MaxAgeChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
      />
<p> Min Age: {Min_Age} </p>
<p> Max Age: {Max_Age} </p>
    </div>
  );
}
