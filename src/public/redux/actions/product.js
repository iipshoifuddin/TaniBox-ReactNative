import axios from 'axios'
import {
    GET_PRODUCT,
    GET_PRODUCTS,
    GET_PRODUCTS_VEGETABLE,
    GET_PRODUCTS_FRUIT,
    PRODUCT_ERROR
} from './types'


export const getProduct = (response) => ({
    type: GET_PRODUCT,
    payload: response.data.data
})

export const getProducts = (response) => ({
    type: GET_PRODUCTS,
    payload: response.data.data
})

export const getProductsVegetable = (response) => ({
    type: GET_PRODUCTS_VEGETABLE,
    payload: response.data.data
})

export const getProductsFruit = (response) => ({
    type: GET_PRODUCTS_FRUIT,
    payload: response.data.data
})
