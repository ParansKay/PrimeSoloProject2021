import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* favoriteSaga() {
    yield takeLatest('SET_LIKE', postLike); //if the dispatch call is SET_LIKE, run the postLike function
    yield takeLatest('DELETE_LIKE', deleteLike) //if the dispatch call is DELETE_LIKE, run the postLike function
  }

function* postLike(action){
    // post new activity/user information to the Favorites table in our database
    try {
    console.log('action.payload is------>', action.payload);
     const like = yield axios({
                            method: 'POST', //method is POST
                            url: '/api/favorite/', //post this information to our favorites API (favorites table)
                            data: action.payload}); //payload from the dispatch (meaning activity id and user id)
     console.log('adding new activity to favorite:', like.data);
     yield put({  
         //once that is done, update FETCH_FAVORITES to append the most up-to-date info to the DOM
         type: 'FETCH_FAVORITE'});
 } catch {
     console.log('error adding new like to favorites');
 } 
 }

 function* deleteLike(action){
    // deleting existing activity/user information from Favorites table in our database
    try {
    console.log('action.payload is------>', action.payload);
     const like = yield axios({
                            method: 'DELETE', //method is DELETE
                            url: '/api/favorite/', //deleting this information from Favorites API (Favorites table)
                            data: action.payload}); //payload from dispatch (meaning activity id and user id)
     console.log('removing activity from favorite:', like.data);
     yield put({ 
         //once that is done, update FETCH_FAVORITES to append the most up-to-date info to the DOM
         type: 'FETCH_FAVORITE'}); 
 } catch {
     console.log('error removing like from favorites');
 } 
 }

 export default favoriteSaga;