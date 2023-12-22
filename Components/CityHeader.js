import React from 'react';
import InputBanner from '@/Components/InputBanner';

const CityHeader = () => {
  const cityNameList = [
    {
      name: 'Banglore',
    },
    {
      name: 'Chennai',
    },
    {
      name: 'Delhi',
    },
    {
      name: 'Gurgaon',
    },
    {
      name: 'Hyderabad',
    },
    {
      name: 'Kolkata',
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-between bg-gray-100 px-10 py-3 h-12">
        {cityNameList.map((cityName) => {
          return (
            <>
              <span key={cityName.name}>{cityName.name}</span>
            </>
          );
        })}
      </div>
      <InputBanner/>
    </div>
  );
};

export default CityHeader;
