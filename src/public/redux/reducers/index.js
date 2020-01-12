import {combineReducers} from 'redux';

// import all reducer
import auth from './Auth';
import profile from './profile'

const rootReducer = combineReducers({
  auth,
  profile
});

export default rootReducer;
