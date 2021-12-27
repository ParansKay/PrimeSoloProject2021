import React, { useState } from 'react';
import {useSelector} from 'react-redux';
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

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function BottomNavBar(props) {
// Using hooks we're creating local state for a "heading" variable with
// a default value of 'Functional Component'
// FIXED NAV BAR
const [value, setValue] = React.useState(0);
//END FIXED NAV BAR 

const user = useSelector((store) => store.user);

return (
<div>
<div>
    <Box>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, width: '410px'}} elevation={6}>
            <BottomNavigation
                showlabels
                style={{'background-color': '#eae2b7'}}
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
            >
            {/* Link HOME ICON to MovieList page */}
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

                {/* If a user is logged in, show these links */}
                {user.id && (
                <>
                <Link className="navLink" to="/user">
                Home
                </Link>

                <Link className="navLink" to="/favorites">
                Favorites Page
                </Link>

                <Link className="navLink" to="/results">
                Results Page
                </Link>

                <LogOutButton className="navLink" icon={<InfoIcon style={{'color':'#003049', 'font-size':'30px'}}/>}/>
                </>
                )}


                <Link to="/about">
                <BottomNavigationAction label="Home" size="large" icon={<InfoIcon style={{'color':'#003049', 'font-size':'30px'}}/>} />
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