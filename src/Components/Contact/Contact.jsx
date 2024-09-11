import React from 'react'
import Container from '../Container'
import mapimg from '../../assets/Map.png'

const Contact = () => {
    return (
        <Container>
            <div className=''>
                <div className='pb-14'>
                    <h1 className='text-[49px] font-bold leading-[63px]'>Contacts</h1>
                    <h5>Home/<span>Contacts</span></h5>
                </div>
                <div className='w-[50%]'>
                    <h1 className='text-[39px] font-bold leading-[30px] pb-10'>Fill up a Form</h1>
                    <form>
                        <div className='py-4'>
                        <label className='text-[16px] font-bold leading-[23px]'>Name</label><br/>
                        <input type='text' placeholder='Your name here' className='text-[14px] font-normal leading-[18px] py-4 px-2 w-full border-b-2'/>
                        </div>
                        <div className='py-4'>
                        <label className='text-[16px] font-bold leading-[23px]'>Email</label><br/>
                        <input type='email' placeholder='Your email here' required  className='text-[14px] font-normal leading-[18px] py-4 px-2 w-full border-b-2'/>
                        </div>
                        <div className='py-4'>
                        <label className='text-[16px] font-bold leading-[23px]'>Message</label><br/>
                        <textarea className='text-[14px] font-normal leading-[18px] py-4 px-2 w-full border-b-2' placeholder='Your message here'></textarea>
                        </div>
                      <button className='w-[200px] h-[50px] bg-black text-[white] text-[14px] leading-[18px] font-bold duration-700 ease-in-out mt-4 hover:bg-[white] border-2 hover:text-[black]'>Post</button>
                    </form>
                </div>
                <div className='w-100% py-[100px]'>
                    <img src={mapimg} alt='map' className='w-full'/>
                </div>
            </div>
        </Container>
    )
}

export default Contact