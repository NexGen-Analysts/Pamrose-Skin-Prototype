import React from 'react'
import { assets } from '../assets/assets'

const WhatsAppPromo = () => {
return (
    <div className='text-center my-20 p-10 bg-background-light-pink rounded-lg'>
        <p className='text-2xl font-medium text-text-dark-charcoal'>Join Our WhatsApp Community!</p>
        <p className='text-gray-500 mt-3'>Be the first to know about new products, exclusive deals, and skincare tips directly from Naledi. Join our community by saving our number and sending "Hello"!</p>
        <div className='mt-6'>
            <a 
                href="https://wa.me/27692285873" 
                target="_blank" 
                rel="noopener noreferrer" 
                className='bg-[#25D366] text-white text-sm font-semibold px-10 py-4 rounded-full transition-transform hover:scale-105'
            >
                CHAT ON WHATSAPP
            </a>
        </div>
    </div>
)
}

export default WhatsAppPromo