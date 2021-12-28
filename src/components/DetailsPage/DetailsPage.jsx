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

function DetailsPage(){
    // const[name, setName] = useState( null );
    const dispatch = useDispatch();
    const oneActivityReducer = useSelector((store) => store.oneActivityReducer);
    const tag = useSelector((store) => store.tag);
    const store = useSelector((store) => store);
    const favorite = useSelector((store) => store.favorite);
    const user = useSelector((store) => store.user);

     // On page load, connect to the saga to fetch tags, specifically,
    // look for the id of the activity we clicked on the results/activity page
    useEffect(() => {
        dispatch({ 
            type: 'FETCH_TAG',
            payload: oneActivityReducer.id });
        dispatch({type: 'FETCH_FAVORITE',
                  payload: user.id});
        checkLikes();
    }, []);

    // FAVORITE TOGGLE;
    //creating a hook for our like button with a default state of false;
    //the default is false because activities are not liked in their default state,
    //meaning the user has to manually like them, changing the false status to true
   const [isLiked, setIsLiked] = useState();
    // creating a function called toggleLikes where we can flip between
    //the value of liked and notliked
   const checkLikes =() => {
       // if the value of isLiked is false, then, change it to true,
       // and proceed to make a POST dispatch call
       console.log(oneActivityReducer.id, favorite);
        if (favorite.length === 0){
            setIsLiked(false);
            toggleLike();
        }
        else {
            for( let i = 0; i<favorite.length; i++ ){
                if( oneActivityReducer.id === favorite[i].id ){
                    console.log(oneActivityReducer.id, favorite.activity_id);
                    setIsLiked(true);
                    toggleLike();
                }//end if
                else{
                    setIsLiked(false);
                    toggleLike();   
                }
       }
    }
    //END FAVORITE TOGGLE 
    }

    const toggleLike = () =>{
        if( isLiked === false ){
            console.log( 'dispatching POST to add this to favorites' );
            setIsLiked(true);
            addToFavorites();
         }
        // otherwise, if the value of isLiked is true, then, change it to false,
        // and proceed to make a DELETE dispatch call
        else if(( isLiked === true )){
             console.log( 'dispatching DELETE to remove this from favorites' );
             setIsLiked(false);
             removeFromFavorites();
        }
    }

    const addToFavorites = () => {
        dispatch({ 
            type: 'SET_LIKE',
            payload: {
                activity_id: oneActivityReducer.id,
                user_id: user.id
        }});
    };

    const removeFromFavorites = () =>{
        dispatch({ 
            type: 'DELETE_LIKE',
            payload: {
                activity_id: oneActivityReducer.id,
                user_id: user.id
        }}); 
    }
    // FIXED NAV BAR
    const [value, setValue] = React.useState(0);
    //END FIXED NAV BAR 

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
                        {isLiked?
                            // onClick will run the checkLikes button (to determine how to render the icon + POST / DELETE route)
                          <Button  right="40%" 
                            onClick={checkLikes}>
                            <StarIcon fontSize="large" style={{ color: '#937c96', position: "absolute", top: "17px", left: "340px"}}/>
                          </Button>: 
                          // otherwise, the icon will be empty. onClick will still run the checkLikes function.
                          <Button  right="40%" 
                            onClick={checkLikes}>
                            <StarOutlineIcon fontSize="large" style={{ color: 'gray', position: "absolute", top: "17px", left: "340px"}}/>
                          </Button> 
                        }
                      </div>
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