import Container from '../Container';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHeart, FaCartArrowDown } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import { useContext, useState } from 'react';
import { ApiData } from '../ContextApi';
import { CiHeart } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { addToCart } from '../Slice/ProductSlice';
import { Link } from 'react-router-dom';

const Newarrival = () => {
  const dispatch = useDispatch()
  const alldata = useContext(ApiData);
  const [heart , setheart]= useState(false);
  const heartlist =()=>{
    setheart(!heart)
  }

  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // Large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768, // Medium screens (tablets)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 640, // Small screens (mobile)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  const homecarthandel =(item)=>{
    dispatch(addToCart({ ...item, qun: 1 }));
  }
  return (
    <>
    <div className='overflow-x-hidden'>
    <Container>
        <h1 className='text-[39px] font-bold font-sans px-3 md:px-0'>New Arrivals</h1>
        <Slider {...settings}>
        {alldata.map((infos)=>(
         <div className='w-[24%] px-5'>
            <div className=' relative group'>
                <div className='bg-black text-center w-[100px] absolute top-[10px] left-[10px]'>
                    <h4 className='text-white font-bold text-[14px] py-2'>-{infos.discountPercentage}</h4>
                </div>
                <Link  to={`/shop/${infos.id}`}>
                <div>
                <img src={infos.thumbnail} alt='Newimg' className='w-[100%]'/>
                </div>
                </Link>
            <div className='flex justify-end py-0 px-4 absolute bottom-0 left-0 w-full bg-[#FFFFFF] h-[0px] duration-700 ease-in-out overflow-hidden group-hover:h-[120px] cursor-pointer'>
            <div className=''>
                    <div onClick={heartlist} className='flex items-center justify-end gap-x-2 pt-4'>
                        <h4 className='text-[16px] text-[#767676] font-normal font-sans leading-[20px]'>Add to Wish List</h4>
                        {heart === true ?  <FaHeart />:<CiHeart />}
                    </div>
                    <div className='flex items-center justify-end gap-x-2 py-4'>
                        <h4>Compear</h4>
                        <VscDebugRestart/>
                    </div>
                 
                    <div onClick={()=>homecarthandel(infos)} className='flex items-center justify-end gap-x-2 pb-10'>
                        <h4 className='text-[16px] text-[#262626] font-bold font-sans leading-[20px]'>Add to Wish List</h4>
                        <FaCartArrowDown />
                    </div>
                </div>
            </div>
            </div>
           
            <div className='bg-[black] px-4 py-2'>
                <div className='flex items-center justify-between py-2'>
                    <h3 className='text-[14px] lg:text-[18px] text-[#ffffff] font-bold font-sans leading-[26px]'>{infos.title}</h3>
                    <p className='text-[14px] lg:text-[18px] text-[#ffffff] font-normal font-sans leading-[30px]'>${infos.price}</p>
                </div>
                <span className='text-[14px] lg:text-[18px] text-[#ffffff] font-normal font-sans leading-[30px]'>{infos.category}</span>
            </div>
        </div>
         
        ))}
        </Slider>
        
     
       
    </Container>
    </div>
 
    
    </>

  );
}

export default Newarrival;
