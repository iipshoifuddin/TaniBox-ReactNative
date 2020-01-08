import {combineReducers} from 'redux';

// import all reducer
import auth from './Auth';

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;
