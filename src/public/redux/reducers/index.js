import {combineReducers} from 'redux';

// import all reducer
import auth from './Auth';
import product from './Product';

const rootReducer = combineReducers({
  auth,
  product,
});

export default rootReducer;
