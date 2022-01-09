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
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import { formControlLabelClasses, IconButton } from '@mui/material';
import { flexbox } from '@mui/system';


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
                    sx={{minWidth: "411px", 
                    minHeight: "380px",
                    backgroundColor: "#003049",
                    borderRadius: 7,
                    boxShadow: 1
              }}>
                      {/* ACTIVITY DETAIL CARD*/}
                      {/* ACTIVITY TITLE */}
                      <CardContent key={oneActivityReducer.id}>
                          {/* ACTIVITY NAME */}
                          <Typography variant="h3" style={{'color':'#eae2b7', 'font-family':'Poiret One', 'font-weight':'300', 'font-size':'40px', 'padding-bottom':'15px', 'padding-top':'20px'}}>{oneActivityReducer.name}</Typography>
                          {/* ACTOR NUMBER */}
                          <flexBox variant="h7" style={{'color':'#061e2a', 'font-weight':'500', 'font-size':'15px', 'background-color':'#fcbf49', 'border-radius':9, 'min-height': '20px', 'min-width': 'auto','padding-left': '10px', 'padding-right': '10px', 'padding-top':'3px', 'padding-bottom':'3px'}}>For {oneActivityReducer.actors} actors</flexBox>
                            {/* BUTTONS */}
                            <div>
                                <IconButton
                                    onClick={openEditPage}>
                                    <EditIcon fontSize="large" style={{ 'color': '#f77f00', position: "absolute", bottom:'10px',left: "340px"}}/>
                                </IconButton>
                                {open?
                                    <IconButton  right="40%"
                                    onClick={handleClickOpen}>
                                    <CheckCircleIcon fontSize="large"  style={{ 'color': '#f77f00', position: "absolute", bottom: "53px", left: "325px"}}/>
                                    </IconButton>:

                                    <IconButton  right="40%"
                                    onClick={handleClickOpen}>
                                    <CheckCircleOutlineIcon fontSize="large" style={{ 'color': '#f77f00', position: "absolute", bottom: "53px", left: "325px"}}/>
                                    </IconButton>   
                                }

                            
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                    PaperProps={{
                                        style: {
                                          backgroundColor: '#003049',
                                          color:'black',
                                          'border-radius':'40px',
                                          height: 350,
                                          color: '#eae2b7'
                                        },
                                      }}
                                >
                                    <DialogTitle id="alert-dialog-title" style={{'font-family':'Poiret One', 'font-size':'33px'}}>
                                    {"Submission Approval"}
                                    </DialogTitle>
                                    <DialogContent>
                                    <DialogContentText id="alert-dialog-description" style={{'font-family':'roboto', 'color':'#eae2b7'}}>
                                       By clicking approve, you are adding this submission for all users to see. If you'd like to continue editing, click "not yet".
                                    </DialogContentText>
                                    <br/>
                                    <DialogContentText style={{'font-family':'roboto', 'color':'#eae2b7'}}>
                                    Clicking "Approve" will also return you to the Submissions page.
                                    </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button variant='contained' style={{'background-color':'#d62828', 'font-family':'roboto', 'border-radius':'20px', 'margin-right':'5px'}} onClick={handleClose}>Not yet</Button>
                                    <Button variant='contained' style={{'background-color':'#f77f00', 'font-family':'roboto', 'border-radius':'20px', 'margin-right':'20px'}} onClick={approvePost} autoFocus>
                                        Approve!
                                    </Button>
                                    </DialogActions>
                                    <br/>
                                </Dialog>
                                </div>
                              {/* NUMBER OF ACTORS */}
                              </CardContent>
                      {/* ACTIVITY DESCRIPTION */}
                      <CardContent>
                      <Typography variant="h4" style={{'color':'#eae2b7', 'font-weight':'250', 'font-size':'20px'}}>{oneActivityReducer.description}</Typography>
                          {/* MOVIE GENRE */}
                          <div>
                          <Typography style={{'color':'#eae2b7', 'font-weight':'450', 'font-size':'17px', 'padding-top':'30px'}}>TAGS:</Typography>
                              {tag.map(tag => {
                                  return (
                                          <div className="detailstag">
                                             <flexBox style={{'color':'##061e2a', 'font-weight':'500', 'font-size':'15px', 'background-color':'#f77f00', 'border-radius':9, 'min-height': '20px', 'min-width': 'auto', 'padding-left': '10px', 'padding-right': '10px', 'padding-top':'3px', 'padding-bottom':'3px'}}>{tag.name}</flexBox>
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