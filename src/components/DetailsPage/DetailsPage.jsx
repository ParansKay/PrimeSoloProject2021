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

function DetailsPage(){
    // const[name, setName] = useState( null );
    const dispatch = useDispatch();
    const oneActivityReducer = useSelector((store) => store.oneActivityReducer);
    const tag = useSelector((store) => store.tag);
    const store = useSelector((store) => store);

    // FAVORITE TOGGLE
    // const [like, setLike ] = useState( !like );
    // // create a function called toggleLike
    // const toggleLike = () => {
    // // the function sets the value of like to not-like (changes it from false to true)
    // setLike(like);
    //   } //end toggleShowImage
    //END FAVORITE TOGGLE 

    // On page load, connect to the saga to fetch tags, specifically,
    // look for the id of the activity we clicked on the results/activity page
    useEffect(() => {
        dispatch({ 
            type: 'FETCH_TAG',
            payload: oneActivityReducer.id });
    }, []);

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
                        <StarOutlineIcon fontSize="large" right="40%" style={{ color: 'gray', position: "absolute", top: "184px", right: "30px"}} 
                        onClick={console.log('in toggleLike!')}/>
                      {/* </ToggleButton> */}
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
export default DetailsPage;