import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; // 1. Added NavLink
import { motion } from 'framer-motion'; // 2. Added motion
import Chat from '../assets/chat.png';

function Navbar() {
    const [navOpen, setNavOpen] = useState(false);

    const links = [
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "Gallery", path: "/gallery" },
        
    ];

    return (
        <>
            <div className='flex items-center justify-between bg-white fixed top-0 left-0 w-full shadow-md z-50 px-6 py-2 md:px-10 md:py-0'>
                <div className='flex items-center gap-4 md:gap-8'>
                    <div>
                        <img 
                            src={Chat}
                            className='w-32 h-auto object-contain md:w-40 p-3'
                            alt="Logo"
                        />
                    </div>
                    <h2 className='hidden sm:block text-xs md:text-sm text-[#394995] font-medium'>Premium Aluminium Solutions</h2>
                </div>

                <div className='hidden md:flex items-center text-[#2d3f91] font-medium gap-10'>
                    <div className='flex gap-10 h-full items-center'>
                        {links.map((link) => (
                            <NavLink 
                                key={link.path}
                                to={link.path} 
                                className={({ isActive }) => 
                                    `relative py-6 transition ${isActive ? "text-[#1f2d69]" : "hover:text-[#1f2d69]"}`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {link.name}
                                    
                                        {isActive && (
                                            <motion.div 
                                                layoutId="nav-underline"
                                                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2d3f91]"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>
                    <Link to="/contact" className='bg-gray-500 text-white px-7 py-2 rounded-lg font-bold text-center hover:bg-gray-600 transition'>Buy Now</Link>
                </div>

                <button
                    onClick={() => setNavOpen(!navOpen)}
                    className="flex h-6 w-6 flex-col justify-between p-0.5 md:hidden focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <span className={`h-0.5 w-full bg-[#2d3f91] transition-transform duration-300 ${navOpen ? "translate-y-2 rotate-45" : ""}`} />
                    <span className={`h-0.5 w-full bg-[#2d3f91] transition-opacity duration-300 ${navOpen ? "opacity-0" : ""}`} />
                    <span className={`h-0.5 w-full bg-[#2d3f91] transition-transform duration-300 ${navOpen ? "-translate-y-2 -rotate-45" : ""}`} />
                </button>
            </div>

            {navOpen && (
                <div className="fixed left-0 right-0 top-[60px] z-40 flex flex-col gap-4 border-b border-slate-200 bg-white px-6 py-6 shadow-xl md:hidden text-[#2d3f91] font-medium">
                    {links.map((link) => (
                        <NavLink 
                            key={link.path}
                            to={link.path} 
                            onClick={() => setNavOpen(false)} 
                            className={({ isActive }) => 
                                `text-lg transition ${isActive ? "font-bold text-[#1f2d69]" : "hover:text-[#1f2d69]"}`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <Link
                        to="/contact"
                        onClick={() => setNavOpen(false)}
                        className="rounded-lg bg-gray-500 py-3 text-center text-white font-bold hover:bg-gray-600 transition"
                    >
                        Buy Now
                    </Link>
                </div>
            )}
        </>
    );
}

export default Navbar;