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

function FaveDetails(){
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
        dispatch({type: 'FETCH_FAVORITES'});
        checkLikes();
    }, []);

    // FAVORITE TOGGLE;
    //creating a hook for our like button with a default state of false;
    //the default is false because activities are not liked in their default state,
    //meaning the user has to manually like them, changing the false status to true
   const [isLiked, setIsLiked] = useState();
    // creating a function called checkLikes
    // this function checks to see if our favorites table is empty or not 
   const checkLikes =() => {
       console.log(oneActivityReducer.id, favorite);
       // if the table is empty
        if (favorite.length === 0){
            //set the value of IsLiked to false
            setIsLiked(false);
            // then run the toggleLike function (to add it to favorites)
            toggleLike();
        }
        //Otherwise, if there are items in the favorites table,
        else {
            //loop through the items
            for( let i = 0; i<favorite.length; i++ ){
                // check to see if the current activity exists in the favorites table
                if( oneActivityReducer.id === favorite[i].id ){
                    console.log(oneActivityReducer.id, favorite.activity_id);
                    // if it does exist, turn the value of isLiked to true
                    setIsLiked(true);
                    // and run the toggleLike function (to remove it from favorites)
                    toggleLike();
                }//END IF
                // if the current activity does not exist in the table, 
                else{
                    // set the value of isLiked to false
                    setIsLiked(false);
                    // and run the functoin toggleLike (to add it to favorites)
                    toggleLike();   
                } //END ELSE
       }//END FOR LOOP
    }//END ELSE
    //END FAVORITE TOGGLE 
    }//END CHECKLIKES

    const toggleLike = () =>{
        // if the value of isLiked is false, then
        if( isLiked === false ){
            // set its' value to true (aka not-isLiked =!isLiked)
            console.log( 'dispatching POST to add this to favorites' );
            setIsLiked(!isLiked);
            // run the function addToFavorites
            addToFavorites();
         }
        // otherwise, if the value of isLiked is true, then,
        else if(( isLiked === true )){
             console.log( 'dispatching DELETE to remove this from favorites' );
             //change the value isLiked to the opposite of the current value
             //(so, from true to false),
             setIsLiked(!isLiked);
             // and run the function removeFromFavorites
             removeFromFavorites();
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
                        {isLiked?
                          <Button  right="40%" 
                            onClick={checkLikes}>
                            <StarIcon fontSize="large" style={{ color: '#937c96', position: "absolute", top: "17px", left: "340px"}}/>
                          </Button>: 
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
          {/* BOTTOM NAV BAR */}
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
                          {/* Link ADD NEW ICON to AddMovie page */}
                          <Link to="/addmovie">
                          <BottomNavigationAction label="Add new movie" icon={<AddCircleIcon />} />
                          </Link>
                      </BottomNavigation>
                  </Paper>
              </Box>
          </div>
          {/* END OF BOTTOM NAV BAR */}
      </div>
  )
}
export default FaveDetails;