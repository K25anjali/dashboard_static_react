import { FaSortUp } from "react-icons/fa";
import ProgressBar from "./ProgressBar";
import { useEffect, useState } from "react";

const NetProfitCard = () => {
  const netProfit = 6759.25;
  const percent=70 

  return (
    <div className="bg-gray-800 w-full md:w-[35%] rounded-md mb-4 p-2">
      
      <div className="flex justify-between sm:flex-col lg:flex-row">
      <div className="flex flex-col justify-between">
      <h1 className="text-md font-semibold lg:mb-2 sm:mb-6">Net Profit</h1>
      <div className="flex flex-col lg:flex-col sm:flex-row lg:gap-0 sm:gap-7">
        <p className="xl:text-5xl  mb-4 text-3xl font-bold text-gray-100 tracking-tight">$ {netProfit.toFixed(2)}</p>
        <span className="text-green-500 flex items-center">
          <FaSortUp size={20} className='mt-3'/>3%
        </span>
        </div>
        </div>
        <div className="flex flex-col items-center lg:mt-0 sm:mt-8">
      <ProgressBar percent={percent} circleWidth='140'/>
      </div>
    </div>
    </div>
  );
};

export default NetProfitCard;
