import React, { useState } from 'react';
import { BiSolidHome } from "react-icons/bi";
import { MdOutlineInsertChart } from "react-icons/md";
import { BsClipboardCheck } from "react-icons/bs";
import { TbShoppingBagCheck } from "react-icons/tb";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('home');

  const handleSetActive = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="h-screen fixed left-0 bg-gray-800 top-0 py-4 hidden md:block">
      <nav className='flex flex-col h-full justify-between items-center'>
        <div className="flex flex-col items-center space-y-10">
          <Link 
            to="/" 
            className={`mt-16 px-4 hover:text-blue-500 ${activeItem === 'home' ? 'text-blue-500 border-l-4 border-blue-500' : ''}`}
            onClick={() => handleSetActive('home')}
          >
            <BiSolidHome size={29} />
          </Link>
          <Link 
            to="/chart" 
            className={`px-4 hover:text-blue-500 ${activeItem === 'chart' ? 'text-blue-500 border-l-4 border-blue-500' : ''}`}
            onClick={() => handleSetActive('chart')}
          >
            <MdOutlineInsertChart size={29} />
          </Link>
          <Link 
            to="/checklist" 
            className={`px-4 hover:text-blue-500 ${activeItem === 'checklist' ? 'text-blue-500 border-l-4 border-blue-500' : ''}`}
            onClick={() => handleSetActive('checklist')}
          >
            <BsClipboardCheck size={26} />
          </Link>
          <Link 
            to="/shopping" 
            className={`px-4 hover:text-blue-500 ${activeItem === 'shopping' ? 'text-blue-500 border-l-4 border-blue-500' : ''}`}
            onClick={() => handleSetActive('shopping')}
          >
            <TbShoppingBagCheck size={30} />
          </Link>
        </div>
        <div>
          <Link to="/" className='hover:text-blue-500'>
            <AiOutlineLogout size={27} />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
