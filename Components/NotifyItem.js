'use client';
import React from 'react';
import Image from 'next/image';

const NotifyItem = () => {
    return (
        <div className="flex my-14 justify-between items-center border-2 rounded border-gray-300 mb-5">
            <div className="flex items-center">
                <Image src={"/fire.jpg"} alt='fireimg' width={200} height={200} className='w-20 h-20 rounded-full mr-5' />
                <div className='text-lg'>
                    <h1 className='font-bold'>Get access to exclusive deals</h1>
                    <p className='text-gray-400 line-climb-1'>Only the best deals reach your inbox</p>
                </div>
            </div>
            <div className="flex">
                <label className='absolute ml-3 -mt-3 bg-white text-gray-500'>Your email</label><input type="email" placeholder='e.g., john@email.com' className='px-6 py-3 w-80 h-12 border border-gray-300 outline-none rounded-md mr-5' />
                <button className='text-md font-bold rounded-md bg-red-600 w-40 h-12 mr-10 text-white' type='submit'>Notify me</button>
            </div>
        </div>
    )
}

export default NotifyItem;