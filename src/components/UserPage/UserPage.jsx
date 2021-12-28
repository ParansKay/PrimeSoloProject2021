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
import styled from "styled-components";

const StyledForm = styled(FormControl)({
  '& label.Mui-focused': { //this changes the input label color AFTER it has been selected
    color: '#d9d9d9',
  },
  '& .MuiFormHelperText-root':{
    color: '#d9d9d9',
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
    color: 'white',
  },
  '& .MuiFormLabel-root': { //this changes the color of the input label at it's default state
    color: '#d9d9d9',
  },
})
;


function UserPage() {
  //connecting to the store to retrieve the following values 
  const user = useSelector((store) => store.user);
  const activity = useSelector((store) => store.activity);
  const tag = useSelector((store) => store.tag);

  const history = useHistory();
  
  //defning dispatch
  const dispatch = useDispatch();

  const [randomQuote, setRandomQuote] = useState('Default Quote Here');
  const [quoteAuthor, setQuoteAuthor] = useState('Default quotes Author Here');
  let quotesArray = [
        { quote: 'Suit the action to the word, the word to the action.', author: 'Willam Shakespeare'},
        { quote: 'Acting is behaving truthfully under imaginary circumstances.', author: 'Sanford Meisner'},
        { quote: 'Only you can be you. What a privilege! Nobody can reach what you can if you do it. So do it.', author: 'Stella Adler'},
        { quote: 'Life has to be everything. It can’t be all sad. It can’t be all peaches and cream. Because the lows have you appreciate the highs. And the highs give you perspective on the lows', author: 'Sterling K Brown'},
        { quote: 'One of the really nice things about being an actor is that no experience is wasted.', author: 'Patrick Stewart'},
        { quote: 'You’ve got to get the thickest skin possible. Like a rhino hide. It’s a very personal job. Put a helmet on.', author: 'Emily Blunt'},
        { quote: 'If it be true that good wine needs no bush, \'tis true that a good play needs no epilogue.', author: 'William Shakespeare'}
    ];
  const quoteRandomizer = () => {
    let randomDecimal = Math.random(); //e.g.   0.6
    let randomBetween0AndLength = randomDecimal * quotesArray.length;  //e.g.    1.6 ?
    let flooredRandom = Math.floor(randomBetween0AndLength); //e.g. 1
    let index = flooredRandom;
    setRandomQuote(quotesArray[index].quote);
    setQuoteAuthor(quotesArray[index].author);
    //floor rounds the number down, random privides a number between 0-1, 
    console.log('random quote is:', randomQuote, 'author is:', quoteAuthor);
  }

  useEffect(() => {
    // dispatch({ type: 'FETCH_SEARCH'}); let's research why we commented this out?! 
    quoteRandomizer();
  }, []);

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
    <Card style={{'background-color':'#061e2a', 'color':'white'}}>
      {/* USER GREETING and Quote*/}
      <div className="helloUser">
        <div className="breaksDiv">
          <br/>
          <br/>
          <br/>
          {/* <br/> */}
        </div>
        <CardContent className="welcomeUserName">
            {/* USER GREETING */}
              <Typography variant="h5" align="center" style={{'font-family':'Poiret One', 'font-size':'40px'}}>Welcome, </Typography>
              <Typography variant="h5" align="center" style={{'font-family':'Poiret One', 'font-size':'40px'}}>{user.first_name}!</Typography>
              <br/>
              <br/>
                {/* QUOTE RANDOMIZER */}
                <div className="quoteRandomizer"> 
                <Card style={{'background-color':'#003049', 'color':'#d9d9d9', 'padding':'15px', 'border-radius':'20px'}}>
                  <Typography align="center" style={{'font-style':'italic'}}>"{randomQuote}"</Typography>
                  <Typography alignContent="right" align="right" style={{'padding-right':'20px'}}>-{quoteAuthor}</Typography>
                </Card>
                </div>
                {/* END OF QUOTE RANDOMIZER */}
          
            {/* END OF USER GREETING */}
          </CardContent> 
        </div>

        {/* INPUT */}
        <div>
          <CardContent>
            <Typography align="center" variant="h5" style={{'font-family':'Poiret One'}}>Let's figure out Whata-to-do!</Typography>
            <br/>
            <center>
            <StyledForm align="center" className="formClass" sx={{ m: 1, minWidth: 300}}>
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

                        <MenuItem style={{'color':'#fcbf49', 'background-color':'#003049'}} value="">
                            <em>pick from the list below!</em>
                            {/* this is an empty value. when a user clicks on this, the selector box will go back to displaying the label */}
                        </MenuItem>
                        <MenuItem style={{'color':'#fcbf49', 'background-color':'#003049'}} value={1}>Breath Support</MenuItem>
                        <MenuItem style={{'color':'#fcbf49', 'background-color':'#003049'}} value={2}>Character Development</MenuItem>
                        <MenuItem style={{'color':'#fcbf49', 'background-color':'#003049'}} value={3}>Connection / Relationships</MenuItem>
                        <MenuItem style={{'color':'#fcbf49', 'background-color':'#003049'}} value={4}>Energy</MenuItem>
                        <MenuItem style={{'color':'#fcbf49', 'background-color':'#003049'}} value={5}>Enunciation</MenuItem>
                        <MenuItem style={{'color':'#fcbf49', 'background-color':'#003049'}} value={6}>Escalation / Urgency</MenuItem>
                        <MenuItem style={{'color':'#fcbf49', 'background-color':'#003049'}} value={7}>Focus</MenuItem>
                        <MenuItem style={{'color':'#fcbf49', 'background-color':'#003049'}} value={8}>Improvisation</MenuItem>
                        <MenuItem style={{'color':'#fcbf49', 'background-color':'#003049'}} value={9}>Listening</MenuItem>
                        <MenuItem style={{'color':'#fcbf49', 'background-color':'#003049'}} value={10}>Memorization</MenuItem>
                        <MenuItem style={{'color':'#fcbf49', 'background-color':'#003049'}} value={11}>Physical Stamina</MenuItem>
                        <MenuItem style={{'color':'#fcbf49', 'background-color':'#003049'}} value={12}>Projection</MenuItem>
                        <MenuItem style={{'color':'#fcbf49', 'background-color':'#003049'}} value={13}>Stage Presence</MenuItem>
                        <MenuItem style={{'color':'#fcbf49', 'background-color':'#003049'}} value={14}>Vulnerability</MenuItem>
                    </Select>
                    {/* <FormHelperText>Choose a category that best fits your needs!</FormHelperText> */}
                    {/* this places a "helper text" for the user under the select box */}
            </StyledForm>
            </center> 
        </CardContent>
      </div>

      {/* SEARCH BUTTON */}
        <center align="center">
        <div>
            <Button onClick={getSearchResults} align="center" style={{padding: '15px 30px', 'border-radius': '50px', 'font-size':'17px', 'background-color':'#f77f00', 'color':'white'}}>Show me Whata-to-do!</Button>
        </div>
        </center>
  
  <br/>
  <br/>
        {/* <p>Your ID is: {user.id}</p> */}
        {/* <LogOutButton className="btn" /> */}
    </Card>
    
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
