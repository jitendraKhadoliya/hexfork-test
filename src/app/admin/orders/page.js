import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { data } from '../data';
import Sidebar from '../Sidebar';

const orders = () => {
  return (
    <Sidebar>
      <div className="bg-gray-400 min-h-screen">
        <div className="text-gray-50 flex justify-between p-4">
          <h2>Orders</h2>
          <h2>Welcome Back, Clint</h2>
        </div>
        <div className="p-4">
          <div className="w-full m-auto p-4 border rounded-lg bg-gray-50 overflow-y-auto">
            <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer">
              <span>Order</span>
              <span className="sm:text-left text-right">Status</span>
              <span className="hidden md:grid">Last Order</span>
              <span className="hidden sm:grid">Method</span>
            </div>
            <ul>
              {data.map((order, id) => (
                <li
                  key={id}
                  className="bg-red-100 hover:bg-red-400 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <FaShoppingBag className="text-purple-800" />
                    </div>
                    <div className="pl-4">
                      <p className="text-gray-800 font-bold">
                        ${order.total.toLocaleString()}
                      </p>
                      <p className="text-gray-800 text-sm">
                        {order.name.first}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 sm:text-left text-right">
                    <span
                      className={
                        order.status == 'Processing'
                          ? 'bg-green-200 p-2 rounded-lg'
                          : order.status == 'Completed'
                          ? 'bg-blue-200 p-2 rounded-lg'
                          : 'bg-yellow-200 p-2 rounded-lg'
                      }
                    >
                      {order.status}
                    </span>
                  </p>
                  <p className="hidden md:flex">{order.date}</p>
                  <div className="sm:flex hidden justify-between items-center">
                    <p>{order.method}</p>
                    <BsThreeDotsVertical />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default orders;
