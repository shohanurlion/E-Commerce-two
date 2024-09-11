import React, { useEffect, useState } from 'react'
import Container from '../Container'
import log from '../../assets/Logo.png'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import '../../App.css'
const Navbars = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
    <header  className={isSticky ? 'navbar sticky' : 'navbar'}>
    <div className='py-5'>
      <Container>
        <div className='flex items-center justify-between'>
          <div className=' md:py-0 py-4'>
          <Link to="/"><img src={log} alt='log'/></Link>
          </div>
          <div className=''>
            <ul className={`lg:flex md:gap-x-8 md:mt-0 mt-2 absolute top-0 left-0 lg:static ${isToggled ? "top-[70px] bg-white lg:bg-transparent w-full text-center duration-500 ease-in-out":"top-[-200px] bg-white lg:bg-transparent w-full text-center duration-500 ease-in-out"}`}>

              <li className='text-[18px] md:pb-0 pb-2 font-normal leading-[18px] py-3 lg:py-0 text-[#767676] duration-500 ease-in-out hover:text-[#262626]'><Link to="/">Home</Link></li>

              <li className='text-[18px] md:pb-0 pb-2 font-normal leading-[18px] py-3 lg:py-0 text-[#767676] duration-500 ease-in-out hover:text-[#262626]'><Link to="/shop">Shop</Link></li>

              <li className='text-[18px] md:pb-0 pb-2 font-normal leading-[18px] py-3 lg:py-0 text-[#767676] duration-500 ease-in-out hover:text-[#262626]'><Link to="/about">About</Link></li>

              <li className='text-[18px] md:pb-0 pb-2 font-normal leading-[18px] py-3 lg:py-0 text-[#767676] duration-500 ease-in-out hover:text-[#262626]'><Link to="/contact">Contact</Link></li>
              
              <li className='text-[18px] md:pb-0 pb-2 font-normal leading-[18px] py-3 lg:py-0 text-[#767676] duration-500 ease-in-out hover:text-[#262626]'><a href='#'>Journal</a></li>
            </ul>
          </div>
          <div className='lg:hidden' onClick={handleToggle}>
        {isToggled ? <RxCross2 />:<FaBars />}
        </div>
        </div>
      
      </Container>
    </div>
    </header>
  
    </>
  )
}

export default Navbars