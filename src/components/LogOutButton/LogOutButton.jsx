import React from 'react';
import { useDispatch } from 'react-redux';
// MATERIAL UI IMPORTS
import LogoutIcon from '@mui/icons-material/Logout';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

function LogOutButton(props) {
  const dispatch = useDispatch();
  return (
    <LogoutIcon
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className={props.className}
      onClick={() => dispatch({ type: 'LOGOUT' })}
    >
      Log Out
    </LogoutIcon>
  );
}

export default LogOutButton;
