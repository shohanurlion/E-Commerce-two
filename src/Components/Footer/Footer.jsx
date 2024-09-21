import React from 'react'
import Container from '../Container'
import copylog from '../../assets/OREBI©.png'
import { TiSocialFacebook } from "react-icons/ti";
import { CiLinkedin,CiInstagram  } from "react-icons/ci";
import BackTop from '../BacktoTop/BackTop';
const Footer = () => {
  return (
    <>
    <div className='bg-[#F5F5F3]'>
    <Container>
    <div className='flex justify-between pt-9'>
        <div className='xl:w-[50%] sm:flex justify-center xl:justify-normal gap-x-44'>
            <div className='xl:text-left text-center'>
                <h3 className='font-sans font-bold text-[16px] leading-[23px] text-[#262626] pb-4'>MENU</h3>
                <ul>
                    <li className='font-sans font-normal text-[14px] leading-[23px] text-[#6D6D6D] pb-2 duration-500 ease-in-out hover:font-bold hover:text-[#262626]'><a href="#">Home</a></li>
                    <li className='font-sans font-normal text-[14px] leading-[23px] text-[#6D6D6D] pb-2 duration-500 ease-in-out hover:font-bold hover:text-[#262626]'><a href="#">Shop</a></li>
                    <li className='font-sans font-normal text-[14px] leading-[23px] text-[#6D6D6D] pb-2 duration-500 ease-in-out hover:font-bold hover:text-[#262626]'><a href="#">About</a></li>
                    <li className='font-sans font-normal text-[14px] leading-[23px] text-[#6D6D6D] pb-2 duration-500 ease-in-out hover:font-bold hover:text-[#262626]'><a href="#">Contact</a></li>
                    <li className='font-sans font-normal text-[14px] leading-[23px] text-[#6D6D6D] pb-2 duration-500 ease-in-out hover:font-bold hover:text-[#262626]'><a href="#">Journal</a></li>
                </ul>
            </div>
            <div className='xl:text-left text-center'>
            <h3 className='font-sans font-bold text-[16px] leading-[23px] text-[#262626] pb-4'>SHOP</h3>
                <ul>
                    <li className='font-sans font-normal text-[14px] leading-[23px] text-[#6D6D6D] pb-2 duration-500 ease-in-out hover:font-bold hover:text-[#262626]'><a href="#">Category 1</a></li>
                    <li className='font-sans font-normal text-[14px] leading-[23px] text-[#6D6D6D] pb-2 duration-500 ease-in-out hover:font-bold hover:text-[#262626]'><a href="#">Category 2</a></li>
                    <li className='font-sans font-normal text-[14px] leading-[23px] text-[#6D6D6D] pb-2 duration-500 ease-in-out hover:font-bold hover:text-[#262626]'><a href="#">Category 3</a></li>
                    <li className='font-sans font-normal text-[14px] leading-[23px] text-[#6D6D6D] pb-2 duration-500 ease-in-out hover:font-bold hover:text-[#262626]'><a href="#">Category 4</a></li>
                    <li className='font-sans font-normal text-[14px] leading-[23px] text-[#6D6D6D] pb-2 duration-500 ease-in-out hover:font-bold hover:text-[#262626]'><a href="#">Category 5</a></li>
                </ul>
            </div>
            <div className='xl:text-left text-center'>
            <h3 className='font-sans font-bold text-[16px] leading-[23px] text-[#262626] pb-4'>HELP</h3>
                <ul>
                    <li className='font-sans font-normal text-[14px] leading-[23px] text-[#6D6D6D] pb-2 duration-500 ease-in-out hover:font-bold hover:text-[#262626]'><a href="#">Privacy Policy</a></li>
                    <li className='font-sans font-normal text-[14px] leading-[23px] text-[#6D6D6D] pb-2 duration-500 ease-in-out hover:font-bold hover:text-[#262626]'><a href="#">Special E-shop</a></li>
                    <li className='font-sans font-normal text-[14px] leading-[23px] text-[#6D6D6D] pb-2 duration-500 ease-in-out hover:font-bold hover:text-[#262626]'><a href="#">Terms & Conditions</a></li>
                    <li className='font-sans font-normal text-[14px] leading-[23px] text-[#6D6D6D] pb-2'><a href="#">Special E-shop</a></li>
                    <li className='font-sans font-normal text-[14px] leading-[23px] text-[#6D6D6D] pb-2 duration-500 ease-in-out hover:font-bold hover:text-[#262626]'><a href="#">Shipping</a></li>
                </ul>
            </div>
        </div>
         <div className='xl:w-[25%] xl:mt-0 mt-6'>
         <div className='xl:text-left text-center'>
            <h4 className='font-sans font-bold text-[16px] leading-[27px] text-[#262626]'>(052) 611-5711</h4>
            <h4 className='font-sans font-bold text-[16px] leading-[27px] text-[#262626]'>company@domain.com</h4>
            <p className='font-sans font-normal text-[14px] leading-[23px] text-[#6D6D6D]'>575 Crescent Ave. Quakertown, PA 18951</p>
         </div>
        </div>
         <div className='xl:w-[25%] xl:mt-0 mt-5'>
        <div className=' flex justify-center xl:justify-normal'>
            <img src={copylog} alt='footerlog'/>
        </div>
        </div>
    </div>
    <div className=' xl:flex justify-between py-4 items-center text-center'>
        <div className='flex justify-center xl:justify-normal pb-2'>
            <ul className=' flex items-center gap-x-5'>
                <li><a href='#'><TiSocialFacebook /></a></li>
                <li><a href='#'><CiLinkedin /></a></li>
                <li><a href='#'><CiInstagram /></a></li>
            </ul>
        </div>
        <div>
            <h5 className='font-sans font-normal text-[14px] leading-[23px] text-[#6D6D6D]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</h5>
        </div>
    </div>
    </Container>
    <div className=''>
        <BackTop/>
    </div>
    </div>
    
    </>
  )
}

export default Footer