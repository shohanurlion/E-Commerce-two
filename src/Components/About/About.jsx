import React from 'react'
import Container from '../Container'
import Clockimg from '../../assets/clock3.png'
import busketimg from '../../assets/Image_with_button_2.png'

const About = () => {
  return (
   <Container>
    <div className=''>
        <div>
            <h1 className='text-[49px] font-bold leading-[63px]'>About</h1>
            <h5>Home/<span>About</span></h5>
        </div>
        <div className='py-16'>
            <div className='w-[100%] flex justify-between items-center gap-x-4'>
                <div className='w-[50%]'>
                <img src={Clockimg} alt='img'/>
                </div>
                
                <div className='w-[50%]'>
                <img src={busketimg} alt='img'/>
                </div>
            </div>
        <div className=''>
            <div className='py-14'>
                <p className='text-[33px] font-normal leading-[52px]'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
            </div>
        </div>
        <div className='flex justify-between gap-x-8 pb-14'>
            <div>
                <h2 className='text-[25px] font-bold leading-[36px]'>Our Vision</h2>
                <p className='text-[16px] font-normal leading-[30px] text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div>
                <h2 className='text-[25px] font-bold leading-[36px]'>Our Story</h2>
                <p className='text-[16px] font-normal leading-[30px] text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
            </div>
            <div>
                <h2 className='text-[25px] font-bold leading-[36px]'>Our Brands</h2>
                <p className='text-[16px] font-normal leading-[30px] text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            </div>

        </div>
        </div>
    </div>
   </Container>
  )
}

export default About