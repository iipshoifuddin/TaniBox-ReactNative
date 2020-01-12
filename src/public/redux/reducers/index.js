import {combineReducers} from 'redux';

// import all reducer
import auth from './Auth';
import cart from './cart';

const rootReducer = combineReducers({
  auth,
  cart,
});

export default rootReducer;
