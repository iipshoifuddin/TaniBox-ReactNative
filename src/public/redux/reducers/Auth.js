const initialState = {
  auth: [],
  message: [],
  isLoading: false,
  isError: false,
  isEmpty: false,
};

const Auth = (state = initialState, action) => {
  switch (action.type) {
    // loading
    case 'SIGN_IN_PENDING':
    case 'SIGN_UP_PENDING':
      return {
        ...state, // collect all previous state
        isError: false,
        isLoading: true,
      };

    // gagal
    case 'SIGN_IN_REJECTED':
    case 'SIGN_UP_REJECTED':
      return {
        ...state,
        message: [],
        isLoading: false,
        isError: true,
        isEmpty: true,
      };

    // berhasil
    case 'SIGN_UP_FULFILLED':
      console.log('masuk login fulfilled');
      return {
        state,
        isLoading: false,
        isError: false,
        isEmpty: false,
      };

    case 'SIGN_IN_FULFILLED':
      console.log('masuk add fulfilled');
      return {
        ...state,
        isLoading: false,
        isError: false,
        isEmpty: false,
        auth: [],
        added: true,
      };

    default:
      return state;
  }
};

export default Auth;
