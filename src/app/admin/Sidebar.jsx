import Link from 'next/link';
import React from 'react';
import { RxDashboard, RxSketchLogo } from 'react-icons/rx';
// RxPerson
import { HiOutlineShoppingBag } from 'react-icons/hi';
// import { FiSettings } from 'react-icons/fi';

const Sidebar = ({ children }) => {
  return (
    <div className='flex'>
      <div className='w-20 min-h-screen p-4 bg-black
    border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link href='/admin'>
            <div className='bg-red-800 text-white p-3 rounded-lg inline-block'>
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className='border-b-[1px] border-red-200 w-full p-2'></span>
          <Link href='/admin/customers'>
            <div className='bg-red-100 hover:bg-red-400 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href='/admin/orders'>
            <div className='bg-red-100 hover:bg-red-400 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
        </div>
      </div>
      <main className='w-full'>{children}</main>
    </div>
  )
}

export default Sidebar
