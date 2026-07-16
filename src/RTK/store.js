import { configureStore } from "@reduxjs/toolkit";
import createReducer from './slice'

const  store = configureStore({
    reducer: {
        cart : createReducer
    }
})

export default store
