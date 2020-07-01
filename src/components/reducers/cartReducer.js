import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING,LOAD_PRODS, SET_MESSAGE } from '../actions/action-types/cart-actions'


const initState = {
    items: [],
    filter: null,
    addedItems:[],
    total: 0,
    msg:{variant: 'primary', text:'¡Bienvenido!'}
}
const cartReducer= (state = initState,action)=>{

    console.log('INIT cartReducer')
    console.log('state=', state, 'action=', action)
   
    if(action.type === SET_MESSAGE){
        return{
            items: state.items,
            filter: state.filter,
            addedItems: state.addedItems,
            total: state.total,
            msg: action.payload
        }
    }
    //INSIDE HOME COMPONENT
    if(action.type === LOAD_PRODS){
        return{
            items: action.payload.items,
            filter: action.payload.filter,
            addedItems: state.addedItems,
            total: state.total,
            msg: state.msg
        }
    }
    if(action.type === ADD_TO_CART){
        console.log('INIT ADD_TO_CART')
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {  
            addedItem.quantity += 1 
             return{
                items: state.items,
                filter: state.filter,
                addedItems: state.addedItems,
                total: state.total + addedItem.price,
                msg: {variant: 'success', text:'Cantidad de ['+addedItem.title+'] actualizada. Total en carrito:'+addedItem.quantity} 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                items: state.items,
                filter: state.filter,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal,
                msg: {variant: 'success', text:'Se agregó ['+addedItem.title+'] al carrito.'} 
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            items: state.items,
            filter: state.filter,
            addedItems: new_items,
            total: newTotal,
            msg: state.msg
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              items: state.items,
              filter: state.filter,
              addedItems: state.addedItems,
              total: newTotal,
              msg: state.msg
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                items: state.items,
                filter: state.filter,
                addedItems: new_items,
                total: newTotal,
                msg: state.msg
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                items: state.items,
                filter: state.filter,
                addedItems: state.addedItems,
                total: newTotal,
                msg: state.msg
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
                items: state.items,
                filter: state.filter,
                addedItems: state.addedItems,
                total: state.total + 6,
                msg: state.msg
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            items: state.items,
            filter: state.filter,
            addedItems: state.addedItems,
            total: state.total - 6,
            msg: state.msg
        }
  }
    
  
    return state
    
    
}

export default cartReducer
