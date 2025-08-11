import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-200 bg-background-light-pink pamrose-hero'>

            {/* Hero Left Side */}
            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 sm:px-5'>

                <div className='text-text-dark-charcoal text-center sm:text-left'>
                    <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Discover the Essence of Natural Beauty.</h1>
                    <p className='mb-4'>Our commitment is to pure, effective skincare that makes you glow. Inspired by nature's finest petals.</p>
                    <Link to="/collection">
                        <button className='bg-primary-pink text-white px-8 py-3 text-sm active:bg-pink-700 inline-block sm:block sm:mx-auto'>
                            Shop Now
                        </button>
                    </Link>


                </div>
            </div>

            {/* Hero Right Side */}
            <img className='w-full sm:w-1/2' src={assets.hero_img} alt="Pamrose Skin Products" />
        </div>
    )
}

export default Hero;