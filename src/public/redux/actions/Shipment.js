import axios from 'axios';

const config = {
  headers: {
    'content-type': 'application/json',
  },
};

export const fetchCost = (url, data) => ({
  type: 'FETCH_COST',
  payload: axios.post(url, data, config),
});
