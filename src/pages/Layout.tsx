import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/Sidebar';

export default function Layout() {
  return (
    <div className='flex flex-row bg-slate-100 h-screen w-screen'>
      <SideBar />
      <div className='flex-1'>
        <Header />
        <div className="bg-slate-100">{<Outlet />}</div>
      </div>
    </div>
  )
}

export function HeaderLayout() {
  return (
    <div className='flex flex-col'>
        <Header />
        <div className="bg-slate-100">{<Outlet />}</div>
    </div>
  )
}
