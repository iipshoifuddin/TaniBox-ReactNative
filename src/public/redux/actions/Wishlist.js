import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {API_ENDPOINT} from 'react-native-dotenv';
let token = '';
AsyncStorage.getItem('token', value => {
  token = value;
});
const config = {
  headers: {
    'content-type': 'application/json',
    Authorization: 'Bearer ' + token,
  },
};

export const fetchWishlist = user_id => ({
  type: 'WISHLIST_FETCH',
  payload: axios.get(`${API_ENDPOINT}products/wishlist/${user_id}`, config),
});

export const fetchWishlistAll = (user_id, configs) => ({
  type: 'WISHLIST_FETCH',
  payload: axios.get(`${API_ENDPOINT}products/wishlist`, user_id, configs),
});

export const addWishlist = formData => ({
  type: 'WISHLIST_ADD',
  payload: axios.post(`${API_ENDPOINT}products/wishlist`, formData, config),
});

export const deleteWishlist = async (product_id, user_id, configs) => ({
  type: 'WISHLIST_DELETE',
  payload: axios.delete(
    `${API_ENDPOINT}products/${product_id}/${user_id}/delete-wishlist`,
    configs,
  ),
});
