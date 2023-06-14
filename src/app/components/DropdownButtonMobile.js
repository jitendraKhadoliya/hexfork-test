
import React, { useState, useEffect, useRef } from 'react';



import Link from "next/link";
import {
  RxTriangleDown,
  RxTriangleUp,
  RxTriangleRight,
  RxTriangleLeft,
} from "react-icons/rx";


const DropdownButtonMobile = ({ name, items, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownButtonRef = useRef(null);


  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };


  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      event.target !== dropdownButtonRef.current
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <button

        ref={dropdownButtonRef}
        className={`text-lg flex mb-4 px-8 py-2 ease-in-out items-centre justify-center duration-500 hover:bg-slate-700 text-white rounded-lg lg:mr-3 lg:flex lg:items-center lg:justify-center
        ${isOpen ? "bg-slate-700" : ""}`}
        onClick={toggleDropdown}


      >
        {name}
        {isOpen ? (
          <RxTriangleUp size={30} color="White" />
        ) : (
          <RxTriangleDown size={30} color="White" />
        )}
      </button>

      {isOpen && (

        <div  ref={dropdownRef} className="fixed px-6 mt-16 rounded-lg text-white bg-gray-900 ease-in-out duration-500 border-t-4 border-red-700">
          <ul className="py-2">
            {items.map((item, index) => (
              <li key={index} className="text-white hover:bg-slate-700 mx-3 p-2 rounded-md ease-in-out duration-500">
                <Link href={`${links[index]}`}>


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

export default DropdownButtonMobile;
