import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* favoriteSaga() {
    yield takeLatest('SET_LIKE', postLike);
    yield takeLatest('DELETE_LIKE', deleteLike)
  }

function* postLike(action){
    // post new movie to the DB
    try {
    console.log('action.payload is------>', action.payload);
     const like = yield axios({
                            method: 'POST',
                            url: '/api/favorite/',
                            data: action.payload});
     console.log('adding new activity to favorite:', like.data);
     yield put({ 
         type: 'FETCH_FAVORITE'});
 } catch {
     console.log('error adding new like to favorites');
 } 
 }

 function* deleteLike(action){
    // post new movie to the DB
    try {
    console.log('action.payload is------>', action.payload);
     const like = yield axios({
                            method: 'DELETE',
                            url: '/api/favorite/',
                            data: action.payload});
     console.log('removing activity from favorite:', like.data);
     yield put({ 
         type: 'FETCH_FAVORITE'});
 } catch {
     console.log('error removing like from favorites');
 } 
 }

 export default favoriteSaga;