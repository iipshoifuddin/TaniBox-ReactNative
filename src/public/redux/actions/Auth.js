import axios from 'axios';

const config = {
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
  },
};

export const signIn = (url, formdata) => ({
  type: 'SIGN_IN',
  payload: axios.post(url, formdata, config),
});

export const signUp = (url, formData) => ({
  type: 'SIGN_UP',
  payload: axios.post(url, formData, config),
});
