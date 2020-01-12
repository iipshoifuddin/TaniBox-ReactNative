import axios from 'axios';

const config = {
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
  },
};

export const fetchCart = url => ({
  type: 'FETCH_CART',
  payload: axios.post(url, config),
});
