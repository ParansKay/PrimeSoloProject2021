import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import activity from './activity.reducer';
import tag from './tag.reducer';
import oneActivityReducer from './oneActivityReducer';
import search from './search.reducer';
import favorite from './favorite.reducer';
import singleFaveReducer from './singleFave.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  activity,
  errors, // contains registrationMessage and loginMessage
  favorite,
  oneActivityReducer,
  search,
  singleFaveReducer,
  tag,
  user, // will have an id and username if someone is logged in
});

export default rootReducer;
