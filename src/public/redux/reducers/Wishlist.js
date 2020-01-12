const initialState = {
  data: [],
  message: '',
  isLoading: false,
  isError: false,
};

const Wishlist = (state = initialState, action) => {
  switch (action.type) {
    // loading
    case 'WISHLIST_FETCH_ALL_PENDING':
    case 'WISHLIST_FETCH_PENDING':
    case 'WISHLIST_ADD_PENDING':
    case 'WISHLIST_DELETE_PENDING':
      return {
        ...state, // collect all previous state
        isError: false,
        isLoading: true,
      };

    // gagal
    case 'WISHLIST_FETCH_ALL_REJECTED':
    case 'WISHLIST_FETCH_REJECTED':
    case 'WISHLIST_ADD_REJECTED':
    case 'WISHLIST_DELETE_REJECTED':
      console.log('failed add/delete wishlist');
      return {
        ...state,
        message: '',
        isLoading: false,
        isError: true,
      };

    case 'WISHLIST_ADD_FULFILLED':
      console.log('success add wishlist');
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'WISHLIST_FETCH_FULFILLED':
      console.log('success get data wishlist');
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'WISHLIST_FETCH_ALL_FULFILLED':
      console.log('success get all data wishlist');
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };

    case 'WISHLIST_DELETE_FULFILLED':
      console.log('success delete wishlist');
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default Wishlist;
