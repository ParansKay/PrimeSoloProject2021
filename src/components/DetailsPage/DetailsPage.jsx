import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link, useHistory, useNavigate } from 'react-router-dom';
//MATERIAL UI IMPORT
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
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import { formControlLabelClasses, IconButton } from '@mui/material';
import { flexbox } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';

function DetailsPage(){
  
    const dispatch = useDispatch();
    const oneActivityReducer = useSelector((store) => store.oneActivityReducer);
    const tag = useSelector((store) => store.tag);
    const store = useSelector((store) => store);
    const favorite = useSelector((store) => store.favorite);
    const user = useSelector((store) => store.user);
    const singleFaveReducer = useSelector((store) => store.singleFaveReducer)

    const history = useHistory();
    
     // On page load, connect to the saga to fetch tags, specifically,
    // look for the id of the activity we clicked on the results/activity page (which is stored in the oneActivityReducer.id)
    useEffect(() => {
        dispatch({
            type: 'FETCH_SINGLE',
            payload:{
                userid: user.id,
                activityid: oneActivityReducer.id
            }
        });
        // dispatch({
        //     type: 'FETCH_ACTIVITY_TAG',
        //     payload:{
        //         activityid: oneActivityReducer.id}
        // })
        dispatch({ 
            type: 'FETCH_TAG',
            payload: oneActivityReducer.id });
        
        dispatch({type: 'FETCH_FAVORITE',
                  payload: user.id});
    }, []);


    console.log('singleFaveReducer is------:', singleFaveReducer);
    
    // const checkLikes = () => {
    //     if ( singleFaveReducer.length > 0 ){
    //         setIsLiked(true);
    //     }
    //     else if ( singleFaveReducer.length === 0 ){
    //         setIsLiked(false);
    //     }
    // }// END CHECKLIKES

    const toggleLike = () =>{
        // if the value of isLiked is false, then
       if( singleFaveReducer.length === 0 ){
            // set its' value to true (aka not-isLiked =!isLiked)
           console.log( 'dispatching POST to add this to favorites' );
           // run the function addToFavorites
           addToFavorites();
           dispatch({
            type: 'FETCH_SINGLE',
            payload:{
                userid: user.id,
                activityid: oneActivityReducer.id
            }
        });
        }
         // otherwise, if the value of isLiked is true, then,
       else if( singleFaveReducer.length > 0 ){
            console.log( 'dispatching DELETE to remove this from favorites' );
           //change the value isLiked to the opposite of the current value
            //(so, from true to false),
            // and run the function removeFromFavorites
            removeFromFavorites();
            dispatch({
                type: 'FETCH_SINGLE',
                payload:{
                    userid: user.id,
                    activityid: oneActivityReducer.id
                }
            });
       }
   }

    //Creating a function called addToFavorites
    const addToFavorites = () => {
        dispatch({ 
            type: 'SET_LIKE',
            payload: {
                activity_id: oneActivityReducer.id, //target the current activity's id
                user_id: user.id //target the current user id
        }});
    };

    //Creating a function called removeFromFavorites
    const removeFromFavorites = () =>{
        dispatch({ 
            type: 'DELETE_LIKE',
            payload: {
                activity_id: oneActivityReducer.id, //target the current activity's id
                user_id: user.id //target the current user id
        }}); 
    };

    const openEditEPage = () =>{ //the E is for existing
        console.log( 'editing now' );
        dispatch({
            type: 'FETCH_ACTIVITY',
            payload: oneActivityReducer})
            history.push("/editpageexisting");
    }

  return(
      <div>
          {/* <h1>DetailsPage</h1> */}
          <section className="activityDetail">
          <div>
          <Grid
              container
              direction="column"
              // spacing={0} 
              alignItems="center"
              justify="center"
              // style={{ maxWidth: '50%', maxHeight: '80%'}}
              >
              <Grid item xs={12} className="activity">
              {/* <Grid item xs={5}> //centered the grid columns on the page but made long texts shove images down*/}
                  {/* the number inside {} indicates how wide the card can be. Weird.*/}
                  <Card className="card" variant="outlined" 
                  sx={{minWidth: "411px", 
                      minHeight: "380px",
                      backgroundColor: "#003049",
                      borderRadius: 7,
                      boxShadow: 1
              }}>
                      {/* ACTIVITY DETAIL CARD*/}
                      {/* ACTIVITY TITLE */}
                      <CardContent key={oneActivityReducer.id}>
                          {/* Styling allows us to  */}
                      {/* <ToggleButton> */}
                      <div>
                          {/* if the activity is liked, */}
                        {singleFaveReducer.length>0?
                            // onClick will run the checkLikes button (to determine how to render the icon + POST / DELETE route)
                          <IconButton  right="40%" 
                            onClick={toggleLike}>
                            <StarIcon fontSize="large" style={{ 'color': '#f77f00', position: "absolute", top: "24px", left: "340px"}}/>
                          </IconButton>: 
                          // otherwise, the icon will be empty. onClick will still run the checkLikes function.
                          <IconButton  right="40%" 
                            onClick={toggleLike}>
                            <StarOutlineIcon fontSize="large" style={{ 'color': '#fcbf49', position: "absolute", top: "24px", left: "340px"}}/>
                          </IconButton> 
                        }

                        {user.access_level === 10 &&
                            // If there's no user, show login/registration links
                            <Button size="large" onClick={openEditEPage} right="40%">
                                <EditIcon fontSize="large" style={{ 'color': '#f77f00', position: "absolute", top: "70", left: "320px"}}/>
                            </Button>
                        }

                      </div>
                        {/* ACTIVITY NAME */}
                        <Typography variant="h3" style={{'color':'#eae2b7', 'font-family':'Poiret One', 'font-weight':'300', 'font-size':'40px', 'padding-bottom':'15px'}}>{oneActivityReducer.name}</Typography>
                        {/* NUMBER OF ACTORS */}
                        <flexBox variant="h7" style={{'color':'#061e2a', 'font-weight':'500', 'font-size':'15px', 'background-color':'#fcbf49', 'border-radius':9, 'min-height': '20px', 'min-width': 'auto', 'padding-left': '10px', 'padding-right': '10px', 'padding-top':'3px', 'padding-bottom':'3px'}}>For {oneActivityReducer.actors} actors</flexBox>
                        </CardContent>
                        {/* ACTIVITY DESCRIPTION */}
                        <CardContent>
                            <>
                            <style>
                            {`#p-wrap {
                            white-space: pre-line;
                            }`}
                            </style>
                          <Typography variant="h4" style={{'color':'#eae2b7', 'font-weight':'250', 'font-size':'20px'}}>{oneActivityReducer.description}</Typography>
                          </>
                          {/* ACTIVITY TAGS */}
                          <div>
                          <Typography style={{'color':'#eae2b7', 'font-weight':'450', 'font-size':'17px', 'padding-top':'30px'}}>TAGS:</Typography>
                              {tag.map(tag => {
                                  return (
                                            <div className="detailsTag" style={{'margin-bottom':'10px'}}>
                                              {/* <Card style={{'background-color':'#d62828', 'min-height': '20px', 'max-width': 'auto', 'border-radius':9}}> */}
                                              <flexBox style={{'color':'##061e2a', 'font-weight':'500', 'font-size':'15px', 'background-color':'#f77f00', 'border-radius':9, 'min-height': '20px', 'min-width': 'auto', 'padding-left': '10px', 'padding-right': '10px', 'padding-top':'3px', 'padding-bottom':'3px'}}>{tag.name}</flexBox>
                                              {/* </Card> */}
                                            </div>
                                  );
                              })}
                         </div>
                      </CardContent>
                  </Card>
              </Grid>
          </Grid>
          </div>
          </section>
      </div>
  )
}
export default DetailsPage;