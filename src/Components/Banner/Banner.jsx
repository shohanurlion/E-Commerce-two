import React from 'react'
import bannerimg from '../../assets/Group 10.png'
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineRestartAlt } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Container from '../Container';


const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows:false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position:"absolute",
          left:"100px",
          top:"45%",
          transform:"translaleY (-45%)"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "transparent",
          borderRight: "0px blue solid",
          padding:"10px 0"
        }}
      >
        0 {i + 1}
      </div>
    )
  };
  return (
    <>
    <div className='w-[100%]'>
    <Slider {...settings}>
    <div className=''>
            <img src={bannerimg} alt='bannerimg' className='w-full'/>
        </div>
        <div className=''>
            <img src={bannerimg} alt='bannerimg' className='w-full'/>
        </div>
        <div className=''>
            <img src={bannerimg} alt='bannerimg' className='w-full'/>
        </div>
        <div className=''>
            <img src={bannerimg} alt='bannerimg' className='w-full'/>
        </div>
    </Slider>
       
        <Container>
        <div className='md:flex justify-between'>
            <div className='flex justify-center md:flex items-center gap-x-2'>
            <span>2</span>
            <p>Two years warranty</p>
            </div>
            <div className='flex justify-center md:flex items-center gap-x-2'>
                <span><TbTruckDelivery /></span>
                <p>Free shipping</p>
            </div>
            <div className='flex justify-center md:flex items-center gap-x-2'>
            <span><MdOutlineRestartAlt /></span>
            <p>Return policy in 30 days</p>
            </div>
        </div>
        </Container>
    
    </div>
    </>
  )
}

export default Banner