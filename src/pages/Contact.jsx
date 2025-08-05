import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import WhatsAppPromo from '../components/WhatsAppPromo' // Updated import

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-20'>
        <img className='w-full md:max-w-[480px] rounded-lg' src={assets.contact_img} alt="Contact Pamrose Skin" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-xl text-gray-600'>Get in Touch</p>
          <p className=' text-gray-500'>Have a question about our products or your order? <br /> Reach out to Naledi directly via WhatsApp for the quickest response.</p>
          <p className=' text-gray-500'><b>WhatsApp:</b> +27 69 228 5873</p>
          
          <p className=' font-semibold text-xl text-gray-600 pt-4'>Collection Address</p>
          <p className=' text-gray-500'>IIE Rosebank College, <br /> 239 Pretorius Street, Pretoria, <br />Gauteng, South Africa</p>
        </div>
      </div>

      <WhatsAppPromo /> {/* Updated component */}

    </div>
  )
}

export default Contact