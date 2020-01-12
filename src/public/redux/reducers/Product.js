import {
  GET_PRODUCT,
  GET_PRODUCTS,
  GET_PRODUCTS_VEGETABLE,
  GET_PRODUCTS_FRUIT,
} from '../actions/types';

const initialState = {
  productsVegetable: [],
  productsFruit: [],
  products: [],
  product: {},
  loading: true,
};

const Product = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_VEGETABLE:
      return {
        ...state,
        productsVegetable: action.payload,
        loading: false,
      };
      break;
    case GET_PRODUCTS_FRUIT:
      return {
        ...state,
        productsFruit: action.payload,
        loading: false,
      };
      break;
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
      break;
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };
      break;
    default:
      return state;
  }
};

export default Product;
