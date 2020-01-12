import {combineReducers} from 'redux';

// import all reducer
import auth from './Auth';
import wishlist from './Wishlist';
import product from './Product';
import profile from './profile'

const rootReducer = combineReducers({
  auth,
  wishlist,
  product,
  profile
});

export default rootReducer;
