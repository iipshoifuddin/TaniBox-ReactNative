const initialState = {
  cart: [],
  totalAmount: 0,
  isLoading: false,
  isError: false,
  isEmpty: false,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    // loading
    case 'FETCH_CART_PENDING':
    case 'ADD_QTY_PENDING':
      return {
        ...state, // collect all previous state
        isError: false,
        isLoading: true,
      };

    // gagal
    case 'FETCH_CART_REJECTED':
    case 'ADD_QTY_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        isEmpty: true,
      };

    // berhasil
    case 'FETCH_CART_FULFILLED':
      console.warn(action.payload.data.data);
      let amountLoop = 0;
      for (let val of action.payload.data.data) {
        amountLoop += val.total;
      }
      for (let val of action.payload.data.data) {
        val.totalAmount = amountLoop;
      }
      return {
        ...state,
        isLoading: false,
        isError: false,
        isEmpty: true,
        cart: [...action.payload.data.data],
        totalAmount: amountLoop,
      };

    case 'ADD_QTY_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: 'success',
      };

    default:
      return state;
  }
};

export default cart;
