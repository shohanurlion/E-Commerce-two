import React from 'react'
import Container from '../Container'

const Signup = () => {
    return (
        <Container>
            <div className=''>
                <div>
                    <h2 className='text-[49px] font-bold leading-[63px]'>Sign up</h2>
                    <h3>Home <span>/Signup</span></h3>
                </div>
                <div className='mt-[200px] mb-[100px]'>
                    <p className='text-[18px] font-normal leading-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem<br /> Ipsum has been the industry's standard dummy text ever since the.</p>
                </div>
                <div className='py-6'>
                    <hr />
                </div>
            </div>

            <div className='py-6'>
                <h1 className='text-[39px] font-bold leading-[50px] py-5'>Your Personal Details</h1>
                <div className='w-[100%] flex gap-x-20'>
                    <div className='w-[50%]'>
                        <label>First Name</label><br />
                        <input type='email' placeholder='First Name' className=' border-b-2 py-4 w-full !outline-none' />
                    </div>
                    <div className='w-[50%]'>
                        <label>Last Name</label><br />
                        <input type='text' placeholder='Last Name' className=' border-b-2 py-4 w-full !outline-none' />
                    </div>
                </div>
                <div className='w-[100%] flex gap-x-20 mt-10'>
                    <div className='w-[50%]'>
                        <label>Email address</label><br />
                        <input type='email' placeholder='company@domain.com' className=' border-b-2 py-4 w-full !outline-none' />
                    </div>
                    <div className='w-[50%]'>
                        <label>Telephone</label><br />
                        <input type='number' placeholder='Your Phone number' className=' border-b-2 py-4 w-full !outline-none' />
                    </div>
                </div>
                <div className='mt-20'>
                    <hr />
                </div>
            </div>

            <div className='py-6'>
                <h1 className='text-[39px] font-bold leading-[50px] py-5'>New Customer</h1>
                <div className='w-[100%] flex gap-x-20'>
                    <div className='w-[50%]'>
                        <label>Address 1</label><br />
                        <input type='email' placeholder='Address 1' className=' border-b-2 py-4 w-full !outline-none' />
                    </div>
                    <div className='w-[50%]'>
                        <label>Address 2</label><br />
                        <input type='text' placeholder='--' className=' border-b-2 py-4 w-full !outline-none' />
                    </div>
                </div>
                <div className='w-[100%] flex gap-x-20 mt-10'>
                    <div className='w-[50%]'>
                        <label>City</label><br />
                        <input type='text' placeholder='Your city' className=' border-b-2 py-4 w-full !outline-none' />
                    </div>
                    <div className='w-[50%]'>
                        <label>Post Code</label><br />
                        <input type='number' placeholder='Ex:-6260' className=' border-b-2 py-4 w-full !outline-none' />
                    </div>
                </div>
                <div className='w-[100%] flex gap-x-20 mt-10'>
                    <div className='w-[50%]'>
                        <label>Division</label><br />
                        <select className=' border-b-2 py-4 w-full !outline-none' placeholder="Please select">
                            <option>Dhaka</option>
                            <option>Rajshahi</option>
                            <option>Dhaka</option>
                        </select>
                    </div>
                    <div className='w-[50%]'>
                        <label>District</label><br />
                        <select className=' border-b-2 py-4 w-full !outline-none' placeholder="Please select">
                            <option>Dhaka</option>
                            <option>Rajshahi</option>
                            <option>Dhaka</option>
                        </select>
                    </div>
                </div>
                <div className='mt-20'>
                    <hr />
                </div>
            </div>
            <div className='py-6'>
                <h1 className='text-[39px] font-bold leading-[50px] py-5'>Your Password</h1>
                <div className='w-[100%] flex gap-x-20'>
                    <div className='w-[50%]'>
                        <label>Password</label><br />
                        <input type='password' placeholder='password' className=' border-b-2 py-4 w-full !outline-none' />

                    </div>
                    <div className='w-[50%]'>
                        <label>Repeat Password</label><br />
                        <input type='password' placeholder='Repeat password' className=' border-b-2 py-4 w-full !outline-none' />
                    </div>
                </div>
                <div className='mt-20'>
                    <hr />
                </div>
            </div>
            <div className='py-20'>
                <div className='flex gap-x-4'>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    <label for="vehicle1">I have read and agree to the Privacy Policy</label>
                </div>
                <div className='flex gap-x-4'>
                    <label for="vehicle1">Subscribe Newsletter</label>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Yes" />
                    <label for="vehicle1">Yes</label>
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="No" />
                    <label for="vehicle1">No</label>
                </div>
                <div className='mt-6'>
                    <button className='w-[200px] h-[50px] border-2 border-[black] duration-700 ease-in-out hover:bg-[black] hover:text-[white]'>Login</button>
                </div>
            </div>
        </Container>
    )
}

export default Signup