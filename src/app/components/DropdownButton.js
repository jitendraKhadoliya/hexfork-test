
import React, { useState } from 'react'

import Link from "next/link";
import {
  RxTriangleDown,
  RxTriangleUp,
  RxTriangleRight,
  RxTriangleLeft,
} from "react-icons/rx";

const DropdownButton = ({ name, items, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div 
      className='bg-transparent h-20'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
        className={`hidden lg:px-2 ease-in mt-12 duration-500 text-white rounded-lg lg:mr-1 lg:flex lg:items-center lg:justify-center z-9 ${isOpen ? 'bg-slate-800 scale-110':''}`}
        >
          {name}
          {isOpen ? (
            <RxTriangleUp size={30} color="White" />
          ) : (
            <RxTriangleDown size={30} color="White" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="fixed text-white ease-in-out -mt-7 duration-500 bg-slate-900 border-t-4 border-red-700 rounded-lg z-10"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <ul className="py-2">
            {items.map((item, index) => (
              <li key={index} className="text-white hover:bg-slate-700 mx-3 p-2  rounded-md">
                <Link href={links[index]}>


                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default DropdownButton;
