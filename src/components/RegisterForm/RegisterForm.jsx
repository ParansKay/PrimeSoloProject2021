import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//MATERIAL UI IMPORTS
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@material-ui/core/TextField';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/styles';
import styled from "styled-components";

// to customize inputs, we need to target the style elements within the Material UI library
// we create a "custom" component and style it by targeting certain classes
// this way, StyledTextField is our new TextField
// HINT: If I ever forget how to make this work, going to the Material UI website helped me understand Custom CSS with MUI
const StyledTextField = styled(TextField)({
    '& label.Mui-focused': { //this changes the input label color AFTER it has been selected
      color: 'white',
    },
    // '& .MuiOutlinedInput-notchedOutline': {
    //   // border-color: #e65100;
    //   color: 'white'; 
    // },
    '& .MuiInput-underline:after': { //this changes the border color AFTER we've input text
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': { //this sets the default color value of the border (before it is clicked or affected by any input changes)
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  })
;

function RegisterForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);

  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}

      <div className="reginfodiv"> 
      {/* FIRST NAME INPUT */}
        <Grid
              container
              // alignItems="center" // doesn't work
              justify="center"
              className="centerregistrationinfo"
              >
        <Grid>
          <br/>
          <br/>
      <Box>
       <div>
          <StyledTextField
  
              id="outlined-multiline-static"
              label="First Name"
              variant="outlined"
              // color="warning"
              type="text"
              name="firstname"
              style ={{width: '150%', justifyItems: 'center', marginLeft: '-25%'}}
              defaultValue={firstName}
              required
              onChange={(event) => setFirstName(event.target.value)}
              />
      </div>
      <br/>

      {/* LAST NAME INPUT */}
       <div>
          <TextField
              id="outlined-multiline-static"
              label="Last Name"
              variant="outlined"
              type="text"
              name="lastname"
              style ={{width: '150%', justifyItems: 'center', marginLeft: '-25%'}}
              defaultValue={lastName}
              required
              onChange={(event) => setLastName(event.target.value)}
              />
      </div>
      <br/>
      
      {/* USERNAME INPUT */}
       <div>
          <TextField
              id="outlined-multiline-static"
              label="Username"
              variant="outlined"
              type="text"
              name="username"
              style ={{width: '150%', justifyItems: 'center', marginLeft: '-25%'}}
              value={username}
              required
              onChange={(event) => setUsername(event.target.value)}
              />
      </div>
      <br/>
     
     {/* PASSWRD INPUT */}
        <div>
           <TextField
              id="outlined-multiline-static"
              label="Password"
              variant="outlined"
              type="password"
              style ={{width: '150%', justifyItems: 'center', marginLeft: '-25%'}}
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)}
              />
         </div>

        <div>
          <br/>
          <br/>
        {/* <input className="btn" type="submit" name="submit" value="Register" /> */}
        <Button color="warning" type="submit" variant="contained" name="submit" value="Register">Register</Button>
       </div>
      </Box>
         </Grid>
      </Grid>
      </div>
    </form>
  );
}

export default RegisterForm;