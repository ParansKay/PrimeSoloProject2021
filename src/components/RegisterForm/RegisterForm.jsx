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
       <div>
          <TextField
              id="outlined-multiline-static"
              label="First Name"
              center
              fullWidth
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
              label="password"
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
        <Button className="btn" type="submit" name="submit" value="Register">Register</Button>
       </div>
      
         </Grid>
      </Grid>
      </div>
    </form>
  );
}

export default RegisterForm;
