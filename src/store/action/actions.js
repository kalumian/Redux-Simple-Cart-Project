import {ADD_TO_CART, DELETE_ALL_CART, REMOVE_FROM_CART} from './types'

// Action Creater
export function addToCart(productsInfo, quantity){
    return{
        type : ADD_TO_CART,
        productsInfo,
        quantity
    }
}
export function removeFromCart(index){
    return{
        type : REMOVE_FROM_CART,
        index,
    }
}
export function deleteAllCart(){
    return{
        type : DELETE_ALL_CART,
    }
}