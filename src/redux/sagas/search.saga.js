import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* searchSaga() {
    yield takeLatest('FETCH_SEARCH', fetchSearch);
  }

  function* fetchSearch(action) {
      console.log('in FETCH_SEARCH----!');
    try {
      const response = yield axios.get(`/api/search?id=${action.payload}`);
      console.log( 'fetch SEARCH response is------>', response.data );
      yield put({ 
          type: 'SET_SEARCH', 
          payload: response.data });
    } catch (error) {
      console.log('search get request failed', error);
    }
  }


export default searchSaga;

// function* fetchWidget() {
//     try {
//       const response = yield axios.get('/api/widget');
//       yield put({ type: 'SET_WIDGETS', payload: response.data });
//     } catch (error) {
//       console.log('Widget get request failed', error);
//     }
//   }
