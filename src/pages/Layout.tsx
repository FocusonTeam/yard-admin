import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
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
  
  //TODO :: regenerate token 하기 전, accesstoken이 만료되는 경우, 유저가 재로그인 혹은 연장 선택

  return (
    <div className='flex flex-col'>
        <Header />
        <div className="bg-slate-100">{<Outlet />}</div>
    </div>
  )
}
