import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
//MATERIAL UI IMPORTS
import Button from '@mui/material/Button';

function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <LoginForm />

      <center>
        <Button
          type="button"
          type="submit" variant="contained" size="medium"
          style={{padding: '10px 30px', 'border-radius': '50px', 'font-size':'1.2rem', 'background-color':'#fcbf49'}}
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </Button>
      </center>
    </div>
  );
}

export default LoginPage;
