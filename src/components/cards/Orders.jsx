import React from 'react';

const Orders = () => {
  const orders = [
    {
      userimg: "https://cdn.pixabay.com/photo/2014/03/25/16/54/user-297566_640.png",
      name: "Wade Warren",
      orderNo: 15478256,
      amount: "124.00",
      status: "Delivered",
    },
    {
      userimg: "https://cdn.pixabay.com/photo/2014/03/25/16/54/user-297566_640.png",
      name: "Jane Cooper",
      orderNo: 48957898,
      amount: "365.02",
      status: "Delivered",
    },
    {
      userimg: "https://cdn.pixabay.com/photo/2014/03/25/16/54/user-297566_640.png",
      name: "Guy Hawkins",
      orderNo: 78953215,
      amount: "45.88",
      status: "Cancelled",
    },
    {
      userimg: "https://cdn.pixabay.com/photo/2014/03/25/16/54/user-297566_640.png",
      name: "Kristin Watson",
      orderNo: 20965732,
      amount: "85.00",
      status: "Pending",
    },
    {
      userimg: "https://cdn.pixabay.com/photo/2014/03/25/16/54/user-297566_640.png",
      name: "Cody Fisher",
      orderNo: 95715200,
      amount: "545.00",
      status: "Delivered",
    },
    {
      userimg: "https://cdn.pixabay.com/photo/2014/03/25/16/54/user-297566_640.png",
      name: "Savannah Nguyen",
      orderNo: 78514568,
      amount: "128.20",
      status: "Delivered",
    },
  ];

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-full xl:w-[65%]">
      <h4 className="text-lg sm:text-xl font-semibold mb-2 text-white">Recent Orders</h4>
      <div className="max-h-[400px] overflow-y-auto">
        <table className="w-full text-xs sm:text-sm md:text-base text-left rtl:text-right text-gray-300">
          <thead className="text-xs sm:text-sm md:text-base text-white border-b dark:border-gray-700">
            <tr>
              <th scope="col" className="px-4 py-2 sm:px-6">Customer</th>
              <th scope="col" className="px-4 py-2 sm:px-14">Order No.</th>
              <th scope="col" className="px-4 py-2 sm:px-14">Amount</th>
              <th scope="col" className="px-4 py-2 sm:px-14">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item, i) => (
              <tr key={i} className="text-xs sm:text-sm md:text-base bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-4 py-3 sm:px-6 text-white flex gap-2 items-center">
                  <img src={item.userimg} alt={item.name} className="h-8 w-8 object-cover p-1 bg-gray-200 rounded-full" />
                  <span>{item.name}</span>
                </td>
                <td className="px-4 py-3 sm:px-14">{item.orderNo}</td>
                <td className="px-4 py-3 sm:px-14">${item.amount}</td>
                <td className={`px-4 py-3 sm:px-14 rounded-full ${item.status === "Delivered" ? 'text-green-500' : 'text-red-500'}`}>
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
