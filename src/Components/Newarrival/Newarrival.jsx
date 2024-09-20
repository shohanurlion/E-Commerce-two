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
    <Container>
      <div className='text-center'>
        <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl leading-tight'>New Arrivals</h2>
      </div>
      <Slider {...settings}>
        {alldata.map((items, index) => (
          <div key={index} className='px-2 sm:px-3'>
            <Link  to={`/shop/${items.id}`}>
            <div className='relative group cursor-pointer my-4'>
              <div>
                <img src={items.thumbnail} alt='product-img' className='w-full h-auto' />
              </div>
              <div className='absolute bottom-0 left-0 w-full h-0 overflow-hidden group-hover:h-[280px] duration-700 ease-in-out'>
                <div className='flex justify-end'>
                  <div className='py-5 px-3'>
                    <div onClick={heartlist} className='flex items-center gap-2 sm:gap-3 py-3 hover:text-red-500 duration-500 ease-in-out'>
                      <h5 className='text-xs sm:text-sm'>Add to Wish List</h5>
                     {heart === true ?  <FaHeart />:<CiHeart />}
                    </div>
                    <div className='flex justify-end py-3 hover:text-red-500 duration-500 ease-in-out'>
                      <VscDebugRestart />
                    </div>
                    <div onClick={()=>homecarthandel(items)} className='flex items-center justify-end gap-2 sm:gap-3 py-3 hover:text-red-500 duration-500 ease-in-out'>
                      <h5 className='text-xs sm:text-sm'>Add to Cart</h5>
                      <FaCartArrowDown />
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex flex-col sm:flex-row justify-between py-4 px-2 sm:px-4 bg-black text-white'>
                <div>
                  <h4 className='pb-1 text-sm sm:text-base'>{items.title}</h4>
                  <p className='text-xs sm:text-sm'>Category: {items.category}</p>
                </div>
                <div>
                  <p className='text-xs sm:text-sm'>Price: ${items.price}</p>
                </div>
              </div>
            </div>
            </Link>
          </div>
        ))}
      </Slider>
    </Container>
  );
}

export default Newarrival;
