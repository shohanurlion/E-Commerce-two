import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Container from '../Container';
import { FaStar, FaPlus, FaMinus, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Reveiw from '../Reveiw/Reveiw';
import { addToCart } from '../Slice/ProductSlice';
import { useDispatch } from 'react-redux';

const Productditail = () => {
  const dispatch = useDispatch();
  const productId = useParams();
  const [singelProduct, setsingelproduct] = useState({});
  const [featur, setfeatur] = useState(false);
  const [retur, setreturn] = useState(false);

  const getId = () => {
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
      setsingelproduct(response.data);
    });
  };

  useEffect(() => {
    getId();
  }, []);

  const featurehandel = () => {
    setfeatur(!featur);
  };

  const clintrating = Array.from({ length: 5 }, (elm, index) => {
    const number = index + 0.5;
    return (
      singelProduct.rating > index + 1
        ? <FaStar key={index} />
        : singelProduct.rating > number
          ? <FaStarHalfAlt key={index} />
          : <FaRegStar key={index} />
    );
  });

  const bilingcarthandel = (item) => {
    dispatch(addToCart({ ...item, qun: 1 }));
  };

  return (
    <Container>
      <div className='flex flex-col md:flex-row'>
        {/* Product Images */}
        <div className='w-full md:w-1/2 flex flex-wrap justify-center gap-4'>
          {singelProduct?.images?.map((item, index) => (
            <div key={index} className='w-full md:w-1/2 lg:w-1/3'>
              <img src={item} alt='product' className='w-full h-auto object-cover' />
            </div>
          ))}
        </div>

        {/* Product Details */}
        <div className='w-full md:w-1/2 mt-4 md:mt-0 px-4 md:px-6'>
          <div className='flex items-center gap-x-3'>
            <div className='flex'>
              {clintrating}
            </div>
            <p>1 Review</p>
          </div>
          <div className='flex items-center gap-x-3 mt-2'>
            <del className='text-gray-500'>$88.00</del>
            <p className='text-xl font-semibold'>${singelProduct.price}</p>
          </div>
          <div className='flex items-center gap-x-3 mt-4'>
            <h4 className='font-semibold'>SIZE:</h4>
            <select className='border border-gray-300 py-1 px-2 rounded'>
              <option>S</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <div className='flex items-center gap-x-3 mt-4'>
            <h4 className='font-semibold'>QUANTITY:</h4>
            <div className='flex items-center gap-x-3 border border-gray-300 py-2 px-4 rounded'>
              <FaPlus />
              <p>0</p>
              <FaMinus />
            </div>
          </div>
          <div className='flex items-center gap-x-5 mt-4'>
            <h4 className='font-semibold'>In stock:</h4>
            <p>{singelProduct.stock}</p>
          </div>
          <div className='flex gap-x-4 mt-4'>
            <button className='py-2 px-6 border-2 border-gray-700 rounded hover:bg-gray-800 hover:text-white transition duration-300'>Add to Wish List</button>
            <Link to='/bilingcard'>
              <button onClick={() => bilingcarthandel(singelProduct)} className='py-2 px-6 border-2 border-gray-700 rounded hover:bg-gray-800 hover:text-white transition duration-300'>Add to Cart</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features & Details */}
      <div className='w-full mt-6 border-t-2 border-b-2 border-gray-200 py-6 px-4 md:px-6 cursor-pointer'>
        <div className='flex items-center justify-between' onClick={featurehandel}>
          <h3 className='font-semibold'>FEATURES & DETAILS</h3>
          <div>
            {featur ? <FaMinus /> : <FaPlus />}
          </div>
        </div>
        {featur && <p className='mt-2'>{singelProduct.warrantyInformation}</p>}
      </div>

      {/* Shipping & Returns */}
      <div className='w-full mt-4 border-b-2 border-gray-200 py-6 px-4 md:px-6 cursor-pointer'>
        <div className='flex items-center justify-between' onClick={() => setreturn(!retur)}>
          <h3 className='font-semibold'>SHIPPING & RETURNS</h3>
          <div>
            {retur ? <FaMinus /> : <FaPlus />}
          </div>
        </div>
        {retur && <p className='mt-2'>{singelProduct.shippingInformation}<br />{singelProduct.availabilityStatus}<br />{singelProduct.returnPolicy} {singelProduct.minimumOrderQuantity}</p>}
      </div>

      {/* Reviews */}
      <div className='py-10'>
        <Reveiw singelProduct={singelProduct} />
      </div>
    </Container>
  );
}

export default Productditail;
