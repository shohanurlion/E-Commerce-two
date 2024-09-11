import Container from '../Container'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHeart, FaCartArrowDown } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import { useContext } from 'react';
import { ApiData } from '../ContextApi';




const Newarrival = () => {
const alldata = useContext(ApiData)
console.log(alldata);

    
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll:4,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
      };
  return (
   <>
        <div>
            <Container>
                <div className=''>
                        <h2 className=' font-bold text-[39px] leading-[50px]'>New Arrivals</h2>
                </div>
                <Slider {...settings}>
                {alldata.map((items)=>(
                  <div className='w-[30%] px-3'>
                  <div className='relative group cursor-pointer my-8'>
                  <div className=''>
                    <img src={items.thumbnail} alt='clockimg' className='w-full' />
                  </div>
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
                      <div className='flex items-center justify-end gap-3 py-3 hover:text-[red] duration-1000 ease-in-out'>
                        <h5>Add to Cart</h5>
                        <FaCartArrowDown />
                      </div>
                    </div>
                  </div>
                  </div>
                  
                  <div className='flex justify-between py-8 px-4 bg-[black] text-white z-auto'>
                    <div>
                      <h4 className='pb-2'>{items.title}</h4>
                      <p>Category:{items.category}</p>
                    </div>
                    <div>
                      <p>Price:${items.price}</p>
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

export default Newarrival