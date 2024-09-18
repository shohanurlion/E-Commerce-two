import Container from '../Container';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHeart, FaCartArrowDown } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import { useContext } from 'react';
import { ApiData } from '../ContextApi';

const Newarrival = () => {
  const alldata = useContext(ApiData);
  console.log(alldata);

  var settings = {
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

  return (
    <>
      <div>
        <Container>
          <div className='text-center'>
            <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl leading-tight'>New Arrivals</h2>
          </div>
          <Slider {...settings}>
            {alldata.map((items) => (
              <div className='w-full px-3'>
                <div className='relative group cursor-pointer my-8'>
                  <div className=''>
                    <img src={items.thumbnail} alt='product-img' className='w-full' />
                  </div>
                  <div className='absolute bottom-0 left-0 w-full h-0 overflow-hidden group-hover:h-[280px] duration-700 ease-in-out'>
                    <div className='flex justify-end'>
                      <div className='py-5 px-3'>
                        <div className='flex items-center gap-3 py-3 hover:text-red-500 duration-500 ease-in-out'>
                          <h5 className='text-sm sm:text-base'>Add to Wish List</h5>
                          <FaHeart />
                        </div>
                        <div className='flex justify-end py-3 hover:text-red-500 duration-500 ease-in-out'>
                          <VscDebugRestart />
                        </div>
                        <div className='flex items-center justify-end gap-3 py-3 hover:text-red-500 duration-500 ease-in-out'>
                          <h5 className='text-sm sm:text-base'>Add to Cart</h5>
                          <FaCartArrowDown />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='flex justify-between py-4 px-4 bg-black text-white'>
                    <div>
                      <h4 className='pb-2 text-base sm:text-lg'>{items.title}</h4>
                      <p className='text-sm'>Category: {items.category}</p>
                    </div>
                    <div>
                      <p className='text-sm'>Price: ${items.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </Container>
      </div>
    </>
  )
}

export default Newarrival;
