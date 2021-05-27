import { ADD_TO_CART, DELETE_ALL_CART, REMOVE_FROM_CART } from "../action/types"

export  function cartReducer(state, action){
    switch(action.type){
        
        case ADD_TO_CART:{
            return{
                cart:[
                    ...state.cart,
                    {
                        product: action.productsInfo,
                        quantity : action.quantity
                    }
                ]
            }
        }
        case REMOVE_FROM_CART:{
            const new_state = {...state}
            const index = action.index
            delete new_state.cart[index]
            return new_state
        }

        case DELETE_ALL_CART:{
            const new_state = {...state}
             new_state.cart = []
            return new_state
        }
        
        default:
            return state
    }
}