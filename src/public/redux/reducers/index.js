import {combineReducers} from 'redux';

// import all reducer
import auth from './Auth';

import wishlist from './Wishlist';
import product from './Product';
import profile from './profile';
import cart from './cart';
import cost from './cost';

const rootReducer = combineReducers({
  auth,
  wishlist,
  product,
  profile,
  cart,
  cost,
});

export default rootReducer;
