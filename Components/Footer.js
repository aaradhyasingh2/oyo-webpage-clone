import { faFacebook, faInstagram, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react'

const Footer = () => {
  return (
    <div className='h-full bg-gray-500 text-white'>
      <div className='flex items-center gap-10 pt-10 px-10 border-b-2 border-x-white pb-5'>
        <div className="flex items-center justify-between gap-10">
          <h1 className='text-4xl font-extrabold'>OYO</h1>
          <p className="font-bold text-2xl">World leading chain of hotels and homes</p>
        </div>
        <div className='flex items-center justify-between gap-5'>
          <p className="font-bold text-2xl">Join our network and grow your business!</p>
          <button className='font-semibold px-3 py-3 bg-white text-gray-700 rounded-md'>List your poperty</button>
        </div>
      </div>
      <div className='flex mx-20 border-b-2 border-white pb-1 pt-10'>
        {/* button-area */}
        <div className="flex flex-col pr-5 border-r-2 my-3 border-gray-200">
          <h1>Download OYO app for exciting offers.</h1>
          <div className='flex gap-6 py-6 px-3'>
            <button className='bg-black text-lg text-white py-2 px-4 rounded-md cursor-pointer border-none outline-none'>App Store</button>
            <button className='bg-black text-lg text-white py-2 px-4 rounded-md cursor-pointer border-none outline-none'>Google Play</button>
          </div>
        </div>
        {/* aboutsection */}
        <div className='flex mx-10 my-5 pr-5 border-r-2 border-gray-200'>
          <ul>
            <li className='pr-12 cursor-pointer pb-2 hover:underline'>About Us</li>
            <li className='pr-12 cursor-pointer pb-2 hover:underline'>Teams / Careers</li>
            <li className='pr-12 cursor-pointer pb-2 hover:underline'>Blogs</li>
            <li className='pr-12 cursor-pointer hover:underline'>Support</li>
          </ul>
          <ul>
            <li className='pr-10 cursor-pointer pb-2 hover:underline'>Official OYO Blog</li>
            <li className='pr-10 cursor-pointer pb-2 hover:underline'>Investor Relations</li>
            <li className='pr-10 cursor-pointer pb-2 hover:underline'>OYO Circle</li>
            <li className='pr-10 cursor-pointer hover:underline'>OYO Frames</li>
          </ul>
        </div>
        {/* termconditionsection */}
        <div className='flex my-5 pr-5 border-r-2 border-gray-200'>
          <ul>
            <li className='pr-10 cursor-pointer pb-2 hover:underline'>Terms and conditions</li>
            <li className='pr-10 cursor-pointer pb-2 hover:underline'>Guest Policies</li>
            <li className='pr-10 cursor-pointer pb-2 hover:underline'>Privacy Policy</li>
            <li className='pr-10 cursor-pointer pb-2 hover:underline'>Trust And Safety</li>
          </ul>
          <ul>
            <li className='pr-10 cursor-pointer pb-2 hover:underline'>Cyber Security</li>
            <li className='pr-10 cursor-pointer pb-2 hover:underline'>Cyber Security Awareness</li>
            <li className='pr-10 cursor-pointer pb-2 hover:underline'>Responsible Disclosure</li>
            <li className='pr-10 cursor-pointer pb-2 hover:underline'>Advertise your Homes</li>
          </ul>
        </div>
      </div>
      {/* socialicon-section */}
      <div className='flex justify-between mx-28 pt-8 pb-8'>
        <div className='flex w-48 gap-5'>
          <FontAwesomeIcon icon={faFacebook} className='w-5 h-5' />
          <FontAwesomeIcon icon={faInstagram} className='w-5 h-5' />
          <FontAwesomeIcon icon={faTwitter} className='w-5 h-5' />
          <FontAwesomeIcon icon={faYoutube} className='w-5 h-5' />
          <FontAwesomeIcon icon={faPinterest} className='w-5 h-5' />
        </div>
        <div>
          reserved © 2023
        </div>
      </div>
    </div >
  )
}

export default Footer;