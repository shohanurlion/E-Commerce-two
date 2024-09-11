import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './Components/Slice/ProductSlice'

export default configureStore({
  reducer: {
    product:ProductSlice
  }
})