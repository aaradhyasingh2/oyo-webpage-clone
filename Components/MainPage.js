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
      <Footer/>
    </div>
  );
};

export default MainPage;
