import React from 'react';
import Header from './Header';
import TopCards from './TopCards';
import BarChart from './BarChart';
import RecentOrders from './RecentOrders';
import Sidebar from './Sidebar';

const page = () => {
  return (
    <main className='bg-gray-400 min-h-screen'>
    <div className='h-20 bg-black'></div>
      <Sidebar>
        <Header />
        <TopCards />
        <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
          <BarChart />
          <RecentOrders />
        </div>
      </Sidebar>
    </main>
  )
}

export default page