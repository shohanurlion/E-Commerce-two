import React, { useState } from 'react';
import Container from '../Container';
import { Link } from 'react-router-dom';

const Account = () => {
    const [activeSection, setActiveSection] = useState("dashboard");

    const handleItemClick = (section) => {
        setActiveSection(section);
    };

    return (
        <>
            <div className='overflow-x-hidden'>
                <Container>
                    {/* Account Header */}
                    <div className="py-4 md:py-8">
                        <h2 className="text-[32px] md:text-[49px] font-bold leading-[40px] md:leading-[63px]">My Account</h2>
                        <p className="text-[14px] md:text-[18px]"><Link to={'/'}>Home</Link> <span>/Account</span></p>
                    </div>

                    {/* Main Content */}
                    <div className="w-full flex flex-col md:flex-row py-10 md:py-[150px]">
                        {/* Sidebar Menu */}
                        <div className="w-full md:w-[20%] mb-6 md:mb-0">
                            <ul className="flex flex-col md:flex-col gap-0 lg:gap-2 md:gap-0">
                                {["dashboard", "others", "downloads", "addresses", "accountDetails", "logout"].map((section) => (
                                    <li 
                                        key={section}
                                        onClick={() => handleItemClick(section)} 
                                        className={`py-4 text-[16px] font-normal leading-[30px] border-b-2 cursor-pointer px-4 hover:font-bold ${activeSection === section ? "bg-gray-200" : ""}`}>
                                        {section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, ' $1')}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Details Section */}
                        <div className="w-full md:w-[80%]">
                            <div className='px-4 md:px-8'>
                                {activeSection === "dashboard" && (
                                    <>
                                        <p className='py-4'>Hello <span>admin</span> (not <span>admin?</span> Log out)</p>
                                        <p>From your account dashboard, you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
                                    </>
                                )}
                                {activeSection === "others" && <p>No address available.</p>}
                                {activeSection === "downloads" && <p>Your download history will appear here.</p>}
                                {activeSection === "addresses" && <p>Your addresses will appear here.</p>}
                                {activeSection === "accountDetails" && <p>Manage your account details here.</p>}
                                {activeSection === "logout" && <p>You have been logged out.</p>}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Account;
