import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Container from '../Container';
import { FaStar,FaPlus,FaMinus,FaStarHalfAlt ,FaRegStar    } from "react-icons/fa";
import Reveiw from '../Reveiw/Reveiw';
import { addToCart } from '../Slice/ProductSlice';
import { useDispatch } from 'react-redux'

const Productditail = () => {
    const dispatch =useDispatch()
    const productId = useParams()
    const [singelProduct , setsingelproduct]=useState([]);
    const [featur , setfeatur]=useState(false);
  const [retur , setreturn]=useState(false)
    const getId = () =>{
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((responsive)=>{
            setsingelproduct(responsive.data)
        })
    }
    useEffect(()=>{
        getId()
    },[])
    const featurehandel =()=>{
        setfeatur(!featur)
    }
    const clintrating =Array.from({length:5},(elm,index)=>{
        const number = index + 0.5
        return(
            singelProduct.rating > index + 1 ?<FaStar />:singelProduct.rating > number ? <FaStarHalfAlt /> : <FaRegStar />
        )
    });
    const bilingcarthandel =(item)=>{
        dispatch(addToCart({...item, qun:1}))
        
    }
    
  return (
    <>
    <Container>
        <div className='w-[100%]'>
            <div className='flex flex-wrap justify-between'>
                {singelProduct?.images?.map((item)=>(
                    <div className='w-[48%]'>
                        <img src={item} alt='imgs' className=''/>
                    </div>
                    
                ))}
              
            </div>
            <div>
                <div className='flex items-center gap-x-3 mt-4'>
                    <div className='flex'>
                    {clintrating}
                    </div>
                    <p>1 Review</p>
                </div>
                <div className='flex items-center gap-x-3 mt-4'>
                    <del>$88.00</del>
                    <p>${singelProduct.price}</p>
                </div>
                <div className='flex items-center gap-x-3 mt-4'>
                    <h4>SIZE:</h4>
                    <select>
                        <option>S</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                </div>
                <div className='flex items-center gap-x-3 mt-4'>
                QUANTITY:
                <div className='flex items-center gap-x-5 border border-[#F0F0F0] py-2 px-4'>
                <FaPlus />
                <p>0</p>
                <FaMinus />
                </div>
                </div>
                <div className='flex items-center gap-x-5 mt-4'>
                    <h4>In stock:</h4>
                    <p>{singelProduct.stock}</p>
                </div>
                <div className='flex gap-x-8 mt-4'>
                    <button className='py-[16px] px-[40px] border-2 border-[#2B2B2B] hover:bg-[#262626] hover:text-white duration-700 ease-in-out'>Add to Wish List</button>
                    <Link to={'/bilingcard'}><button onClick={()=>bilingcarthandel(singelProduct)} className='py-[16px] px-[40px] border-2 border-[#2B2B2B] hover:bg-[#262626] hover:text-white duration-700 ease-in-out'>Add to Cart</button></Link>
                </div>
            </div>
        </div>
        <div className='w-[50%] mt-7 border-t-2 border-b-2 border-[#F0F0F0] py-6 px-3 cursor-pointer'>
            <div className='flex items-center justify-between ' onClick={featurehandel}>
                <h3>FEATURES  & DETAILS</h3>
                <div>
                    {featur ==true ? <FaMinus />:<FaPlus />}
               
                </div>
               
            </div>
            {featur &&   <p>{singelProduct.warrantyInformation}</p>}
          
        </div>
        <div className='w-[50%] border-b-2 border-[#F0F0F0] py-6 px-3 cursor-pointer'>
            <div className='flex items-center justify-between' onClick={()=>setreturn(!retur)}>
                <h3>SHIPPING & RETURNS</h3>
                <div>
                    {retur ==true ? <FaMinus />:<FaPlus />}
               
                </div>
            </div>
            {retur &&   <p>{singelProduct.shippingInformation}<br/>{singelProduct.availabilityStatus}<br/>
            {singelProduct.returnPolicy} {singelProduct.minimumOrderQuantity}</p>
            
            }
          
        </div>
        <div className='py-10'>
        <Reveiw singelProduct={singelProduct}/>
        </div>
    
    </Container>
    </>
  
  )
}

export default Productditail