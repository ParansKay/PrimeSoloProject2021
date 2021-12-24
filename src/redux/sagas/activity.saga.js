import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* activitySaga() {
    yield takeLatest('FETCH_ACTIVITY', fetchActivity);
    yield takeLatest('ADD_ACTIVITY', postNewActivity);
    yield takeLatest ('FETCH_SUBMISSIONS', fetchSubmissions);
    yield takeLatest ('EDIT_ACTIVITY', editActivity);
    yield takeLatest ('ADD_CLEARANCE', addClearanceLevel);
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

  function* editActivity(action){
    console.log('in EDIT_ACTIVITY----!');
    try {
      const response = yield axios.put(`/api/activity/edit?id=${action.payload.activity_id}`, {title: action.payload.title, description: action.payload.description, actors: action.payload.actors, tag_id: action.payload.tags});
      console.log( 'response is------>', response.data );
      yield put({ 
          type: 'SET_ACTIVITY', 
          payload: response.data });
    } catch (error) {
      console.log('User get request failed', error);
    }
  }

  function* addClearanceLevel(action){
    console.log('in ADD_CLEARANCE----!');
    try {
      const response = yield axios.put(`/api/activity?id=${action.payload.activity_id}`, {clearance_level: action.payload.clearance});
      console.log( 'response is------>', response.data );
      yield put({ 
          type: 'SET_ACTIVITY', 
          payload: response.data });
    } catch (error) {
      console.log('User get request failed', error);
    }
  }

  function* fetchSubmissions() {
    console.log('in FETCH_SUBMISSIONS----!');
  try {
    const response = yield axios.get('/api/submissions');
    console.log( 'response is------>', response.data );
    yield put({ 
        type: 'SET_ACTIVITY', 
        payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

  function* postNewActivity(action){
    console.log('in ADD_ACTIVITY----!');
    try {
      console.log('action.payload is------>', action.payload);
      const newActivity = yield axios.post(`/api/activity`, {title: action.payload.title, description: action.payload.description, actors: action.payload.actors, tag_id: action.payload.tags });
      //  const newActivity = yield axios({
      //                         method: 'POST', //method is POST
      //                         url: '/api/activity/', //post this information to our favorites API (favorites table)
      //                         data: action.payload}); //payload from the dispatch (meaning activity id and user id)
       console.log('adding new activity to favorite:', newActivity.data);
       yield put({  
           //once that is done, update FETCH_FAVORITES to append the most up-to-date info to the DOM
           type: 'FETCH_ACTIVITY'});
   } catch (err){
       console.log('error adding new activity', err );
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