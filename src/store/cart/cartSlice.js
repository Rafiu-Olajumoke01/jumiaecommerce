import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItem: []
};

const cartSlice = createSlice({
    name: "Cart Item",
    initialState: initialState,
    reducers: {
        addItemCart: (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItem.find((product) => product.id === item.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.cartItem.push({ ...item, quantity: 1 });
            }
        },


        removeItemCart: (state, action) => {
            const itemId = action.payload;
            state.cartItem = state.cartItem.filter((product) => product.id !== itemId);
        },

        clearCart: (state) => {
            state.cartItem = [];
        },

        updateQuantityCart: (state, action) => {
            const { itemId, quantity } = action.payload;
            const item = state.cartItem.find((product) => product.id === itemId);
            if (item) {
                item.quantity = quantity;
            }
        },

        checkoutCart: (state) => {
            state.cartItem = [];
        },

        // decrementQuantity

        decrementQuantity: (state, action) => {
            const itemId = action.payload;
            const item = state.cartItem.find((product) => product.id === itemId);
            if (item && item.quantity > 1) {
                item.quantity--;
            }
        },

        // incrementQuantity
        incrementQuantity: (state, action) => {
            const itemId = action.payload;
            const item = state.cartItem.find((product) => product.id === itemId);;
            if (item) {
                item.quantity++;
            }
        },

        // couponcode

        applyCouponCode: (state, action) => {
            const { couponCode } = action.payload;
            state.couponCode = couponCode;
        },

        // removeCouponCode
        removeCouponCode: (state) => {
            state.couponCode = "";
        },

        // apply discount
        applyDiscount: (state, action) => {
            const { discount } = action.payload;
            state.discount = discount;
        },




    }
})

export default cartSlice.reducer;
export const { addItemCart,
    removeItemCart,
    clearCart,
    updateQuantityCart,
    checkoutCart,
    decrementQuantity,
    incrementQuantity,
    applyCouponCode,
    removeCouponCode,
    applyDiscount
} = cartSlice.actions;