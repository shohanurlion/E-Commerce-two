import React, { useContext, useEffect, useState } from 'react'
import Container from '../../Container'
import { FaBarsStaggered } from "react-icons/fa6";
import { MdSupervisorAccount } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { useRef } from 'react';
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import { productremove } from '../../Slice/ProductSlice';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { ApiData } from '../../ContextApi';

const Hedars = (i) => {
  const data = useContext(ApiData)
  const dispatch = useDispatch()
  const cartinfo = useSelector((state) => state.product.cartitem)
  const [category, setcategory] = useState(false)
  const [searchcange, setsearchchange] = useState("")
  const [searchFilter, setsearchFilter] = useState([])
  const [login, setlogin] = useState(false)
  const [cart, setcart] = useState(false)
  const usenaviget = useNavigate()
  const useRafs = useRef()
  const logRafs = useRef()
  const cartbox = useRef()
  const carstikiref = useRef()


  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (useRafs.current.contains(e.target) == true) {
        setcategory(!category)
      } else {
        setcategory(false)
      }

      if (logRafs.current.contains(e.target) == true) {
        setlogin(!login)
      } else {
        setlogin(false)
      }
      if (cartbox.current.contains(e.target) == true) {
        setcart(!cart)
      } else {
        setcart(false)
      }
      if (carstikiref.current.contains(e.target)) {
        setcart(true)
      }
    });


  }, [category, login, cart])

  const { totalPrice } = cartinfo.reduce((acc, item) => {
    acc.totalPrice += Math.ceil(item.price * item.qun)
    return acc
  }, { totalPrice: 0 })

  const handelsearch = (e) => {
    setsearchchange(e.target.value);
    if (e.target.value === "") {
      setsearchFilter([])
    } else {
      const searchone = data.filter((item) =>
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
      setsearchFilter(searchone);
    }

  };

const handlesearchproduct =(id)=>{
  usenaviget(`/shop/${id}`)
  setsearchFilter([])
  setsearchchange("")
  
}
  return (
    <>
      <div className='py-5 px-2 mt-14'>
        <Container>
          <div className='flex justify-between items-center'>
            <div className='relative'>
              <div ref={useRafs} className='flex items-center gap-x-4 cursor-pointer'>
                <FaBarsStaggered />
                <h4>Shop by Category</h4>
              </div>
              {category && <div className='w-[260px] bg-black absolute top-[46px] text-white z-50'>
                <ul>
                  <li className='py-3 px-4 duration-500 ease-in-out cursor-pointer hover:font-bold hover:ml-2 '><a href=''>Accesories</a></li>
                  <li className='py-3 px-4 duration-500 ease-in-out cursor-pointer hover:font-bold hover:ml-2 '><a href=''>Furniture</a></li>
                  <li className='py-3 px-4 duration-500 ease-in-out cursor-pointer hover:font-bold hover:ml-2 '><a href=''>Electronics</a></li>
                  <li className='py-3 px-4 duration-500 ease-in-out cursor-pointer hover:font-bold hover:ml-2 '><a href=''>Clothes</a></li>
                  <li className='py-3 px-4 duration-500 ease-in-out cursor-pointer hover:font-bold hover:ml-2 '><a href=''>Bags</a></li>
                  <li className='py-3 px-4 duration-500 ease-in-out cursor-pointer hover:font-bold hover:ml-2 '><a href=''>Home appliances</a></li>
                </ul>
              </div>}

            </div>


            <div className='w-2/4 relative'>
              <div className='relative'>
                <input onChange={handelsearch} type='text' placeholder='Search Products...' value={searchcange} className='w-[100%] border py-2 px-2' />
                <div className=' absolute top-[50%] translate-y-[-50%] right-10'>
                  <FaSearch />
                </div>
              </div>
              {searchFilter.length > 0 &&
                <div className=' absolute left-0 top-[44px] w-[500px] h-[400px] overflow-y-scroll z-50 '>
                  {searchFilter.map((item) => (

                    <div onClick={()=>handlesearchproduct(item.id)} className='flex justify-between items-center bg-[#F5F5F3] py-5 px-5'>
                      <div>
                        <img className='w-[80px] h-[80px]' src={item.thumbnail} alt='cartimg' />
                      </div>
                      <div>
                        <h4>{item.title}</h4>
                      </div>
                    </div>


                  ))}
                </div>
              }
            </div>


            <div className='flex items-center md:gap-x-10 gap-x-2 relative'>
              <div ref={logRafs} className='cursor-pointer'>
                <MdSupervisorAccount />
              </div>
              <div ref={cartbox} className='cursor-pointer relative'>
                {cartinfo.length > 0 ? <div className=' flex items-center justify-center absolute left-[10px] top-[-10px] h-[20px] w-[20px] bg-[#dcc0c0] rounded-full text-[black]'>
                  {cartinfo.length}
                </div> : ""}

                <FaCartArrowDown />
              </div>
              <div className='' ref={carstikiref}>
                {cart && <div className='w-[360px] border-2 border-[#F0F0F0] absolute top-[48px] left-[-250px] z-50'>
                  {cartinfo.map((item) => (
                    <>
                      <div className=' flex justify-between items-center bg-[#F5F5F3] py-5 px-5'>
                        <div>
                          <img className='w-[80px] h-[80px]' src={item.thumbnail} alt='cartimg' />
                        </div>
                        <div>
                          <h4>{item.title}</h4>
                          <h4>${item.price}</h4>
                        </div>
                        <div onClick={() => dispatch(productremove(i))}>
                          <ImCross />
                        </div>
                      </div>
                    </>

                  ))}

                  <div className='py-5 px-5 bg-[#dad1d1]'>
                    <p className='text-[#141313] pb-4'>Subtotal: <span>${totalPrice}</span></p>
                    <div className=' flex justify-between'>
                      <Link to={'/bilingcard'}>
                        <button className='py-[16px] px-[40px] border-2 border-[#2B2B2B] hover:bg-[#262626] hover:text-white duration-700 ease-in-out'>View Cart</button>
                      </Link>
                      <Link to={'/checkout'}>
                        <button className='py-[16px] px-[40px] border-2 border-[#2B2B2B] hover:bg-[#262626] hover:text-white duration-700 ease-in-out'>Checkout</button>
                      </Link>

                    </div>
                  </div>
                </div>}
              </div>

              {login && <div className='w-[200px] absolute top-[48px] left-[-190px] z-50'>
                <ul className='text-center border-2 border-[#F0F0F0]'>
                  <li className=' bg-white px-5 py-4 hover:bg-black hover:text-white duration-700 ease-in-out cursor-pointer'>My Account</li>
                  <li className='bg-white px-5 py-4 hover:bg-black hover:text-white duration-700 ease-in-out cursor-pointer'>Log Out</li>
                </ul>
              </div>}
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Hedars