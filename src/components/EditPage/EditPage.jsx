import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import * as React from 'react';
import { Link, useHistory, useNavigate } from 'react-router-dom'; //must define link within each component, otherwise we get an undefined error
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
    color: '#f77f00',
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

const StyledForm = styled(FormControl)({
    '& label.Mui-focused': { //this changes the input label color AFTER it has been selected
      color: '#f77f00',
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
      color: '#eae2b7',
    },
    '& .MuiFormLabel-root': { //this changes the color of the input label at it's default state
      color: '#eae2b7',
    },
  })
  ;

function EditPage(){
    // const[name, setName] = useState( null );
    const dispatch = useDispatch();

    const history = useHistory();

    const user = useSelector((store) => store.user);
    const favorite = useSelector((store) => store.favorite);
    const oneActivityReducer = useSelector((store) => store.oneActivityReducer);
    const tag = useSelector((store) => store.tag);
    const activity = useSelector((store) => store.activity);

    const[activityStat, setActivityStat] = useState();

    useEffect(() => {
      // dispatch({ type: ''});
      dispatch({ type: 'FETCH_TAG',
                  payload: editedActivity.id});
      
  }, []);

    // If we don't already have the activity, do the following 
    //Creating a new variable that allows us to send info updates to the saga, and then to the store
    const [editedActivity, setEditedActivity] = useState({
        activity_id: oneActivityReducer.id,
        title: oneActivityReducer.name,
        description: oneActivityReducer.description,
        actors: oneActivityReducer.actors,
        tags: tag[0].id
    });
    //updating the value of title based on the input field
    const addTitle = (event) => {
        //changing only the title property in newActivity to the value in our input field
        setEditedActivity({...editedActivity, title: event.target.value});
        console.log( 'new title is:', editedActivity.title );
    };

    //updating the value of description based on the input field
    const addDescription = (event) => {
        //changing only the description property in newActivity to the value in our input field
        setEditedActivity({...editedActivity, description: event.target.value});
        console.log( 'new description is:', editedActivity.description );
    };

    //updating the value of genre based on the input field
    const addActors = (event) => {
        //changing only the actors property in newActivity to the value in our input field
        setEditedActivity({...editedActivity, actors: event.target.value});
        console.log( 'new actor value is:', editedActivity.actors );
    };

    const addTag = (event) => {
        //changing only the tag property in newActivity to the value in our input field
        setEditedActivity({...editedActivity, tags: event.target.value});
        console.log( 'new tag is:', editedActivity.tags );
    };

    const editThisActivity = (event) => {
        dispatch({ 
            type: 'EDIT_ACTIVITY',
            payload: editedActivity
        });
        dispatch({ 
          type: 'FETCH_TAG',
          payload: editedActivity.id });
        dispatch( {
            type: 'SET_ONE_ACTIVITY', 
            payload:{
                id: editedActivity.id,
                name: editedActivity.title, 
                description: editedActivity.description, 
                actors: editedActivity.actors
                }
            } )
        const timer = setTimeout(()=>{
            history.push("/submissiondetail");
            }, 500);
    };

    const deleteActivity = (event) => {
      console.log('in deleteactivity');
      dispatch({
        type: 'DELETE_ACTIVITY',
        payload:{
          activity_id: oneActivityReducer.id
        }
      })
      const timer = setTimeout(()=>{
        history.push("/submissionscontrol");
        }, 200);
    }

    return(
        <div className="editpagemargintop">
             <div className="activityListMap">
                <Typography variant="h3" style={{'font-family':'Poiret One', 'margin-left':'20px'}}>Editing Mode</Typography>
                <Typography variant="h3" style={{'font-size':'12px', 'margin-left':'20px', 'font-weight':'200'}}>CLICK ON ANY OF THE FIELDS TO START EDITING.</Typography>
            </div>
            <div>
                <Grid
                    container
                    alignItems="center"
                    justify="center"
                    style={{ width: '100%', height: 'auto'}}
                    >

                <Grid item xs={12}>
                {/* the number inside {} indicates how wide the card can be. Weird.*/}
                    <Card className="card" variant="outlined" style={{'background-color':'#061e2a', 'color':'#eae2b7'}}>
                
                        {/* TITLE INPUT */}
                        <CardContent>
                            <StyledTextField
                                id="outlined-multiline-static"
                                label="What is this exercise called?"
                                variant="outlined"
                                //lets figure out how to make this box larger!!!!!!!!!!!
                                rows={4}
                                style={{'minWidth':'380px'}}
                                defaultValue={editedActivity.title}
                                onChange={ ( event )=>addTitle( event )}
                                />
                        </CardContent> 
                        {/* ACTORS INPUT */}
                        <CardContent>
                            <StyledForm className="formClass"  style={{'minWidth':'380px'}}>
                            <InputLabel id="actors-select-label">How many actors does it require?</InputLabel>
                                    <Select
                                        labelId="actors-select-label"
                                        // this ID needs to be the same as the ID of InputLabel ^^
                                        id="actors-select"
                                        // but this id needs to be different from the other two above ^^
                                        value={editedActivity.actors}
                                        label="actorsSelet"
                                        onChange={( event )=>addActors( event )}
                                    >
                                        <MenuItem value="">
                                            <em>How many actors?</em>
                                            {/* this is an empty value. when a user clicks on this, the selector box will go back to displaying the label */}
                                            </MenuItem>
                                            <MenuItem value={'1'}>Single</MenuItem>
                                            <MenuItem value={'2'}>2 Actors</MenuItem>
                                            <MenuItem value={'5+'}>5+</MenuItem>
                                            <MenuItem value={'10+'}>10+</MenuItem>
                                    </Select>
                            </StyledForm>
                        </CardContent>  
                        {/* DESCRIPTION INPUT */}
                        <CardContent>
                        <StyledTextField
                                id="outlined-multiline-static"
                                label="Tell us more about this exercise. (describe every step in detail)"
                                variant="outlined"
                                style={{'minWidth':'380px'}}
                                multiline
                                //lets figure out how to make this box larger!!!!!!!!!!!
                                rows={4}
                                defaultValue={editedActivity.description}
                                onChange={ ( event )=>addDescription( event )}
                                />
                        </CardContent> 
                        {/* TAGS DROP DOWN */}
                       <CardContent>
                       <StyledForm className="formClass" style={{'minWidth':'380px'}}>
                       <InputLabel id="genre-select-label">What does this exercise help with?</InputLabel>
                                    <Select
                                        labelId="tag-select-label"
                                        // this ID needs to be the same as the ID of InputLabel ^^
                                        id="tag-select"
                                        // but this id needs to be different from the other two above ^^
                                        value={editedActivity.tags}
                                        label="tagSelect"
                                        onChange={( event )=>addTag( event )}
                                    >
                                        <MenuItem style={{'color':'#fcbf49', 'background-color':'#003049', 'font-weight':'200'}} value="">
                                        <em>pick a tag</em>
                                            {/* <em>{editedActivity.tags}</em> */}
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
                                    {/* <FormHelperText>Select a tag that best describes this activity!</FormHelperText> */}
                                    {/* this places a "helper text" for the user under the select box */}
                            </StyledForm>
                        </CardContent>
                         {/*BUTTONS  */}
                        <CardActions sx={{ justifyContent: "right" }}> 
                        {/* ^^ centers the button, but not the card itself */}
                            <div className="newSubmitPageBtns">
                                <Button size="large" variant="outlined" onClick={deleteActivity} style={{ 'border-radius':'20px', 'color': '#d62828', 'border-color':'#d62828', right: "90px"}}>
                                  Delete
                                {/* <DeleteIcon fontSize="large" style={{ 'color': 'white', position: "absolute", right: "150px"}}/> */}
                                </Button>
                                <Link to="/submissiondetail" style={{'text-decoration':'none'}}>
                                    <Button size="large" variant="contained" style={{'color':'white', 'background-color':'#d62828', 'border-radius':'20px', right: '5px'}} fontSize="large">Cancel</Button>
                                </Link>
                                    <Button className="next" variant="contained" color="warning" style={{'border-radius':'20px'}} size="large" onClick={editThisActivity}>Save</Button>
                            </div>
                        </CardActions>
                    </Card>
                </Grid>      
            </Grid>
            <div>
            </div>
        </div>
    </div>
        
    )
}

export default EditPage;