import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* favoriteSaga() {
    yield takeLatest('FETCH_FAVORITE', fetchFavorite);
    yield takeLatest('FETCH_SINGLE', fetchSingle)
  }

  function* fetchFavorite(action) {
      console.log('in FETCH_FAVORITE----!');
    try {
      const response = yield axios.get(`/api/favorite?id=${action.payload}`);
      console.log( 'fetch FAVORITE response is------>', response.data );
      yield put({ 
          type: 'SET_FAVORITE', 
          payload: response.data });
    } catch (error) {
      console.log('favorite get request failed', error);
    }
  }
  

  function* fetchSingle(action) {
    console.log('in FETCH_SINGLE----!');
    try {
    const response = yield axios.get(`/api/favorite/single?activity_id=${action.payload.activityid}&user_id=${action.payload.userid}`);
      console.log( 'fetch SINGLE_FAVORITE response is------>', response.data );
      yield put({ 
          type: 'SET_SINGLE_FAVORITE', 
          payload: response.data });
    } catch (error) {
      console.log('single_favorite get request failed', error);
    }
  }

  

export default favoriteSaga;