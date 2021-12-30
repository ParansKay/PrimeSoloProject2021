import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
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

function DetailsPage(){
  
    const dispatch = useDispatch();
    const oneActivityReducer = useSelector((store) => store.oneActivityReducer);
    const tag = useSelector((store) => store.tag);
    const store = useSelector((store) => store);
    const favorite = useSelector((store) => store.favorite);
    const user = useSelector((store) => store.user);
    const singleFaveReducer = useSelector((store) => store.singleFaveReducer)

    
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
                  sx={{minWidth: "400px", 
                      minHeight: "380px",
                      backgroundColor: "transparent",
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
                            <StarIcon fontSize="large" style={{ color: '#937c96', position: "absolute", top: "17px", left: "340px"}}/>
                          </IconButton>: 
                          // otherwise, the icon will be empty. onClick will still run the checkLikes function.
                          <IconButton  right="40%" 
                            onClick={toggleLike}>
                            <StarOutlineIcon fontSize="large" style={{ color: 'gray', position: "absolute", top: "17px", left: "340px"}}/>
                          </IconButton> 
                        }
                      </div>
                        {/* ACTIVITY NAME */}
                        <Typography variant="h4">{oneActivityReducer.name}</Typography>
                        {/* NUMBER OF ACTORS */}
                        <Typography variant="h7">For {oneActivityReducer.actors} actors</Typography>
                        </CardContent>
                        {/* ACTIVITY DESCRIPTION */}
                        <CardContent>
                          <Typography variant="h6">{oneActivityReducer.description}</Typography>
                          {/* MOVIE GENRE */}
                          <div>
                          <h4>Tags:</h4>
                              {tag.map(tag => {
                                  return (
                                          <div className="detailstag">
                                              <h5>{tag.name}</h5>
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