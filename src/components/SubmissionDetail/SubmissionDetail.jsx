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
import Paper from '@mui/material/Paper';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';


function SubmissionDetailPage(){
    // const[name, setName] = useState( null );
    const dispatch = useDispatch();
    const oneActivityReducer = useSelector((store) => store.oneActivityReducer);
    const tag = useSelector((store) => store.tag);
    const store = useSelector((store) => store);
    const favorite = useSelector((store) => store.favorite);
    const user = useSelector((store) => store.user);
    const activity = useSelector((store) => store.activity);

    const history = useHistory();

     // On page load, connect to the saga to fetch tags, specifically,
    // look for the id of the activity we clicked on the results/activity page
    useEffect(() => {
        dispatch({ 
            type: 'FETCH_TAG',
            payload: oneActivityReducer.id });
    }, []);

    //HANLDE POP-UP MODAL
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // END HANDLE POP-UP MODAL

    // SUBMISSION APPROVAL FUNCTION
    const approvePost = () =>{
        console.log( 'approving this post' );
        dispatch({
            type: 'ADD_CLEARANCE',
            payload: {
                activity_id: oneActivityReducer.id,
                clearance: 0
            }
        })
        const timer = setTimeout(()=>{
            history.push("/submissionscontrol");
            }, 200);
    } //END EUBMISSION APPROVAL FUNCTION

    const openEditPage = () =>{
        console.log( 'editing now' );
        dispatch({
            type: 'FETCH_ACTIVITY',
            payload: oneActivityReducer})
            history.push("/editpage");
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
                  sx={{minWidth: "400px", 
                      minHeight: "380px",
                      backgroundColor: "transparent",
                      borderRadius: 7,
                      boxShadow: 1
              }}>
                      {/* ACTIVITY DETAIL CARD*/}
                      {/* ACTIVITY TITLE */}
                      <CardContent key={oneActivityReducer.id}>
                          {/* ACTIVITY NAME */}
                          <Typography variant="h5">{oneActivityReducer.name}</Typography>
                            {/* BUTTONS */}
                            <div>
                                <Button  right="40%" style={{ color: '#937c96', position: "absolute", top: "180px", left: "285px"}}
                                    onClick={openEditPage}>
                                    <EditIcon fontSize="large"/>
                                </Button>
                                <Button  right="40%" style={{ color: '#937c96', position: "absolute", top: "180px", left: "240px"}}
                                    onClick={handleClickOpen}>
                                    <CheckBoxIcon fontSize="large"/>
                                </Button>
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">
                                    {"Would you like to approve this submission?"}
                                    </DialogTitle>
                                    <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                       By clicking approve, you are adding this submission for all users to see. If you'd like to continue editing, click "not yet".
                                    </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={handleClose}>Not yet</Button>
                                    <Button onClick={approvePost} autoFocus>
                                        Approve!
                                    </Button>
                                    </DialogActions>
                                </Dialog>
                            </div>
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
        </div>
  )
}
export default SubmissionDetailPage;