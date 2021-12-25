import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import './MovieList.css'
import { Link } from 'react-router-dom'; //must define link within each component, otherwise we get an undefined error
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


function ResultsPage() {

  const activity = useSelector((store) => store.activity);
  const tag = useSelector((store) => store.tag);
  const search = useSelector((store) => store.search);
  const oneActivityReducer = useSelector((store) => store.oneActivityReducer);
  const dispatch = useDispatch();

    //for the fixed button on page
    // FIXED NAV BAR
    const [value, setValue] = React.useState(0);
    //END FIXED NAV BAR 

    useEffect(() => {
        // dispatch({ type: ''});
        // dispatch({ type: 'FETCH_SEARCH' }); //when I have this un-commented, I get a server 500 error in my saga
        // dispatch({ type: 'FETCH_FAVORITE'});
    }, []);

    return (
        <main>
            <div className="activityListMap">
            <h1>Activity List</h1>
            </div>
            <section className="mapping">
                {search.map(search => { {/* mapping through the store */}
                const setOneActivity = () => { 
                    //This ^^ function needs to be defined within the mapping.
                    // if defined outside, it won't work.
                    dispatch( {
                        type: 'SET_ONE_ACTIVITY', 
                        payload:{
                            id: search.id,
                            name: search.title, 
                            description: search.description, 
                            actors: search.actors
                            }
                        } )
                }
                    return (
                        // appending movie information to the MovieList component
                        <div className="activityAppending">
                            <div>
                            <Grid
                                
                                container
                                direction="column"
                                // spacing={0} 
                                alignItems="center"
                                justify="center"
                                // style={{ maxWidth: '50%', maxHeight: '80%'}}
                                >
                                <Grid item xs={12} className="results">
                                {/* <Grid item xs={5}> //centered the grid columns on the page but made long texts shove images down*/}
                                 {/* the number inside {} indicates how wide the card can be. Weird.*/}
                                    <Card className="card" variant="outlined" 
                                    sx={{minWidth: "400px", 
                                        minHeight: "380px",
                                        backgroundColor: "transparent",
                                        borderRadius: 7,
                                        boxShadow: 1
                                }}>
                                        {/* MOVIE CARDS*/}
                                        <Link to="/details" style={{ textDecoration: 'none', color: 'black'}}>
                                        <CardContent key={search.id} Link to="/details" onClick={setOneActivity}>
                                            <Typography variant="h3">{search.title}</Typography>
                                            <Typography variant="h6">{search.description}</Typography>
                                        </CardContent>
                                        </Link>
                                    </Card>
                                </Grid>
                            </Grid>
                            </div>
                        </div>
                    );
                })}
            </section>
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
                            <Link to="/addactivity">
                            <BottomNavigationAction icon={<AddCircleIcon />} />
                            </Link>
                        </BottomNavigation>
                    </Paper>
                </Box>
                </div>

        </main>

    );
}

export default ResultsPage;