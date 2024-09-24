
import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
   Route,
  RouterProvider,
} from "react-router-dom";
import Leyout from './Components/root/Leyout';
import Home from './Home';
import Shoping from './Components/Shoping/Shoping';
import Productditail from './Components/ProductDitaill/Productditail';
import Billingcard from './Components/Bilingcard/Billingcard';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Checkout from './Components/Checkout/Checkout';
import Loging from './Loging/Loging';
import Signup from './Components/Signup/Signup';
import Account from './Components/Account/Account';
import Selectwish from './Allwishlist/Selectwish';






function App() {
 const router = createBrowserRouter( createRoutesFromElements(
  <Route element={<Leyout/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='shop' element={<Shoping/>}/>
    <Route path='/shop/:id' element={<Productditail/>}/>
    <Route path='/bilingcard' element={<Billingcard/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
    <Route path='/login' element={<Loging/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/account' element={<Account/>}/>
    <Route path='/wishlist' element={<Selectwish/>}/>
  </Route>
 ))   

  return (
  <RouterProvider router={router}/>
   
  )
}

export default App
