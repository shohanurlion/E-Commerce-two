import React, { useState } from 'react';
import Container from '../Container';


const Account = () => {
    // State to track which section is currently active
    const [activeSection, setActiveSection] = useState("dashboard");

    // Function to handle the click and set the active section
    const handleItemClick = (section) => {
        setActiveSection(section);
    };

    return (
        <>
            <Container>
                <div className=''>
                    <div>
                        <h2 className='text-[49px] font-bold leading-[63px]'>My Account</h2>
                        <h3>Home <span>/Account</span></h3>
                    </div>
                </div>
                <div className='w-[100%] flex py-[150px]'>
                    {/* Sidebar Menu */}
                    <div className='w-[20%]'>
                        <ul>
                            <li 
                                onClick={() => handleItemClick("dashboard")} 
                                className={`py-4 text-[16px] font-normal leading-[30px] border-b-2 cursor-pointer px-4 hover:font-bold ${activeSection === "dashboard" ? "bg-gray-200" : ""}`}>
                                Dashboard
                            </li>
                            <li 
                                onClick={() => handleItemClick("others")} 
                                className={`py-4 text-[16px] font-normal leading-[30px] border-b-2 cursor-pointer px-4 hover:font-bold ${activeSection === "others" ? "bg-gray-200" : ""}`}>
                                Others
                            </li>
                            <li 
                                onClick={() => handleItemClick("downloads")} 
                                className={`py-4 text-[16px] font-normal leading-[30px] border-b-2 cursor-pointer px-4 hover:font-bold ${activeSection === "downloads" ? "bg-gray-200" : ""}`}>
                                Downloads
                            </li>
                            <li 
                                onClick={() => handleItemClick("addresses")} 
                                className={`py-4 text-[16px] font-normal leading-[30px] border-b-2 cursor-pointer px-4 hover:font-bold ${activeSection === "addresses" ? "bg-gray-200" : ""}`}>
                                Addresses
                            </li>
                            <li 
                                onClick={() => handleItemClick("accountDetails")} 
                                className={`py-4 text-[16px] font-normal leading-[30px] border-b-2 cursor-pointer px-4 hover:font-bold ${activeSection === "accountDetails" ? "bg-gray-200" : ""}`}>
                                Account details
                            </li>
                            <li 
                                onClick={() => handleItemClick("logout")} 
                                className={`py-4 text-[16px] font-normal leading-[30px] border-b-2 cursor-pointer px-4 hover:font-bold ${activeSection === "logout" ? "bg-gray-200" : ""}`}>
                                Logout
                            </li>
                        </ul>
                    </div>

                    {/* Details Section */}
                    <div className='w-[80%]'>
                        {activeSection === "dashboard" && (
                     
                             <div className='px-8'>
                                <p className='py-4'>Hello <span>admin</span> (not <span>admin?</span> Log out)</p>
                                <p>From your account dashboard you can view your recent orders, manage your <br/>shipping and billing addresses, and edit your password and account details.</p>
                                
                            </div>  
                            
                        )}

                        {activeSection === "others" && (
                            <div className='px-8'>
                                <p>No address available.</p>
                            </div>
                        )}

                        {activeSection === "downloads" && (
                            <div className='px-8'>
                                <p>Your download history will appear here.</p>
                            </div>
                        )}

                        {activeSection === "addresses" && (
                            <div className='px-8'>
                                <p>Your addresses will appear here.</p>
                            </div>
                        )}

                        {activeSection === "accountDetails" && (
                            <div className='px-8'>
                                <p>Manage your account details here.</p>
                            </div>
                        )}

                        {activeSection === "logout" && (
                            <div className='px-8'>
                                <p>You have been logged out.</p>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Account;
