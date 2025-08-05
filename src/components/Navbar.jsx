import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

    const [visible, setVisble] = useState(false)

    const { setShowSearch, navigate, getCartCount } = useContext(ShopContext);

    return (
        <div className='flex items-center justify-between py-5 font-medium' >

            <Link to='/'><img className='w-36' src={assets.logo} alt="Pamrose Skin" /></Link>

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to="/" className='flex flex-col items-center gap-1'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-primary-pink hidden' />
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p>PRODUCTS</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-primary-pink hidden' />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p>OUR STORY</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-primary-pink hidden' />
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-primary-pink hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                <img onClick={() => { setShowSearch(true); navigate('/collection') }} className='w-5 cursor-pointer' src={assets.search_icon} alt="" />
                <div className='group relative'>
                    <img onClick={() => { navigate('/login') }} className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />

                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5  bg-background-light-pink text-text-dark-charcoal rounded'>
                            <p onClick={() => { }} className='cursor-pointer hover:text-primary-pink'>My Profile</p>
                            <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-primary-pink'>Orders</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-primary-pink'>Logout</p>
                        </div>
                    </div>
                </div>
                <Link to='/cart' className='relative'>
                    <img className='w-5 min-w-5' src={assets.cart_icon} alt="" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-primary-pink text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>
                <img onClick={() => setVisble(true)} className='w-5 cursor-pointer sm:hidden' src={assets.menu_icon} alt="" />
            </div>

            {/* Sidebar Menu For Small Screens */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`} >
                <div className='flex flex-col text-text-dark-charcoal'>
                    <div onClick={() => setVisble(false)} className='flex items-center gap-4 p-3 '>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisble(false)} to="/" className='py-2 pl-6 border'>HOME</NavLink>
                    <NavLink onClick={() => setVisble(false)} to='/collection' className='py-2 pl-6 border'>PRODUCTS</NavLink>
                    <NavLink onClick={() => setVisble(false)} to='/about' className='py-2 pl-6 border'>OUR STORY</NavLink>
                    <NavLink onClick={() => setVisble(false)} to='/contact' className='py-2 pl-6 border'>CONTACT</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar