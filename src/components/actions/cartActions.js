
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING,LOAD_PRODS} from './action-types/cart-actions'

//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}

//load products cat
export const loadProds=(items,filter)=>{
    console.log('INIT cartActions.loadProds')
    console.log('items=', items, 'filter=', filter)
    return {
        type: LOAD_PRODS,
        payload: {items:items,
                  filter:filter}
    }
}

//change message
export const setMessage =(payload) => {
    return {type:'SET_MESSAGE',
           payload: payload  
    }
}