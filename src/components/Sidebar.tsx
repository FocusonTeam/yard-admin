import React from "react";
import { MdArticle, MdOutlineLogout } from 'react-icons/md';
import { RiHome6Fill, RiUserSettingsFill, RiSettings4Fill, RiInstagramFill } from 'react-icons/ri';
import { NavLink } from "react-router-dom";
import useWindowSize from "../helper/useWindowSize";


const SideBar = () => {

  const windowsize = useWindowSize().windowSize;

  const menus = [
    {iconSm : <RiHome6Fill size="20" />, icon : <RiHome6Fill size="28" />, text : "대시보드", path:"/yard-admin/"},
    {iconSm : <MdArticle size="22" />, icon : <MdArticle size="28" />, text: "아티클", path:"/yard-admin/articles"},
    {iconSm : <RiInstagramFill size="22" />, icon : <RiInstagramFill size="28" />, text: "SNS 관리", path:"/yard-admin/manager-sns"},
    {iconSm : <RiUserSettingsFill size="22" />, icon : <RiUserSettingsFill size="28" />, text: "사용자 관리", path:"/yard-admin/manager-users"},
    {iconSm : <RiSettings4Fill size="22" />, icon : <RiSettings4Fill size="30" />, text: "환경설정", path:"/yard-admin/settings"},
  ];

  // return (
  //   <div className={`${windowsize.innerWidth < 800 ? "w-24" : "w-40"} fixed top-0 left-0 h-screen m-0 flex
  //     flex-col bg-white text-black shadow-lg`} >
  //       {menus.map((menu, index) => {
  //         return(
  //           <NavLink key={index} to={menu.path}>
  //             {windowsize.innerWidth < 800 ? (
  //               <SideBarIcon icon={menu.icon} text={menu.text}/>
  //             ) : (
  //               <SideBarWideIcon icon={menu.iconSm} text={menu.text}/>
  //             )}
  //           </NavLink>
  //         )
  //       })}
  //   </div>
  // )  

  return (
    <div className="bg-white w-24 flex flex-col text-black shadow-md" >
        <div className="flex items-center gap-2 px-2.5 py-3 mb-2 mt-2">
          <img src={require("../assets/images/yardlogo.png")} />
        </div>
        <div className="flex-1 px-2">
          {menus.map((menu, index) => {
            return(
              <NavLink key={index} to={menu.path}>
                <SideBarIcon icon={menu.icon} text={menu.text}/>
              </NavLink>
            )
          })}
        </div>
        {/**하단 부분 */}
        {/* <div className="flex items-center px-2.5 mb-3">
          <span className="text-xl red"><MdOutlineLogout/></span>
          Logout
        </div> */}
    </div>
  )  
}

const SideBarIcon = ({icon, text} : any) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);

const SideBarWideIcon = ({icon, text} : any) => (
  <div className="sidebar-wide-icon group">
    {icon}
    <span className="sidebar-wide-text">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;