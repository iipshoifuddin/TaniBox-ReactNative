import axios from 'axios';

const config = {
  headers: {
    'content-type': 'application/json',
  },
};

export const fetchCart = url => ({
  type: 'FETCH_CART',
  payload: axios.get(url, config),
});

export const addQty = (url, data) => ({
  type: 'ADD_QTY',
  payload: axios.patch(url, data, config),
});
