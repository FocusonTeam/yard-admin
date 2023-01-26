import { Fragment, useCallback, useEffect, useState } from 'react'
import { Listbox, Transition } from "@headlessui/react";
import {AiOutlineCheck, AiFillCaretDown} from 'react-icons/ai';
import { useGetAreasLazyQuery, useGetArticleCategoriesLazyQuery } from '../../generated/graphql';
import { SelectModel } from 'models/models';

// const areas = [
//   { id: 0, name: '모든 지역'},
//   { id: 1, name: '제주도'},
//   { id: 3, name: '부산' },
//   { id: 4, name: '강릉' },
//   { id: 5, name: '군산' },
//   { id: 6, name: '경주' },
//   { id: 7, name: '전주' },
//   { id: 9, name: '서울' },
//   { id: 10, name: '여수' },
//   { id: 11, name: '영국' },
//   { id: 13, name: '일본' },
//   { id: 12, name: '베트남'},
// ]

// const categories = [
//   { id: 1, name : '카테고리 선택'},
//   { id: 2, name : '야드의 이야기'},
//   { id: 3,name : '제주의 이야기를 살피다'},
//   { id: 4,name : '☕️ 제주의 이야기를 마시다'},
//   { id: 5,name : '☕️ 부산의 이야기를 마시다'},
//   { id: 6,name : '☕️ 강릉의 이야기를 마시다'},
// ];

const devices = [
  {id: 0, name: '디바이스 선택'},
  {id :1, name : 'iPhone 11'},
  {id :2, name : 'iPhone 14 Pro Max'},
  {id :3, name : 'Galaxy S21'},
  {id :4, name : 'Galaxy Z Flip 3'}
]

export default function SelectBox({theme, picked, handleChange, ...props} : any) {

  const [areaResult, setAreaResult] = useGetAreasLazyQuery();
  const [categoryResult, setCategoryResult] = useGetArticleCategoriesLazyQuery();

  const [selected, setSelected] = useState({id: 0, name : "선택해주세요"});
  const [selectList, setSelectList] = useState<SelectModel[]>([]);

  useEffect(() => {
    if(picked !== null || picked !== undefined){
      handleChange(selected.id);
    }
  }, [picked, selected]);

  useEffect(() => {
    console.log("theme", theme);
    switch(theme){
      case('categories'):
        getCategoryList();
        break;
      case('areas'):
        getAreaList();
        break;
      case('device'):
        getDeviceList();
        break;
      default:
        break;
    }
  }, [setSelectList]);

  const getAreaList = async() => {
    const result = await areaResult({});
    if(result.data?.getAreas){
      let datalist = result.data?.getAreas.map((item) => {
        return {id: item.id, name: item.region2depth}
      })

      datalist = datalist.concat({id: 0, name: '모든 지역'});
      datalist = datalist.sort(function(a,b){
        return a.id - b.id;
      })
      setSelectList(datalist);
    }
    if(result.error){
      console.log("area 못 불러와요");
    }
  };

  const getCategoryList = async() => {
    const result = await categoryResult({});
    if(result.data?.getArticleCategories){
      const datalist = result.data?.getArticleCategories.map((item) => {
        return {id: item.id, name: item.category}
      })
      setSelectList(datalist);
    }
    if(result.error){
      console.log("category 못 불러와요");
    }
  };

  const getDeviceList = () => {
    setSelectList(devices);
    console.log("device selectList", selectList);
  };



  return (
    <div className="top-16 w-72">
      <Listbox 
        value={selected} 
        onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selectList.find(i => i.id === picked)?.name || selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <AiFillCaretDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {selectList.map((item, idx) => (
                <Listbox.Option
                  key={idx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {item.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <AiOutlineCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
              </Listbox.Options>
            </Transition>
          </div>
      </Listbox>
    </div>)
}
