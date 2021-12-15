import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* activitySaga() {
    yield takeLatest('FETCH_ACTIVITY', fetchActivity);
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


export default activitySaga;

// function* fetchWidget() {
//     try {
//       const response = yield axios.get('/api/widget');
//       yield put({ type: 'SET_WIDGETS', payload: response.data });
//     } catch (error) {
//       console.log('Widget get request failed', error);
//     }
//   }