import React from 'react';
import Container from '../Container';
import { RxCross2 } from "react-icons/rx";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { productdecrement, productIncrement, productremove } from '../Slice/ProductSlice';

const Billingcard = () => {
  const dispatch = useDispatch();
  const cartInfo = useSelector((state) => state.product.cartitem);
  const { totalPrice, totalQuntity } = cartInfo.reduce(
    (acc, item) => {
      acc.totalPrice += Math.ceil(item.price * item.qun);
      acc.totalQuntity += item.qun;
      return acc;
    },
    { totalPrice: 0, totalQuntity: 0 }
  );

  return (
    <>
      <Container>
        <div className="my-5">
          <h3 className="text-[18px] md:text-[24px] font-bold">Cart</h3>
          <p>Home &gt; Cart</p>
        </div>

        <div className="w-full border-2 border-[#F0F0F0] my-10">
          {/* Header */}
          <div className="hidden md:flex justify-between bg-[#F5F5F3]">
            <h4 className="w-[25%] py-[16px] px-3 border-b-2 border-[#F0F0F0]">Products</h4>
            <h4 className="w-[25%] py-[16px] px-3 border-b-2 border-[#F0F0F0]">Price</h4>
            <h4 className="w-[25%] py-[16px] px-3 border-b-2 border-[#F0F0F0]">Quantity</h4>
            <h4 className="w-[25%] py-[16px] px-3 border-b-2 border-[#F0F0F0]">Total</h4>
          </div>

          {/* Cart Items */}
          {cartInfo.map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row justify-between border-b-2 py-5 px-3">
              <div className="flex items-center gap-4 w-full md:w-[25%]">
                <button onClick={() => dispatch(productremove(i))}>
                  <RxCross2 />
                </button>
                <img src={item.thumbnail} alt="product" className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-cover" />
                <h4>{item.title}</h4>
              </div>
              <div className="mt-4 md:mt-0 w-full md:w-[25%] text-center">
                <h3>${item.price}</h3>
              </div>
              <div className="flex justify-center items-center mt-4 md:mt-0 w-full md:w-[25%]">
                <button onClick={() => dispatch(productdecrement(i))}><FiMinus /></button>
                <p className="mx-3">{item.qun}</p>
                <button onClick={() => dispatch(productIncrement(i))}><FiPlus /></button>
              </div>
              <div className="mt-4 md:mt-0 w-full md:w-[25%] text-center">
                <h3>${Math.ceil(item.price * item.qun)}</h3>
              </div>
            </div>
          ))}

          {/* Cart Summary */}
          <div className="flex justify-between items-center py-5 px-3 border-t-2">
            <div>
              <select className="border-2 py-2 px-4">
                <option>Apply coupon</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="flex justify-end">
              <button className="text-sm font-bold">Update cart</button>
            </div>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="flex flex-col md:flex-row justify-between items-end py-5">
          <div className="w-full md:w-1/2 border-2 border-[#F0F0F0] p-5">
            <h4 className="text-xl font-bold">Cart totals</h4>
            <div className="flex justify-between my-4">
              <p>Quantity</p>
              <p>{totalQuntity}</p>
            </div>
            <div className="flex justify-between my-4">
              <p>Total</p>
              <p>${totalPrice}</p>
            </div>
            <button className="py-3 px-6 border-2 border-[#F0F0F0] w-full hover:bg-black hover:text-white transition duration-300">Proceed to Checkout</button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Billingcard;
