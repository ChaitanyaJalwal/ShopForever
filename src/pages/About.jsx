import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-end gap-6 md:w-2/4 text-gray-600'>
          <p>
            Founded with the vision of making quality products accessible to everyone, Shop Forever began its journey in 2024 as a small e-commerce platform. Our goal was to simplify online shopping while offering a wide variety of products that cater to modern lifestyles. What started as a small venture has quickly grown into a trusted name in the industry, thanks to our dedication to customer satisfaction, innovation, and sustainability. With a focus on delivering excellent service and a user-friendly shopping experience, Shop Forever continues to evolve and expand, staying true to the values that sparked its foundation.
          </p>
          <p>
            At the heart of Shop Forever is our passion for bringing value to our customers. We continually update our product catalog to feature the latest in fashion, electronics, home goods, and more, ensuring that you always find what you're looking for. We also emphasize sustainability by offering eco-friendly products and responsible packaging options. Whether you're shopping for yourself, your family, or for a special occasion, Shop Forever is your one-stop destination for quality, variety, and convenience. Let us help you find what you love, and enjoy shopping that's made to last—forever.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Shop Forever, our mission is to deliver a seamless and enjoyable shopping experience by providing a diverse range of high-quality products at competitive prices. We aim to create lasting relationships with our customers through exceptional service, innovation, and a commitment to sustainability, making every shopping journey simple, convenient, and memorable.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
          <Title text1={"WHY"} text2={"CHOOSE US"}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At Shop Forever, we prioritize quality in everything we offer. Each product goes through a thorough selection process to ensure it meets our high standards. From sourcing trusted suppliers to conducting regular quality checks, we are dedicated to providing you with reliable, durable, and premium products that you can trust with every purchase.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Our user-friendly platform allows you to browse, select, and purchase products effortlessly, from the comfort of your home. With multiple payment options, fast delivery, and easy returns, we ensure a hassle-free shopping experience every time.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>We believe that excellent customer service is key to building trust and loyalty. Our dedicated support team is always ready to assist you with any inquiries, concerns, or feedback. We strive to resolve issues quickly and efficiently, ensuring that your satisfaction is our top priority.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
