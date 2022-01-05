import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Link, useHistory, useNavigate } from 'react-router-dom';

//MATERIAL UI IMPORT
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import TextField from '@material-ui/core/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InfoIcon from '@mui/icons-material/Info';
import LogOutButton from '../LogOutButton/LogOutButton';
import LogoutIcon from '@mui/icons-material/Logout';
import StarIcon from '@mui/icons-material/Star';
import NoteAltIcon from '@mui/icons-material/NoteAlt';


// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function BottomNavBar(props) {
// Using hooks we're creating local state for a "heading" variable with
// a default value of 'Functional Component'
// FIXED NAV BAR
const [value, setValue] = React.useState(0);
//END FIXED NAV BAR 

const dispatch = useDispatch();

const user = useSelector((store) => store.user);

return (
<div>
<div>
    <Box>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, width: 'auto'}} elevation={6}> 
            {/* Previously, the width was 415px */}
            <BottomNavigation
                showlabels
                style={{'background-color': '#eae2b7'}}
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
            >
            {/* Link HOME ICON to homepage page */}
                <Link to="/home">
                <BottomNavigationAction label="Home" size="large" icon={<HomeIcon style={{'color':'#003049', 'font-size':'30px'}}/>} />
                </Link>

            <div>
                {/* If no user is logged in, show these links */}
                {user.id === null &&
                // If there's no user, show login/registration links
                <Link className="navLink" to="/login">
                    Login / Register
                </Link>
                }

                {/* If no user is logged in, show these links */}
                {user.access_level === 10 &&
                // If there's no user, show login/registration links
                <Link to="/submissionscontrol">
                <BottomNavigationAction label="Home" size="large" icon={<NoteAltIcon style={{'color':'#003049', 'font-size':'30px'}}/>} />  
                </Link>



                }

                {/* If a user is logged in, show these links */}
                {user.id && (
                <>
                {/* <Link className="navLink" to="/user">
                Home
                </Link> */}

                <Link to="/newsubmit">
                <BottomNavigationAction label="Home" size="large" icon={<AddCircleIcon style={{'color':'#003049', 'font-size':'30px'}}/>} />
                </Link>

                <Link to="/favorites">
                <BottomNavigationAction label="Home" size="large" icon={<StarIcon style={{'color':'#003049', 'font-size':'30px'}}/>} />
                </Link>

                {/* <Link className="navLink" to="/results">
                
                Results Page
                </Link> */}
                
                {/* THE CODE BELOW IS NOW USED IN THE TOP NAV BAR INSTEAD */}
                {/* <BottomNavigationAction label="LogOut" size="large" onClick={() => dispatch({ type: 'LOGOUT' })} icon={<LogoutIcon style={{'color':'#003049', 'font-size':'30px'}}/>}/> */}
                </>
                )}

                <Link to="/aboutw">
                <BottomNavigationAction label="Home" size="large" icon={<InfoIcon style={{'color':'#003049', 'font-size':'30px'}}/>} />
                {/* About */}
                </Link>
    
            </div>
            </BottomNavigation>
        </Paper>
    </Box>
</div>
</div>
);
}

export default BottomNavBar;
