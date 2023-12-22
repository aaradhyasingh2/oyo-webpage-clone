'use client';
import React from 'react';

const InputBanner = () => {
  return (
    <div className="h-60 bg-gradient-to-r from-red-600 to-red-400">
      <div className="flex justify-center">
        <h1 className="font-bold text-center text-4xl text-white p-6">
          Over 157,000 hotels and homes across 35 countries
        </h1>
      </div>
      <div className="flex justify-center p-10">
        <input
          type="text"
          className="flex justify-center px-3 py-4 border-r-2 border-gray-400 rounded-l-md outline-none w-80 text-lg"
          placeholder="Search by city, hotel, or neighborh..."
        />
        <input
          type="date of month"
          className="flex justify-center px-3 py-4 outline-none border-gray-400 border-r-2"
          placeholder="Search..."
        />
        <input
          type="text"
          className="flex justify-center px-3 py-4 outline-none"
          placeholder="Search..."
        />
        <button className="px-10 py-4 bg-green-500 text-lg rounded-r-md hover:cursor-pointer hover:bg-green-700 text-white">
          Search
        </button>
      </div>
    </div>
  );
};

export default InputBanner;
