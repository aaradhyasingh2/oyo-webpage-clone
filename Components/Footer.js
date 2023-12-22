import Image from 'next/image';
import React from 'react'

const Footer = () => {
  return (
    <div className='h-80 bg-gray-500 text-white'>
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
      <div className="flex items-center pt-10 px-10">
        <div className="flex items-center justify-between border-r-2 border-white px-3">
          <h1 className='text-lg'>Download OYO app for exciting offers.</h1>
          <div className="flex items-center justify-between">
            <a href='#' className='bg-black w-36 px-2 h-24 py-3 text-white rounded-md'>
              <Image src={"demo.svg"} alt={'demoimg'} width={50} height={50} className='w-5 h-5' />
              <span className='text-sm'>Download on the</span>
              <span className='font-extrabold text-xl line-clamp-1'>App Store</span>
            </a>
            <a href='' className='w-24 h-24 bg-black text-white px-3 py-2 gap-5'>
              <Image src={''} alt='playstoreicon' width={200} height={200} className='w-5 h-5' />
              <span className="text-sm line-clamp-1">Get it on</span>
              <span className="font-extrabold text-2xl">Google Play</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;