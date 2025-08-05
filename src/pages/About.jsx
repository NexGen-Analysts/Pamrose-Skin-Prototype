import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import WhatsAppPromo from '../components/WhatsAppPromo' // Updated import

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'OUR'} text2={'STORY'} />
      </div>

      {/* Founder Section */}
      <div className='my-10 flex flex-col md:flex-row gap-16 items-center'>
        <img className='w-full md:max-w-[400px] rounded-lg aspect-square object-cover' src={assets.about_img} alt="Naledi Makama, Founder of Pamrose Skin" />
        <div className='flex flex-col justify-center gap-4 text-text-dark-charcoal'>
          <h3 className='text-2xl font-semibold'>Meet the Founder</h3>
          <p>Pamrose Skin was founded by Naledi Makama, a 3rd year Bachelor of Information Technology student at IIE Rosebank College. As a passionate skincare enthusiast and the Project Manager for NexGen Consultants, Naledi was frustrated with the harsh, chemical-laden products on the market that didn't suit sensitive skin.</p>
          <p>Inspired by South Africa's rich biodiversity, she created Pamrose Skin to offer gentle, effective, and indulgent skincare rituals that heal, not harm. Her vision is to turn your daily routine into an act of self-love and glow.</p>
        </div>
      </div>

      {/* Development Team Section */}
      <div className='my-20 bg-background-light-pink p-10 rounded-lg'>
        <div className='text-xl py-4 text-center'>
          <Title text1={'POWERED BY'} text2={'NEXGEN CONSULTANTS'} />
        </div>
        <div className='flex flex-col md:flex-row gap-10 items-center'>
          <div className='flex flex-col justify-center gap-4 text-text-dark-charcoal md:w-2/3'>
            <h3 className='text-2xl font-semibold'>The Team Behind the Tech</h3>
            <p>The Pamrose Skin digital experience is proudly designed and developed by NexGen Consultants. Under the project management of Naledi Makama, our team of dedicated developers and analysts built this platform to bring the Pamrose vision to life.</p>
            <p>For inquiries about web development and data analytics solutions, you can contact our team.</p>
            <div className='text-sm'>
                <p><b>Email:</b> info@nexgen-consultants.placeholder.com</p>
                <p><b>Phone:</b> +27 12 345 6789</p>
            </div>
          </div>
          <img className='w-48' src={assets.nexgen_logo} alt="NexGen Consultants Logo" />
        </div>
      </div>

      <WhatsAppPromo /> {/* Updated component */}

    </div>
  )
}

export default About