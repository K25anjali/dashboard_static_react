import React from 'react';
import revenue from '/public/revenue.png';
import {BsCartPlusFill, BsCartCheckFill, BsCartXFill } from "react-icons/bs";
import { FaSortDown, FaSortUp } from "react-icons/fa";

const Status = () => {
  return (
    <div className="w-full md:w-[65%] grid grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <div className="relative inline-block  bg-blue-500 bg-opacity-25 p-2 rounded-lg"> 
        <BsCartPlusFill size={30} color='#0b67dc'/>
        </div>
        <h4 className="font-semibold">Total Orders</h4>
        <div className="flex justify-between items-center md:mt-3 mt-1">
          <p className="md:text-3xl text-2xl font-bold">75</p>
          <span className="text-green-500 flex items-center"><FaSortUp size={20} className='mt-3'/>3%</span>
         </div>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <div className='relative inline-block bg-green-800 bg-opacity-25 p-2 rounded-lg'>
        < BsCartCheckFill size={30} color='green'/>
        </div>
        <h4 className="font-semibold">Total Delivered</h4>
        <div className="flex justify-between items-center md:mt-3 mt-1">
          <p className="md:text-3xl text-2xl font-bold">70</p>
          <span className="text-red-500 flex item-center"><FaSortDown size={20} />3%</span>
        </div>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <div className='relative inline-block bg-red-500 bg-opacity-50 rounded-lg p-2'>
          <BsCartXFill size={30} color='coral'/>
        </div>
        <h4 className="font-semibold">Total Cancelled</h4>
        <div className="flex justify-between items-center md:mt-3 mt-1">
          <p className="md:text-3xl text-2xl font-bold">05</p>
          <span className="text-green-500 flex items-center"><FaSortUp size={20} className='mt-3'/>3%</span>
        </div>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <div className='relative inline-block bg-[#ba205d] bg-opacity-30 rounded-lg p-2'>
          <img src={revenue} alt="" className='w-8 h-8 object-contain' />
        </div>
        <h4 className="font-semibold">Total Revenue</h4>
        <div className="flex justify-between items-center md:mt-3 mt-1">
          <p className="md:text-3xl text-2xl font-bold">$12k</p>
          <span className="text-red-500 flex item-center"><FaSortDown size={20} />3%</span>
        </div>
      </div>
    </div>
  );
}

export default Status;
