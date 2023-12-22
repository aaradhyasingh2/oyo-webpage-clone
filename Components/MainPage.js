import React from 'react';
import Header from './Navbar';
import CityHeader from './CityHeader';
import Head from 'next/head';
import Image from 'next/image';
import NotifyItem from './NotifyItem';
import Footer from './Footer';

const MainPage = () => {
  return (
    <div>
      <Head>
        <title>
          OYO: India`s Best Online Hotel Booking site for sanitized stay.
        </title>
        <link rel={'icon'} href={'/icon.png'}></link>
      </Head>
      <Header />
      <CityHeader />
      <div className="mx-20">
        <div className="my-14">
          <Image
            src={'/banner1.avif'}
            width={200}
            height={200}
            alt="bannerimg"
            className="h-60 w-full"
          />
        </div>
        <div className="mb-14">
          <Image
            src={'/banner2.avif'}
            width={200}
            height={200}
            alt="banner2img"
            className="h-30 w-full"
          />
        </div>
        <NotifyItem />
      </div>
      <div className='w-full h-full bg-gray-100 pt-20 flex justify-between pb-10'>
        {/* img area div below */}
        <div className="flex ml-20 flex-col pt-5">
          <div className='flex'>
            <Image src={'/UAE.avif'} alt='img' width={200} height={200} className='w-28 h-32 mt-16 ml-5'/>
            <Image src={'/nepal.avif'} alt='img' width={200} height={200} className='w-32 h-32 mt-4 ml-16' />
            <Image src={'/china.avif'} alt='img' width={200} height={200} className='w-28 h-32 -mt-5 ml-10' />
          </div>
          <div className='flex'>
            <Image src={'/India.avif'} alt='img' width={200} height={200} className='w-32 h-32 -mt-5 ml-36' />
            <Image src={'/Indonesia.avif'} alt='img' width={200} height={200} className='w-28 h-28 mt-10 ml-4' />
            <Image src={'/Malaysia.avif'} alt='img' width={200} height={200} className='w-28 h-28 -mt-20 -ml-6' />
          </div>
        </div>
        {/* textarea div below */}
        <div className="flex flex-col mr-20">
          <h1 className='font-bold text-3xl'>World leading chain of hotels and homes</h1>
          <p className='py-8'>More Destinations. More Ease. More Affordable.</p>
          <div className='flex flex-row'>
            <div>
              <h1 className='font-semibold text-2xl text-center'>35</h1>
              <p>Countries</p>
            </div>
            <span className='text-gray-300 text-5xl px-4'>/</span>
            <div>
              <h1 className='font-semibold text-2xl text-center'>157,000+</h1>
              <p>Hotels & Homes</p>
            </div>
          </div>
          <div className='flex py-10 flex-col'>
            <ul className='flex gap-x-44'>
              <li><span className='inline-block bg-green-500 w-2 h-2 mr-1 rounded'></span>India</li>
              <li><span className='inline-block w-2 h-2 mr-1 rounded bg-red-500'></span>China</li>
              <li><span className='inline-block w-2 h-2 mr-1 rounded bg-orange-500'></span>Malaysia</li>
            </ul>
            <ul className='flex gap-x-40 py-5'>
              <li><span className='inline-block w-2 h-2 mr-1 rounded bg-blue-400'></span>Nepal</li>
              <li><span className='inline-block w-2 h-2 mr-1 rounded bg-pink-500'></span>Indonesia</li>
              <li><span className='inline-block w-2 h-2 mr-1 rounded bg-violet-500'></span>UAE</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
