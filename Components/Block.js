import React from 'react';
import Image from 'next/image';

const Block = ({title, para}) => {
  return (
    <>
      <div className="border-r border-gray-300 w-60 h-full flex items-center px-3">
        <Image
          src={'/demo.svg'}
          alt='demoimg'
          width={200}
          height={200}
          className="w-10 h-10 rounded-full mr-5"
        />
        <div>
          <h1 className="font-bold ">{title}</h1>
          <p className="text-gray-400 text-xs line-camp-1">
            {para}
          </p>
        </div>
      </div>
    </>
  );
};

export default Block;
