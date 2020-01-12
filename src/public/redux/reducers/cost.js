const initialState = {
  cost: [],
  totalAmount: 0,
  isLoading: false,
  isError: false,
  isEmpty: false,
};

const cost = (state = initialState, action) => {
  switch (action.type) {
    // loading
    case 'FETCH_COST_PENDING':
      return {
        ...state, // collect all previous state
        isError: false,
        isLoading: true,
      };

    // gagal
    case 'FETCH_COST_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        isEmpty: true,
      };

    // berhasil
    case 'FETCH_COST_FULFILLED':
      console.warn(action.payload.data.data);
      return {
        ...state,
        isLoading: false,
        isError: false,
        isEmpty: true,
        cost: [...action.payload.data.data],
      };

    default:
      return state;
  }
};

export default cost;
