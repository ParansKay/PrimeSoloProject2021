import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import ResultsPage from '../ResultsPage/ResultsPage';
import DetailsPage from '../DetailsPage/DetailsPage';
import FaveDetails from '../FaveDetails/FaveDetails';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import ActivityPage from '../ActivityPage/ActivityPage';
import NewActivitySubmit from '../NewActivitySubmit/NewActivitySubmit';
import SubmissionsControl from '../SubmissionsControl/SubmissionsControl';
import SubmissionDetail from '../SubmissionDetail/SubmissionDetail';
import EditPage from '../EditPage/EditPage';
import EditPageExisting from '../EditPageExisting/EditPageExisting';
import BottomNavBar from '../BottomNavBar/BottomNavBar';




import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        {/* this used to be <Nav/> */}
        <Nav/>
        <BottomNavBar /> 
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          
          {/* DO NOT DELETE YET */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>
          {/* END OF DO NOT DELETE */}

           {/* <Route
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </Route> */}
          <ProtectedRoute 
          
            exact
            path="/favedetails"
            >
            <FaveDetails/>

          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/submissionscontrol"
            >
            <SubmissionsControl/>
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/submissiondetail"
            >
            <SubmissionDetail/>
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/editpage"
            >
            <EditPage/>
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/editpageexisting"
            >
            <EditPageExisting/>
          </ProtectedRoute>


          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/details"
          >
            <DetailsPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/newsubmit"
          >
            <NewActivitySubmit />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/results"
          >
            <ResultsPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/allactivity"
          >
            <ActivityPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows FavoritesPage else shows LoginPage (need to change this)
            exact
            path="/favorites"
          >
            <FavoritesPage/>
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

            {/* DO NOT DELETE! ____________________________*/}
          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>
            {/* END DO NOT DELETE -_______________________------ */}
{/* 

            <Route
            exact
            path="/home"
          >
              <UserPage />
            
          </Route> */}

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
