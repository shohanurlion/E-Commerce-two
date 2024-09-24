import React, { useContext, useState } from 'react'
import { FaHeart, FaCartArrowDown } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, wishListAdd} from '../Slice/ProductSlice';
import { CiHeart } from "react-icons/ci";


const Cart = ({allpage, cateFilter,brnadFilters}) => {
  const dispatch = useDispatch()
  const [heart, setHeart] = useState([]); // Store wishlist items by id

const addTocart=(item)=>{
  dispatch(addToCart({...item, qun:1})) 
}
const heartlist = (item) => {
  if (heart.includes(item.id)) {
    setHeart(heart.filter((id) => id !== item.id)); // Remove from wishlist
  } else {
    setHeart([...heart, item.id]); // Add to wishlist
    dispatch(wishListAdd({ ...item, qun: 1 }));
  }
};


  return (
    <>
    {cateFilter.length > 0 ?
    <div className='flex justify-center md:flex md:justify-between flex-wrap'>
    {cateFilter.map((item)=>(
      <div className='w-[100%] md:w-[40%] lg:w-[32%] relative group cursor-pointer my-8 px-[15px] md:px-0'>
       
        <div>
        <Link to={`/shop/${item.id}`}>
        <div className=''>
          <img src={item.thumbnail} alt='clockimg' className='w-full' />
        </div>
        </Link>
        <div className=' absolute bottom-0 left-0 w-full h-0 overflow-hidden group-hover:h-[280px] duration-700 ease-in-out'>
        <div className='flex justify-end'>
          <div className='py-5 px-3'>
          <div onClick={() => heartlist(item)} className='flex items-center gap-3 py-3 hover:text-[red] duration-1000 ease-in-out'>
              <h5>Add to Wish List</h5>
              {heart.includes(item.id) ?  <FaHeart /> : <CiHeart />}
            </div>
            <div className='flex justify-end py-3 hover:text-[red] duration-1000 ease-in-out'>
              <VscDebugRestart />
            </div>
            <div  onClick={()=>addTocart(item)}  className='flex items-center justify-end gap-3 py-3 hover:text-[red] duration-1000 ease-in-out'>
              <h5>Add to Cart</h5>
              <FaCartArrowDown />
            </div>
          </div>
        </div>
        </div>
        
        <div className='flex justify-between py-8 px-4 bg-[black] text-white z-auto'>
          <div>
            <h4 className='pb-2'>{item.title}</h4>
            <p>Category:{item.category}</p>
          </div>
          <div>
            <p>Price:${item.price}</p>
          </div>
        </div>
        </div>
      
      
        
      </div>
    ))}
    </div>:   <div className='flex justify-center md:flex md:justify-between flex-wrap'>
    {allpage.map((item)=>(
      <div className='w-[100%] md:w-[40%] lg:w-[32%] relative group cursor-pointer my-8 px-[15px] md:px-0'>
        
        <div>
        <Link to={`/shop/${item.id}`}>
        <div className=''>
          <img src={item.thumbnail} alt='clockimg' className='w-full' />
        </div>
        </Link>
        <div className=' absolute bottom-0 left-0 w-full h-0 overflow-hidden group-hover:h-[280px] duration-700 ease-in-out'>
        <div className='flex justify-end'>
          <div className='py-5 px-3'>
            <div onClick={() => heartlist(item)} className='flex items-center gap-3 py-3 hover:text-[red] duration-1000 ease-in-out'>
              <h5>Add to Wish List</h5>
              {heart.includes(item.id) ?  <FaHeart /> : <CiHeart />}
            </div>
            <div className='flex justify-end py-3 hover:text-[red] duration-1000 ease-in-out'>
              <VscDebugRestart />
            </div>
            <div onClick={()=>addTocart(item)} className='flex items-center justify-end gap-3 py-3 hover:text-[red] duration-1000 ease-in-out'>
              <h5>Add to Cart</h5>
              <FaCartArrowDown />
            </div>
          </div>
        </div>
        </div>
        
        <div className='flex justify-between py-8 px-4 bg-[black] text-white z-auto'>
          <div>
            <h4 className='pb-2'>{item.title}</h4>
            <p>Category:{item.category}</p>
          </div>
          <div>
            <p>Price:${item.price}</p>
          </div>
        </div>
        </div>
    
      
        
      </div>
    ))}
    </div>
    }
  
      
    </>
  )
}

export default Cart