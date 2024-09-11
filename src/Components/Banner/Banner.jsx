import React from 'react'
import banimg from '../../assets/Group 10.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
    <div className='w-[100%] pb-8'>
    <Slider {...settings}>
         <div>
            <img src={banimg} alt='banner_img'/>
        </div>
        <div>
            <img src={banimg} alt='banner_img'/>
        </div>
        <div>
            <img src={banimg} alt='banner_img'/>
        </div>
    </Slider>

      
    </div>
    </>
  )
}

export default Banner