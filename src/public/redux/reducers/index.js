import {combineReducers} from 'redux';

// import all reducer
import auth from './Auth';
<<<<<<< HEAD
import cart from './cart';

const rootReducer = combineReducers({
  auth,
  cart,
=======
import wishlist from './Wishlist';
import product from './Product';
import profile from './profile'

const rootReducer = combineReducers({
  auth,
  wishlist,
  product,
  profile
>>>>>>> master
});

export default rootReducer;
