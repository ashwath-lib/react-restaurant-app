/* A simple iframe wrapper that makes 16:9 responsive embed */
import React,{useState} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {Row, Col} from "react-bootstrap"
import DatePicker from 'react-date-picker';

import TextField from '@material-ui/core/TextField';

export default ({ url, background="black", className="video" }) => {

  const [value, onChange] = useState(new Date());

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      paddingLeft: 29,
      width: 100
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
   
  }));


  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div
      className={className}
      style={{
        position: "relative",
        backgroundColor:'#ffffff',
        borderRadius:30,  
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 30,
        width: 400,
        height: 380
      }}
    >
     <div
     style={{
      width: 300,
      height: 200
     }}
     >
        <h3
        style={{
          fontFamily:'Poppins',
          fontSize:16,
          fontWeight:'bold',
          paddingLeft:29,
          paddingTop:30
        }}
        >
          Let's us serve you better
        </h3>
        <p
        
        style={{
          fontFamily:'Poppins',
          fontSize:12,
          paddingLeft:29,
          paddingTop:8
        }}
        >
        Don’t wait in a line to enjoy your meal.
Reserve a table in advance with us.
        </p>
        <div>
        <FormControl className={classes.formControl}>
        <InputLabel 
          style={{
            paddingLeft:29
          }}
        id="demo-simple-select-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          style={{
            paddingLeft:29,
            width:280
          }}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Coimbatore</MenuItem>
          <MenuItem value={20}>Chennai</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
     
      {/* 
      
      start
      */}


<Row>
    <Col>
    
    <p
      style={{
        paddingLeft: 29,
        fontSize: 12,
        paddingTop:10

      }}
      >
        DATE
      </p>

      <Grid item xs={6}>
      <div
        style={{
          paddingLeft: 29,
          paddingTop:10,
        
        }}
      >
      <Chip
      style={{
        height: 22,
        backgroundColor: '#FA4932',
        color:'#fff'
      }}
      
      label="Today" variant="outlined" />
      </div>
        </Grid>
        <Grid item xs={6}>
        <div
        style={{
          paddingLeft: 29,
          paddingTop:10,
        
        }}
      >
      <Chip
      style={{
        height: 22,
  
        color:'#000'
      }}
      
      label="Tomorrow" variant="outlined" />
      </div>
        </Grid>
        <p
        style={{
          paddingLeft: 29,
          fontSize: 12,
          paddingTop:10
  
        }}
        >
          SESSIONS
        </p>
          <div>
          <Grid item xs={6}>
      <div
        style={{
          paddingLeft: 29,
          paddingTop:10,
        
        }}
      >
      <Chip
      style={{
        height: 22,
        backgroundColor: '#FA4932',
        color:'#fff'
      }}
      
      label="Lunch" variant="outlined" />
      </div>
        </Grid>
        <Grid item xs={6}>
        <div
        style={{
          paddingLeft: 29,
          paddingTop:10,
        
        }}
      >
      <Chip
      style={{
        height: 22,
  
        color:'#000'
      }}
      
      label="Dinner" variant="outlined" />
      </div>
        </Grid>

          </div>

    
    </Col>
    <Col>
        
     <div
     style={{

      paddingTop:8
     }}
     >
       <p
       style={{
         fontSize: 12
       }}
       >
         PICK A DATE
       </p>
       <DatePicker
       calendarAriaLabel="Toggle calendar"
       clearAriaLabel="Clear value"
       dayAriaLabel="Day"
       monthAriaLabel="Month"
       nativeInputAriaLabel="Date"
       onChange={onChange}
       value={value}
       yearAriaLabel="Year"
      />
     </div>
    </Col>
  </Row>
      

        </div>
        <div>
        

        

        </div>
     </div>
    </div>
  );
};
