import { createSlice } from "@reduxjs/toolkit"
import productsData from "../Pages/Products/productsData"
import { toast } from 'react-toastify'


// const saveCartStateToLocalStorage = (state) => {
//     localStorage.setItem("cartState", JSON.stringify(state));
// };

// const loadCartStateFromLocalStorage = () => {
//     const savedState = localStorage.getItem("cartState");
//     if (savedState) {
//       return JSON.parse(savedState);
//     }
//     return {
//       cartItems: [],
//       products: productsData,
//       totalQuantity: null,
//       totalPrice: null,
//     }
// }    

// const initialState = loadCartStateFromLocalStorage();


const initialState = {
    cartItems: [],
    products: productsData,
    totalQuantity: null,
    totalPrice: null
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload
            const existingItemIndex = state.cartItems.findIndex(
                (item) => item.id === newItem.id
            )
            if (existingItemIndex >=0 ) {
                state.cartItems[existingItemIndex].quantity += 1
                // localStorage.setItem('cartItems', JSON(action.payload))
                toast.info("Item Quantity increased")
            } else {
                state.cartItems.push(newItem)
                // state.totalQuantity += newItem.quantity
                // localStorage.setItem('cartItems', JSON(action.payload))
                toast.success("Product added to cart")
            }

        },
        getCartTotal: (state) => {
            let {totalQuantity, totalPrice } = state.cartItems.reduce (
                (cartTotal, cartItem) => {
                    const {price, quantity} = cartItem
                    const itemTotal = price * quantity
                    cartTotal.totalPrice += itemTotal
                    cartTotal.totalQuantity += quantity
                    return cartTotal
                },
                {
                    totalPrice: 0.00,
                    totalQuantity: 0
                }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2))
            state.totalQuantity = totalQuantity
        }, 
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
            // localStorage.removeItem('cartItems', JSON(action.payload))
            toast.warn("Product removed from cart")
        },
        increaseItemQuantity: (state, action) => {
            state.cartItems = state.cartItems.map((item) => {
                if (item.id === action.payload) {
                    const updatedQuantity = item.quantity + 1;
                    if (updatedQuantity <= 10) {
                        toast.info("Quantity increased");
                        // localStorage.setItem('cartItems', JSON(action.payload))
                        return { ...item, quantity: updatedQuantity }
                    } else {
                        toast.error("Maximum quantity reached (10)")
                        return item
                    }
                }
                return item
            })
        },
        decreaseItemQuantity: (state, action) => {
            state.cartItems = state.cartItems.map((item) => {
                if (item.id === action.payload) {
                    if (item.quantity > 1) {
                        toast.warn("Quantity decreased")
                        // localStorage.setItem('cartItems', JSON(action.payload))
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        toast.error("Minimum quantity reached (1)")
                    }
                }
                return item
            })
        }
    }
})

// export const cartMiddleware = (store) => (next) => (action) => {
//     const result = next(action);
//     saveCartStateToLocalStorage(store.getState());

//     return result;
// };

export const {
    addToCart,
    getCartTotal,
    removeItem,
    increaseItemQuantity,
    decreaseItemQuantity 
} = cartSlice.actions

export default cartSlice.reducer