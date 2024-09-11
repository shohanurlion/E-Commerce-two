import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
  name: 'products',
  initialState: {
    cartitem: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")): []
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
  }
})

// Action creators are generated for each case reducer function
export const { addToCart, productIncrement,productdecrement,productremove} = ProductSlice.actions

export default ProductSlice.reducer