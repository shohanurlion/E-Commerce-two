import React from 'react'
import Container from '../Components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaHeart, FaCartArrowDown } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
import { wishLiestremove } from '../Components/Slice/ProductSlice';

const Selectwish = (i) => {
    const dispatch =useDispatch()
    const wishinfo = useSelector((state) => state.product.wishitem)
    console.log(wishinfo);

    return (
        <>
            <div>
                <Container>
                    <div className='flex justify-center md:flex gap-x-3 flex-wrap'>
                        {wishinfo.map((item) => (
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
                                                <div className='flex items-center gap-3 py-3 hover:text-[red] duration-1000 ease-in-out'>
                                                    <h5>Add to Wish List</h5>
                                                    <FaHeart />
                                                </div>
                                                <div className='flex justify-end py-3 hover:text-[red] duration-1000 ease-in-out'>
                                                    <VscDebugRestart />
                                                </div>
                                                <div onClick={() => addTocart(item)} className='flex items-center justify-end gap-3 py-3 hover:text-[red] duration-1000 ease-in-out'>
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
                                <div onClick={() => dispatch(wishLiestremove(i))} className='absolute top-0 right-0 p-3 hover:border-2 hover:border-[black]'>
                                <ImCross />
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

        </>
    )
}

export default Selectwish