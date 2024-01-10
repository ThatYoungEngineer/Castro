import { configureStore } from "@reduxjs/toolkit"
import cartReducer from '../slice/cartSlice'
// import { cartMiddleware } from "../slice/cartSlice"

const store = configureStore({
    reducer:{
        cart: cartReducer
    },

    // middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(cartMiddleware),

    devTools: true
})

export default store