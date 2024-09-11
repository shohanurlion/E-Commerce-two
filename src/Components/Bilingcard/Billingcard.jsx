import React from 'react'
import Container from '../Container'
import { RxCross2 } from "react-icons/rx";
import billingimg from '../../assets/2_grande 5.png'
import { FiMinus,FiPlus  } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { productdecrement, productIncrement, productremove } from '../Slice/ProductSlice';


const Billingcard = () => {
  const dispatch =useDispatch()
  const cartInfo = useSelector((state)=>state.product.cartitem)
 const {totalPrice , totalQuntity}=cartInfo.reduce((acc, item)=>{
  acc.totalPrice += Math.ceil(item.price * item.qun)
  acc.totalQuntity += item.qun
  return acc
 },{totalPrice:0 , totalQuntity:0})
  
  return (
   <>
   <Container>
    <div className=''>
        <h3 className='text-[24px] font-bold'>Cart</h3>
        <p>Home &gt; Cart</p>
    </div>

    <div className='w-[100%] border-[#F0F0F0] border-2 my-10'>
      <div className='w-[100%] lg:flex justify-between'>
          <div className='w-[25%]'>
            <h4 className='py-[25px] px-[12px] bg-[#F5F5F3] border-b-2 border-[#F0F0F0]'>Products</h4>
          
          </div>
          <div className='w-[25%]'>
            <h4 className='py-[25px] bg-[#F5F5F3] border-b-2 border-[#F0F0F0]'>Price</h4>
          
          </div>
          <div className='w-[25%]'>
            <h4 className='py-[25px] bg-[#F5F5F3] border-b-2 border-[#F0F0F0]'>Quantity</h4>
          
          </div>
          <div className='w-[25%]'>
            <h4 className='py-[25px] bg-[#F5F5F3] border-b-2 border-[#F0F0F0]'>Total</h4>
          
          </div>
      </div>

      {cartInfo.map((item,i)=>(
   <div className=' w-[100%] flex justify-between'>
   <div className=' w-[25%] flex items-center py-10 px-3'>
           <div className='mr-2'>
            <button onClick={()=>dispatch(productremove(i))}>
            <RxCross2 />
            </button>
           </div>
           <div className='flex items-center gap-x-7 '>
             <div className='w-[100px] h-[100px]'>
               <img src={item.thumbnail} alt='billimg' className='w-full'/>
             </div>
             <h4>{item.title}</h4>
           </div>
         </div>
         <div className=' w-[25%] mt-10 py-10'>
           <h3>${item.price}</h3>
         </div>
         <div className='w-[25%]'>
         <div className=' w-[139px] h-[36px] border border-[black] px-2 py-3 flex items-center justify-center mt-20'>
           <div className='flex items-center gap-x-4 '>
            <div className=''>
              <button onClick={()=>dispatch(productdecrement(i))}>
              <FiMinus />
              </button>
            </div>
          <p>{item.qun}</p>
          <div>
            <button onClick={()=>dispatch(productIncrement(i))}>
            <FiPlus />
            </button>
          </div>
           </div>
         </div>
         </div>
      
         <div className='w-[25%] mt-10 py-10'>
           <h3>${Math.ceil(item.price * item.qun)}</h3>
         </div>
   </div>
      ))}
   



      <div className='flex px-4 border-t-2 border-[#F0F0F0] py-10'>
        <div className='w-[50%] flex items-center gap-x-6'>
            <div className=''>
              <select className='border-2 border-[#F0F0F0] py-2 px-8'>
                <option>size</option>
                <option>size</option>
                <option>size</option>
              </select>
            </div>
            <h3 className='text-[14px] font-bold'>Apply coupon</h3>
        </div>
        <div className='w-[50%] flex justify-end'>
          <h3 className='text-[14px] font-bold'>Update cart</h3>
        </div>
      </div>

    </div>
    <div className='flex justify-center md:flex md:justify-end pb-10'>
    <div className='w-[50%]'>
      <div className='flex justify-end my-6 text-[20px] font-bold'>
        <h3>Cart totals</h3>
      </div>
      <div className='flex'>
        <div className='w-[100%] border-2 border-[#F0F0F0] px-3 py-3'>
          <h3>Quantity</h3>
        </div>
        <div className='w-[100%] border-2 border-[#F0F0F0] px-3 py-4'>
          <h3>{totalQuntity}</h3>
        </div>
      </div>
      <div className='flex'>
        <div className='w-[100%] border-2 border-[#F0F0F0] px-3 py-4'>
          <h3>Total</h3>
        </div>
        <div className='w-[100%] border-2 border-[#F0F0F0] px-3 py-4'>
          <h3>$ {totalPrice}</h3>
        </div>
      </div>
      <div className='flex justify-end my-6'>
        <button className='py-3 px-3 border-2 border-[#F0F0F0] duration-700 ease-in-out cursor-pointer hover:bg-[black] hover:text-[white]'>Proceed to Checkout</button>
      </div>
    </div>
    </div>
   
    
   </Container>
   </>
  )
}

export default Billingcard