import React from 'react';
import Block from './Block';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="flex items-center justify-between h-20 border-gray-300 border-b-2 px-2">
      <Image
        src={'/logo.png'}
        alt="notfoundimg"
        width={200}
        height={200}
        className="w-28 h-28"
      />
      <div className="h-full flex">
        <Block title={'Become a Member'} para={'Additional 10% off on stays'} />
        <Block title={'OYO for Business'} para={'Trusted by 5000 Corporates'} />
        <Block title={'List your property'} para={'Start earning in 30mins'} />
        <Block title={'0124-6201611'} para={'Call us to Book now'} />
        <div className="h-full flex items-center">
          <Image
            src={'/contact.png'}
            alt='contactimg'
            width={200}
            height={200}
            className="w-9 h-9 rounded-full ml-2 mr-1"
          />
          <button className="font-bold text-lg">Login/Singup</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
