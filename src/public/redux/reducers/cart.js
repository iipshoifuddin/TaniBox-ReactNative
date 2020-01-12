const initialState = {
  cart: [],
  isLoading: false,
  isError: false,
  isEmpty: false,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    // loading
    case 'FETCH_CART_PENDING':
      return {
        ...state, // collect all previous state
        isError: false,
        isLoading: true,
      };

    // gagal
    case 'FETCH_CART_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        isEmpty: true,
      };

    // berhasil
    case 'FETCH_CART_FULFILLED':
      console.warn('masuk fulfilled');
      return {
        ...state,
        isLoading: false,
        isError: false,
        isEmpty: true,
        cart: [...action.payload.data.data],
        forbidden: true,
      };
    default:
      return state;
  }
};

export default cart;
