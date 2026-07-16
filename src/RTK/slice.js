import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    value: 0
}

const addToCart = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state)=>{
            state.value +=1 ;
        },
        removeItem:(state)=>{
            if(state.value >= 1) {
                state.value -= 1
            }},
        clearCart:(state)=>{
            if(state.value >= 1){
                state.value = 0
            }
        }
        
    }
})

export const {addItem,removeItem,clearCart} = addToCart.actions

export default addToCart.reducer