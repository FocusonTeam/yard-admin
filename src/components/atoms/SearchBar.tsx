import React, { forwardRef, useEffect, useState } from "react";
import {HiOutlineSearch} from 'react-icons/hi'

const SearchBar = ({handleChange} : any) => {

  const [keyword, setKeyword] = useState("");

  const onChange = (e : any) => {
    const {name, value} = e.target;
    if(name === "searchbar"){
      setKeyword(value);
    }
  }

  const handleEnterPress = (e:any) => {
    if(e.key === 'Enter'){
      handleChange(keyword);
    }
  }

  return (
    <div className="relative">
      <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3" />
      <input
        name="searchbar"
        type="text"
        onChange={onChange}
        onKeyDown={handleEnterPress}
        placeholder="Search..."
        className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-md pl-11 pr-4"
      />
    </div>
  ) 
};

export default SearchBar;