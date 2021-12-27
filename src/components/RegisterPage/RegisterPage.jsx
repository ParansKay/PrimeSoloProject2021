import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
//MATERIAL UI IMPORTS
import Button from '@mui/material/Button';

function RegisterPage() {
  const history = useHistory();

  return (
    <div>
      <RegisterForm />

      <center>
        <Button
          type="button"
          type="submit" variant="contained" size="large"
          style={{padding: '18px 40px', 'border-radius': '50px', 'font-size':'1.2rem', 'background-color':'#fcbf49'}}
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </Button>
      </center>
    </div>
  );
}

export default RegisterPage;
