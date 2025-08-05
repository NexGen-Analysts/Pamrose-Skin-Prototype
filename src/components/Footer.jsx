import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
          <img className='mb-5 w-32' src={assets.logo} alt="Pamrose Skin" />
          <p className='w-full md:w-2/3 text-gray-600'>Pamrose Skin was founded on the belief that skincare should be a luxurious ritual, not a routine. We blend science and nature to create gentle yet powerful formulas for radiant skin.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li className='cursor-pointer hover:text-primary-pink'><Link to="/">Home</Link></li>
            <li className='cursor-pointer hover:text-primary-pink'><Link to="/collection">Products</Link></li>
            <li className='cursor-pointer hover:text-primary-pink'><Link to="/about">Our Story</Link></li>
            <li className='cursor-pointer hover:text-primary-pink'><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>239 Pretorious Street, Pretoria, GP</li>
            <li>+27 69 228 5873</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>© 2025 Pamrose Skin. Powered by Nexgen Technology</p>
      </div>

    </div>
  )
}

export default Footer