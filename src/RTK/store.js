import { configureStore } from "@reduxjs/toolkit";
import createReducer from './slice'
import productReducer from './productSlice'

const  store = configureStore({
    reducer: {
        cart : createReducer,
        products: productReducer
    }
})

export default store
