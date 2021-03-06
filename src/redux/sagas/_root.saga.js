import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import activitySaga from './activity.saga';
import tagSaga from './tag.saga';
import searchSaga from './search.saga';
import favoriteSaga from './favorite.saga';
import likePost from './likePost.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    activitySaga(),
    favoriteSaga(),
    likePost(),
    loginSaga(), // login saga is now registered
    registrationSaga(),
    searchSaga(),
    tagSaga(),
    userSaga(),
  ]);
}
