import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';



const menu = [
    {
        name: 'Home',
        link: '/home'
    },

    {
        name: 'Home',
        link: '/home'
    },
    {
        name: 'Home',
        link: '/home'
    },
    {
        name: 'Home',
        link: '/home'
    },
    {
        name: 'Home',
        link: '/home'
    },
];

const MenuNavbar = () => {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-primary sm:mt-5 flex items-center justify-center text-white shadow">
            <div className="justify-between px-4 md:px-0 container mx-auto md:items-center md:flex  z-10">
                <div>
                    <div className="flex items-center justify-between   md:block">
                        <Link to='/'>
                            <h2 className="text-2xl bg-secondary h-16 w-16 text-center flex items-center justify-center"><AiOutlineSearch /></h2>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-white rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center  mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className=" items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {
                                menu.map((m, ind) => {
                                    return (
                                        <NavLink key={ind} className={({ isActive }) =>
                                            isActive ? "navStyle" : "navTextStyle"
                                        } to={m.path}

                                        ><span className='block mt-5 md:mt-0'>{m.name}</span></NavLink>
                                    );
                                })
                            }
                            {/* {
                                user && user.uid &&
                                <>
                                    <NavLink to="/myreview" className={({ isActive }) =>
                                        isActive ? "navStyle" : "navTextStyle"} ><span className='block mt-5 md:mt-0' >My Review</span></NavLink>
                                    <NavLink to='/addService' className={({ isActive }) =>
                                        isActive ? "navStyle" : "navTextStyle"} ><span className='block mt-5 md:mt-0'>Add Service</span></NavLink>
                                </>
                            } */}
                        </ul>
                    </div>
                </div>
                <div className={`items-center text-lg my-4 md:my-0 justify-center space-y-4 md:flex md:space-x-6 md:space-y-0 pb-4  md:pb-0 font-bold hover:text-slate-400 ${navbar ? "block" : "hidden"
                    }`}>


                    <Link to='/register'> <button>Login or Sign Up</button></Link>
                    {/* <CgProfile size={30} /> */}

                </div>
            </div>
        </nav>
    );
};

export default MenuNavbar;