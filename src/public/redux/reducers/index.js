import {combineReducers} from 'redux';

// import all reducer
import auth from './Auth';
import wishlist from './Wishlist';
import product from './Product';

const rootReducer = combineReducers({
  auth,
  wishlist,
  product
});

export default rootReducer;
