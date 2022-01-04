import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import './MovieList.css'
import { Link, useHistory } from 'react-router-dom'; //must define link within each component, otherwise we get an undefined error
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

  const history = useHistory();
  const dispatch = useDispatch();

    //for the fixed button on page
    useEffect(() => {
        // dispatch({ type: ''});
        // dispatch({ type: 'FETCH_SEARCH' }); //when I have this un-commented, I get a server 500 error in my saga
        // dispatch({ type: 'FETCH_FAVORITE'});
    }, []);

    return (
        <main className="mainactivity">
           <div className="activityListMap">
            <Typography variant="h3" style={{'font-family':'Poiret One', 'margin-left':'20px'}}>Exercise List</Typography>
            <Typography variant="h3" style={{'font-size':'12px', 'margin-left':'20px', 'font-weight':'200'}}>CLICK ON AN EXERCISE TO VIEW MORE DETAILS</Typography>
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
                        const timer = setTimeout(()=>{
                            history.push("/details");
                            }, 300);
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
                                style={{'padding-top':'10px'}}
                                // style={{ maxWidth: '50%', maxHeight: '80%'}}
                                >
                                <Grid item xs={12} className="results">
                                {/* <Grid item xs={5}> //centered the grid columns on the page but made long texts shove images down*/}
                                 {/* the number inside {} indicates how wide the card can be. Weird.*/}
                                    <Card className="card" variant="outlined" 
                                    sx={{minWidth: "410px", 
                                        minHeight: "auto",
                                        backgroundColor: "#003049",
                                        borderRadius: 7,
                                        boxShadow: 4
                                }}>
                                        {/* ACTIVITY CARDS*/}
                                        <div>
                                            <CardContent key={search.id} onClick={setOneActivity}>
                                                <Typography variant="h3" style={{'color':'#eae2b7', 'font-weight':'300', 'font-size':'30px', 'padding-bottom':'15px'}}>{search.title}</Typography>
                                                <Typography variant="h6" style={{'color':'#eae2b7', 'font-weight':'250', 'font-size':'18px'}}>{search.description.slice(0, 133)}</Typography>
                                            </CardContent>
                                        </div>
                                    </Card>
                                </Grid>
                            </Grid>
                            </div>
                        </div>
                    );
                })}
            </section>

        </main>

    );
}

export default ResultsPage;