import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
  name: 'products',
  initialState: {
    cartitem: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")): [],
    wishitem: localStorage.getItem("wish") ? JSON.parse(localStorage.getItem("wish")): []
  },
  reducers: {
    addToCart: (state,action) => {
      const findProduct = state.cartitem.findIndex((item)=>item.id == action.payload.id)
      if(findProduct !== -1){
          state.cartitem[findProduct].qun += 1
          localStorage.setItem("cart", JSON.stringify(state.cartitem))
      }else{
          state.cartitem = [...state.cartitem, action.payload]
          localStorage.setItem("cart", JSON.stringify(state.cartitem))
      }
      
     
    },
    productIncrement:(state, action)=>{
        state.cartitem[action.payload].qun += 1
        localStorage.setItem("cart", JSON.stringify(state.cartitem))
    },
    productdecrement:(state, action)=>{
      if(state.cartitem[action.payload].qun > 1){
        state.cartitem[action.payload].qun -= 1
        localStorage.setItem("cart", JSON.stringify(state.cartitem))
      }
  
    },
  
    productremove:(state, action)=>{
      state.cartitem.splice(action.payload, 1)
      localStorage.setItem("cart", JSON.stringify(state.cartitem))
    },
    wishListAdd: (state, action) => {
      // Find the product in the wishitem array instead of cartitem
      const wishlistProductIndex = state.wishitem.findIndex((item) => item.id === action.payload.id);
    
      // If the product exists, increment the quantity (if applicable)
      if (wishlistProductIndex !== -1) {
        state.wishitem[wishlistProductIndex].qun += 1; 
        localStorage.setItem("wish", JSON.stringify(state.wishitem));
      } else {
        // If the product doesn't exist, add it to the wishlist
        state.wishitem = [...state.wishitem, action.payload];
        localStorage.setItem("wish", JSON.stringify(state.wishitem));
      }
    },
    
    wishLiestremove:(state, action)=>{
      state.wishitem.splice(action.payload, 1)
      localStorage.setItem("wish", JSON.stringify(state.wishitem))
    }
  
  }
})

// Action creators are generated for each case reducer function
export const { addToCart, productIncrement,productdecrement,productremove,wishListAdd,wishLiestremove} = ProductSlice.actions

export default ProductSlice.reducer