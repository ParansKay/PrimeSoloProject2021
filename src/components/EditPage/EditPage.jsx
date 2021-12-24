import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import * as React from 'react';
import { Link } from 'react-router-dom'; //must define link within each component, otherwise we get an undefined error
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

function EditPage(){
    // const[name, setName] = useState( null );
    const dispatch = useDispatch();

    const user = useSelector((store) => store.user);
    const favorite = useSelector((store) => store.favorite);
    const oneActivityReducer = useSelector((store) => store.oneActivityReducer);
    const tag = useSelector((store) => store.tag);
    const activity = useSelector((store) => store.activity);

    const[activityStat, setActivityStat] = useState();

    // FIXED NAV BAR
    const [value, setValue] = React.useState(0);
    //END FIXED NAV BAR 

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
        }, []);
        console.log('editing this activity!', editedActivity)
    };

    return(
        <div className="newmoviepagemargintop">
            <div>
                <Grid
                    container
                    alignItems="center"
                    justify="center"
                    style={{ width: '100%', height: 'auto'}}
                    >

                <Grid item xs={12}>
                {/* the number inside {} indicates how wide the card can be. Weird.*/}
                    <Card className="card" variant="outlined">
                        {/* HEADER */}
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                               Let's edit this activity
                            </Typography>
                        </CardContent>
                        {/* TITLE INPUT */}
                        <CardContent>
                            <TextField
                                id="outlined-multiline-static"
                                label="activity title"
                                //lets figure out how to make this box larger!!!!!!!!!!!
                                rows={4}
                                defaultValue={editedActivity.title}
                                onChange={ ( event )=>addTitle( event )}
                                />
                        </CardContent> 
                        {/* ACTORS INPUT */}
                        <CardContent>
                            <FormControl className="formClass" sx={{ minWidth: 200,  }}>
                                <InputLabel id="actors-select-label">How many actors?</InputLabel>
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
                            </FormControl>
                        </CardContent>  
                        {/* DESCRIPTION INPUT */}
                        <CardContent>
                        <TextField
                                id="outlined-multiline-static"
                                label="activity decription"
                                multiline
                                //lets figure out how to make this box larger!!!!!!!!!!!
                                rows={4}
                                defaultValue={editedActivity.description}
                                onChange={ ( event )=>addDescription( event )}
                                />
                        </CardContent> 
                        {/* TAGS DROP DOWN */}
                       <CardContent>
                            <FormControl className="formClass" sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="genre-select-label">pick a tag</InputLabel>
                                    <Select
                                        labelId="tag-select-label"
                                        // this ID needs to be the same as the ID of InputLabel ^^
                                        id="tag-select"
                                        // but this id needs to be different from the other two above ^^
                                        value={editedActivity.tags}
                                        label="tagSelect"
                                        onChange={( event )=>addTag( event )}
                                    >
                                        <MenuItem value="">
                                            {/* <em>{editedActivity.tags}</em> */}
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
                                    <FormHelperText>Select a tag that best describes this activity!</FormHelperText>
                                    {/* this places a "helper text" for the user under the select box */}
                            </FormControl>
                        </CardContent>
                         {/*BUTTONS  */}
                        <CardActions sx={{ justifyContent: "right" }}> 
                        {/* ^^ centers the button, but not the card itself */}
                            <div className="NextPageButton">
                                <Link to="/">
                                    <Button size="large" variant="outlined" color="warning" fontSize="large">Cancel</Button>
                                </Link>
                                <Link to="/">
                                    <Button className="next" variant="contained" color="warning" size="large" onClick={editThisActivity}>Save</Button>
                                </Link>
                            </div>
                        </CardActions>
                    </Card>
                </Grid>      
            </Grid>
            <div>
            <div className="bottomNavBar">
                <Box sx={{ width: 500 }}>
                    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                        <BottomNavigation
                            showlabels
                            value={value}
                            onChange={(event, newValue) => {
                            setValue(newValue);
                            }}
                        >
                            {/* Link HOME ICON to MovieList page */}
                            <Link to="/">
                            <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                            </Link>
                        </BottomNavigation>
                    </Paper>
                </Box>
                </div>
            </div>
        </div>
    </div>
        
    )
}

export default EditPage;