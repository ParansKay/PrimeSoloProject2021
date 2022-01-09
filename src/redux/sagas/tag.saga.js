import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* tagSaga() {
    yield takeLatest('FETCH_TAG', fetchTag);
    // yield takeLatest('FETCH_ACTIVITY_TAG', fetchActivityTag)
  }

  function* fetchTag(action) {
      console.log('in FETCH_TAG----!');
    try {
      const tag = yield axios.get(`/api/tag?id=${action.payload}`);
      console.log( 'grabbing all the tags:', tag.data );
      
      yield put({ 
          type: 'SET_TAG', 
          payload: tag.data });
    } catch (error) {
      console.log('TAG get request failed', error);
    }
  }

  // function* fetchActivityTag(action){
  //   console.log('in FETCH_ACTIVITY_TAG----!');
  //   try {
  //     const tag = yield axios.get(`/api/tag/activitytags?id=${action.payload}`);
  //     console.log( 'grabbing all the tags:', tag.data );
      
  //     yield put({ 
  //         type: 'SET_TAG', 
  //         payload: tag.data });
  //   } catch (error) {
  //     console.log('TAG get request failed', error);
  //   }
  // }

export default tagSaga;

// function* fetchWidget() {
//     try {
//       const response = yield axios.get('/api/widget');
//       yield put({ type: 'SET_WIDGETS', payload: response.data });
//     } catch (error) {
//       console.log('Widget get request failed', error);
//     }
//   }