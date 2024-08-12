import { LuGoal } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { CiBurger } from "react-icons/ci";
import { BiDish } from "react-icons/bi";

const Details = () => {
    const data = [
        {
            icon: <LuGoal size={26} color="#eb4034" />,
            name: 'Goals',
            bgcolor: 'rgba(235, 64, 52, 0.25)' 
        },
        {
            icon: <CiBurger size={26} color="#5d79a9" />,
            name: 'Popular Dishes',
            bgcolor: 'rgba(93, 121, 169, 0.25)' 
        },
        {
            icon: <BiDish size={26} color="#00e095" />,
            name: 'Menus',
            bgcolor: 'rgba(0, 224, 149, 0.25)' 
        },
    ];

    return (
        <div className="bg-gray-800 p-4 rounded-md mb-4 w-full md:w-[35%] flex flex-col justify-around">
            {data.map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-gray-700 py-2">
                    <div className="flex items-center space-x-3">
                        <div 
                            className="rounded-full md:p-3 p-1" 
                            style={{ backgroundColor: item.bgcolor }}
                        >
                            {item.icon}
                        </div>
                        <span className="font-semibold text-md">{item.name}</span>
                    </div>
                    <div className="bg-gray-100 bg-opacity-15 rounded-full md:p-3 p-1">
                        <IoIosArrowForward fontWeight={700} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Details;
