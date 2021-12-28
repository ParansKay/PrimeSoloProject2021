import LogOutButton from '../LogOutButton/LogOutButton';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
// import './MovieList.css'
import { Link, useHistory, useNavigate } from 'react-router-dom'; //must define link within each component, otherwise we get an undefined error
import axios from 'axios';
//MATERIAL UI IMPORTS
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';

function UserPage() {
  //connecting to the store to retrieve the following values 
  const user = useSelector((store) => store.user);
  const activity = useSelector((store) => store.activity);
  const tag = useSelector((store) => store.tag);

  const history = useHistory();
  
  //defning dispatch
  const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch({ type: 'FETCH_SEARCH'});
// }, []);

  const getSearchResults = ()=>{
    if (tagId === 0){
      console.log ('you did not select a tag!');
      dispatch( {
        type: 'FETCH_ACTIVITY'})
        history.push("/allactivity");
    }
    else{
    console.log ('getting search results!');
    dispatch( {
      type: 'FETCH_SEARCH',
      payload: tagId
      } )
      const timer = setTimeout(()=>{
      history.push("/results");
      }, 200);
  };
  }
  const[tagId, setTagId] = useState(0);


  return (
    <Card>
      {/* USER GREETING and Quote*/}
      <div className="helloUser">
        <CardContent>
            {/* USER GREETING */}
              <Typography variant="h5">Welcome, {user.first_name}!</Typography>
              <br></br>
                {/* QUOTE RANDOMIZER */}
                <div className="quoteRandomizer"> 
                <Typography align="center">"Example inspirational acting quote"</Typography>
                <Typography alignContent="right" align="right">--by jim bob</Typography>
                </div>
                {/* END OF QUOTE RANDOMIZER */}
          
            {/* END OF USER GREETING */}
          </CardContent> 
        </div>
        {/* INPUT */}
        <div>
          <CardContent>
            <Typography align="center" variant="h5">Let's figure out Whata-to-do!</Typography>
            <FormControl className="formClass" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="tag-select-label">What do you need help with today?</InputLabel>
                    <Select
                        labelId="tag-select-label"
                        // this ID needs to be the same as the ID of InputLabel ^^
                        id="tag-select"
                        // but this id needs to be different from the other two above ^^
                        // value={newMovie.genre}
                        label="tagSelect"
                        defaultValue={0}
                        onChange={(event) => setTagId(event.target.value)}
                    >
                        <MenuItem value="">
                            <em>pick from the list below!</em>
                            {/* this is an empty value. when a user clicks on this, the selector box will go back to displaying the label */}
                        </MenuItem>
                        <MenuItem value={1}>Breath Support</MenuItem>
                        <MenuItem value={2}>Character Development</MenuItem>
                        <MenuItem value={3}>Connection / Relationships</MenuItem>
                        <MenuItem value={4}>Energy</MenuItem>
                        <MenuItem value={5}>Enunciation</MenuItem>
                        <MenuItem value={6}>Escalation / Urgency</MenuItem>
                        <MenuItem value={7}>Focus</MenuItem>
                        <MenuItem value={8}>Improvisation</MenuItem>
                        <MenuItem value={9}>Listening</MenuItem>
                        <MenuItem value={10}>Memorization</MenuItem>
                        <MenuItem value={11}>Physical Stamina</MenuItem>
                        <MenuItem value={12}>Projection</MenuItem>
                        <MenuItem value={13}>Stage Presence</MenuItem>
                        <MenuItem value={14}>Vulnerability</MenuItem>
                    </Select>
                    <FormHelperText>Choose a category that best fits your needs!</FormHelperText>
                    {/* this places a "helper text" for the user under the select box */}
            </FormControl>
        </CardContent>
      </div>
      {/* SEARCH BUTTON */}
        <CardActions align="center">
        <div align="center">
            <Button onClick={getSearchResults}>Show me Whata-to-do!</Button>
        </div>
        </CardActions>
  
        {/* <p>Your ID is: {user.id}</p> */}
        {/* <LogOutButton className="btn" /> */}
    </Card>
    
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
