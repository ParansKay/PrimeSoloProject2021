import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
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

const StyledTextField = styled(TextField)({
  '& label.Mui-focused': { //this changes the input label color AFTER it has been selected
    color: '#eae2b7',
  },
  '& .MuiInput-underline:after': { //this changes the border color AFTER we've input text
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': { //this sets the default color value of the border (before it is clicked or affected by any input changes)
    '& fieldset': {
      borderColor: '#f77f00',
    },
    '&:hover fieldset': { //this changes the color of the border after the user has implemented changes
      borderColor: '#f77f00',
      color: 'white',
    },
    '&.Mui-focused fieldset': { //this sets the border color once the user has clicked on it or typing in it (in focus)
      borderColor: '#f77f00',
    },
  },
 ' & .MuiInputBase-root': { //this changes the color of the input text
    color: '#eae2b7',
  },
  '& .MuiFormLabel-root': { //this changes the color of the input label at it's default state
    color: '#eae2b7',
  },
})
;

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <form className="formPanel" onSubmit={login}>
      <div className="loginFormHeader">
        <h2>LOGIN</h2>
      </div>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}

      <div className="loginfodiv"> 
        <Grid
                container
                // alignItems="center" // doesn't work
                justify="center"
                className="centerlogininfo"
                style={{ 'margin-top': '40px'}}
                >
          <Grid>
          <Box>
            <div>
              {/* USERNAME INPUT */}
              <StyledTextField
                id="outlined-multiline-static"
                label="Username"
                variant="outlined"
                autocomplete= "off"
                // variant="filled"
                // color="warning"
                style ={{width: '150%', justifyItems: 'center', marginLeft: '-25%'}}
                type="text"
                name="username"
                required
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                />
            </div>  

            <br/>
            <div>
            {/* PASSWORD INPUT */}
              <StyledTextField
                id="outlined-multiline-static"
                label="password"
                variant="outlined"
                autocomplete= "off"
                // variant="filled"
                // color="warning"
                style ={{width: '150%', justifyItems: 'center', marginLeft: '-25%'}}
                type="password"
                name="password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                />
            </div>

            <br/>
            {/* LOGIN BUTTON */}
            <div>
            <center>
              <br/>
              <br/>
              {/* <input className="btn" type="submit" name="submit" value="Register" /> */}
              <Button color="warning" type="submit" variant="contained" size="large" name="submit" value="Log In" style={{padding: '15px 30px', 'border-radius': '50px', 'font-size':'1.2rem', 'background-color':'#d62828'}}>LOG IN</Button>
            </center>
            </div>
          </Box>
        </Grid>
      </Grid>
      </div>
    </form>
  );
}

export default LoginForm;
