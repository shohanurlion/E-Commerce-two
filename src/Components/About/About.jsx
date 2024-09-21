import React from 'react';
import Container from '../Container';
import Clockimg from '../../assets/clock3.png';
import busketimg from '../../assets/Image_with_button_2.png';

const About = () => {
  return (
    <Container>
      <div className="px-4 lg:px-0">
        {/* Header Section */}
        <div>
          <h1 className="text-[32px] md:text-[49px] font-bold leading-[40px] md:leading-[63px]">About</h1>
          <h5 className="text-[14px] md:text-[18px]">Home/<span>About</span></h5>
        </div>

        {/* Images Section */}
        <div className="py-8 md:py-16">
          <div className="w-[100%] flex flex-col md:flex-row justify-between items-center gap-y-6 md:gap-x-4">
            {/* Image 1 */}
            <div className="w-full md:w-[50%]">
              <img src={Clockimg} alt="img" className="w-full h-auto" />
            </div>
            {/* Image 2 */}
            <div className="w-full md:w-[50%]">
              <img src={busketimg} alt="img" className="w-full h-auto" />
            </div>
          </div>
        </div>

        {/* About Description */}
        <div className="">
          <div className="py-8 md:py-14">
            <p className="text-[20px] md:text-[33px] font-normal leading-[30px] md:leading-[52px] text-justify">
              Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.
            </p>
          </div>
        </div>

        {/* Our Vision, Story, Brands Section */}
        <div className="flex flex-col md:flex-row justify-between gap-y-8 md:gap-x-8 pb-14">
          {/* Our Vision */}
          <div className="w-full md:w-[33%]">
            <h2 className="text-[22px] md:text-[25px] font-bold leading-[30px] md:leading-[36px]">Our Vision</h2>
            <p className="text-[14px] md:text-[16px] font-normal leading-[24px] md:leading-[30px] text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          {/* Our Story */}
          <div className="w-full md:w-[33%]">
            <h2 className="text-[22px] md:text-[25px] font-bold leading-[30px] md:leading-[36px]">Our Story</h2>
            <p className="text-[14px] md:text-[16px] font-normal leading-[24px] md:leading-[30px] text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.
            </p>
          </div>
          {/* Our Brands */}
          <div className="w-full md:w-[33%]">
            <h2 className="text-[22px] md:text-[25px] font-bold leading-[30px] md:leading-[36px]">Our Brands</h2>
            <p className="text-[14px] md:text-[16px] font-normal leading-[24px] md:leading-[30px] text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default About;
