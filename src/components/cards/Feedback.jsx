import React from 'react';

const Feedback = () => {
  const data = [
    {
      name: "Jenny Wilson",
      text: "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger with sweet potato fries which was also very good. They were very conscientious about gluten allergies."
    },
    {
      name: "Dianne Russell",
      text: "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service."
    },
    {
      name: "Devon Lane",
      text: "Hamburger with waffle fries and kids' items are teen menu and friendly and tasty, service was great!"
    }
  ];

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-full xl:w-[35%] lg:h-[500px] h-auto overflow-y-auto">
      <h4 className="text-xl font-semibold mb-4 text-gray-100">Customer's Feedback</h4>
      <div className="space-y-2">
        {data.map((item, i) => (
          <div key={i} className="text-gray-100 border-b border-gray-500 pb-2">
            <h5 className="text-lg font-bold">{item.name}</h5>
            <p className="text-yellow-500 text-[22px]">★★★★★</p>
            <p className='text-[15px] text-gray-400 leading-normal'>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
