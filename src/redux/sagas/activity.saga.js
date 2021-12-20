import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* activitySaga() {
    yield takeLatest('FETCH_ACTIVITY', fetchActivity);
    yield takeLatest('ADD_ACTIVITY', postNewActivity);
  }

  function* fetchActivity() {
      console.log('in FETCH_ACTIVITY----!');
    try {
      const response = yield axios.get('/api/activity');
      console.log( 'response is------>', response.data );
      yield put({ 
          type: 'SET_ACTIVITY', 
          payload: response.data });
    } catch (error) {
      console.log('User get request failed', error);
    }
  }

  function* postNewActivity(){
    console.log('in ADD_ACTIVITY----!');
    try {
      console.log('action.payload is------>', action.payload);
       const newActivity = yield axios({
                              method: 'POST', //method is POST
                              url: '/api/activity/', //post this information to our favorites API (favorites table)
                              data: action.payload}); //payload from the dispatch (meaning activity id and user id)
       console.log('adding new activity to favorite:', newActivity.data);
       yield put({  
           //once that is done, update FETCH_FAVORITES to append the most up-to-date info to the DOM
           type: 'FETCH_ACTIVITY'});
   } catch {
       console.log('error adding new like to favorites');
   } 
  }

export default activitySaga;

// function* fetchWidget() {
//     try {
//       const response = yield axios.get('/api/widget');
//       yield put({ type: 'SET_WIDGETS', payload: response.data });
//     } catch (error) {
//       console.log('Widget get request failed', error);
//     }
//   }