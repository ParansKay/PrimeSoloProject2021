import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* tagSaga() {
    yield takeLatest('FETCH_TAG', fetchTag);
  }

  function* fetchTag(action) {
      console.log('in FETCH_TAG----!');
    //   console.log( 'logging all the action', action);
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

export default tagSaga;

// function* fetchWidget() {
//     try {
//       const response = yield axios.get('/api/widget');
//       yield put({ type: 'SET_WIDGETS', payload: response.data });
//     } catch (error) {
//       console.log('Widget get request failed', error);
//     }
//   }