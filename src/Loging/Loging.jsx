import React from 'react'
import Container from '../Components/Container'

const Loging = () => {
  return (
    <>
    <Container>
        <div className=''>
            <div>
                <h2 className='text-[49px] font-bold leading-[63px]'>Loing</h2>
                <h3>Home <span>/Login</span></h3>
            </div>
            <div className='mt-[200px] mb-[100px]'>
                <p className='text-[18px] font-normal leading-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem<br/> Ipsum has been the industry's standard dummy text ever since the.</p>
            </div>
            <div className='py-6'>
                <hr/>
            </div>
        </div>

        <div className='py-6'>
            <h1 className='text-[39px] font-bold leading-[50px] py-5'>Returning Customer</h1>
            <div className='w-[100%] flex gap-x-20'>
                <div className='w-[50%]'>
                    <label>Email address</label><br/>
                    <input type='email' placeholder='company@domain.com' className=' border-b-2 py-4 w-full !outline-none'/>
                    <div className='mt-6'>
                    <button className='w-[200px] h-[50px] border-2 border-[black] duration-700 ease-in-out hover:bg-[black] hover:text-[white]'>Login</button>
                    </div>
                    
                </div>
                <div className='w-[50%]'>
                    <label>Password</label><br/>
                    <input type='password' placeholder='Exa:1254364' className=' border-b-2 py-4 w-full !outline-none'/>
                </div>
            </div>
            <div className='mt-20'>
                <hr/>
            </div>
        </div>
        <div className='my-20'>
            <h1 className='text-[39px] font-bold leading-[50px]'>New Customer</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem<br/> Ipsum has been the industry's standard dummy text ever since the.</p>
            <div className='mt-6'>
                    <button className='w-[200px] h-[50px] border-2 border-[black] duration-700 ease-in-out hover:bg-[black] hover:text-[white]'>Continue</button>
                    </div>
        </div>
    </Container>
    </>
  )
}

export default Loging