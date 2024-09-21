import React from 'react';
import Container from '../Container';
import mapimg from '../../assets/Map.png';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <Container>
      <div className="px-4 lg:px-0">
        {/* Heading Section */}
        <div className="pb-8 md:pb-14">
          <h1 className="text-[32px] md:text-[49px] font-bold leading-[40px] md:leading-[63px]">Contacts</h1>
          <p className="text-[14px] md:text-[18px]"><Link to={'/'}>Home</Link> /<span>Contacts</span></p>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-[50%]">
          <h1 className="text-[28px] md:text-[39px] font-bold leading-[30px] pb-6 md:pb-10">Fill up a Form</h1>
          <form>
            {/* Name Input */}
            <div className="py-2 md:py-4">
              <label className="text-[16px] font-bold leading-[23px]">Name</label><br/>
              <input 
                type="text" 
                placeholder="Your name here" 
                className="text-[14px] font-normal leading-[18px] py-2 md:py-4 px-2 w-full border-b-2"
              />
            </div>
            {/* Email Input */}
            <div className="py-2 md:py-4">
              <label className="text-[16px] font-bold leading-[23px]">Email</label><br/>
              <input 
                type="email" 
                placeholder="Your email here" 
                required 
                className="text-[14px] font-normal leading-[18px] py-2 md:py-4 px-2 w-full border-b-2"
              />
            </div>
            {/* Message Input */}
            <div className="py-2 md:py-4">
              <label className="text-[16px] font-bold leading-[23px]">Message</label><br/>
              <textarea 
                className="text-[14px] font-normal leading-[18px] py-2 md:py-4 px-2 w-full border-b-2" 
                placeholder="Your message here"
              />
            </div>
            {/* Submit Button */}
            <button className="w-full md:w-[200px] h-[50px] bg-black text-white text-[14px] leading-[18px] font-bold duration-700 ease-in-out mt-4 hover:bg-white border-2 hover:text-black">
              Post
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="w-full py-10 md:py-[100px]">
          <img src={mapimg} alt="map" className="w-full h-auto" />
        </div>
      </div>
    </Container>
  );
};

export default Contact;
