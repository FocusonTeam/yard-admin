import React, { forwardRef, useState } from "react";
import {HiOutlineSearch} from 'react-icons/hi'

const SearchBar = () => {

  const [searchKeyword, setSearchKeyword] = useState("");


  return (
    <div className="relative">
      <HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3" />
      <input
        name="searchbar"
        type="text"
        placeholder="Search..."
        className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-md pl-11 pr-4"
      />
    </div>
  ) 
};

export default SearchBar;