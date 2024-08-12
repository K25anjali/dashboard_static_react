import { FaRegBell } from 'react-icons/fa';
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiSearch } from 'react-icons/fi';
import menu from '/public/menu.png';

const Header = () => {
  const icons = [
    { icon: <MdOutlineEmail size={20} />, key: 'email' },
    { icon: <IoSettingsOutline size={20} />, key: 'settings' },
    { icon: <FaRegBell size={20} />, key: 'bell' },
  ];

  return (
    <header className="flex justify-between items-center mb-6 bg-gray-800 sticky top-0 py-4 px-4 z-50">
      <div className="flex items-center sm:gap-5 gap-2">
        <div>
          <img src={menu} alt="menu" className="md:h-9 md:w-9 sm:h-8 sm:w-8 w-7 object-contain" />
        </div>
        <div className="flex items-center border sm:w-72 w-40 border-gray-600 rounded-md px-2 shadow-md">
          <FiSearch size={16} className="text-white mr-1 " />
          <input type="text" placeholder="Search" className="bg-transparent md:p-2 rounded-lg focus:outline-none placeholder:text-sm " />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        {icons.map((item) => (
          <div key={item.key} className="hidden md:block bg-gray-100 bg-opacity-15 rounded-full p-2">
            {item.icon}
          </div>
        ))}
        <div>
          <img src="https://cdn.pixabay.com/photo/2014/03/25/16/54/user-297566_640.png" alt="user" className="h-8 w-8 object-cover p-1 bg-gray-200 rounded-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;
