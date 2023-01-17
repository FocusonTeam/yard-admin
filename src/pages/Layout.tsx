import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/Sidebar';
import { isLoggedVar } from '../models/fragmentVar';
import { useReactiveVar } from '@apollo/client';
import { getLoginToken } from '../utils/storageUtils';
import ModalBase from 'common/ModalBase';
import CardModal from 'components/atoms/CardModal';


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

  // const [isActive, setIsActive] = useState(false);
  // const onClickModalOn = () => {
  //   setIsActive(true);
  // };
  // const onClickModalOff = () => {
  //   setIsActive(false);
  // };
  // const onClickCardRemove = () => {
  //   alert('이벤트 실행');
  // };


  return (
    <div className='flex flex-col'>
        <Header />
        <div className="bg-slate-100">{<Outlet />}</div>
    </div>
  )
}
