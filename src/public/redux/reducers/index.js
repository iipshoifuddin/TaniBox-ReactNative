import {combineReducers} from 'redux';

// import all reducer
import auth from './Auth';
import wishlist from './Wishlist';

const rootReducer = combineReducers({
  auth,
  wishlist,
});

export default rootReducer;
