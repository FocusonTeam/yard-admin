import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { COLORS } from 'styles/colors';
import { CreateAreaInput } from '../generated/graphql';


interface AreaInputCellProps {
  code: string;
  name: string;
  latitude: string;
  longitude: string;
  region1depth: string;
  region2depth: string;
  handleUpdate: (areaItem : CreateAreaInput) => void;
}

export const AreaInputCell = ({name, code, latitude, longitude, region1depth, region2depth, handleUpdate}: AreaInputCellProps) => {

  const [areaItem, setAreaItem] = useState<CreateAreaInput>();

  const handleChange = (e : any) => {
    const {name, value} = e.target;
    if(name === 'activate'){
      if(value === "T"){
        setAreaItem({...areaItem!, [name]: true});
      }else{
        setAreaItem({...areaItem!, [name]: false});
      }
    }else{
      setAreaItem({...areaItem!, [name] : value})
    }
  };

  useEffect(() => {
    console.log(areaItem);
  }, [areaItem]);

  useEffect(() => {
    setAreaItem({...areaItem!, 
      name: name, 
      code: code, 
      latitude: latitude,
      longitude: longitude,
      region1depth: region1depth,
      region2depth: region2depth,
    });
  }, [])

  return (
    <div className='flex flex-col p-3 border-b-1 content-center'>
      <div className='flex m-1'>
        <span className='w-24'>{"지역코드"}</span>
        <Label>{code}</Label>
      </div>
      <div className='flex m-1'>
        <span className='w-24'>{"위경도"}</span>
        <Label>{latitude}, {longitude}</Label>
      </div>
      <div className='flex m-1'>
        <span className='w-24'>{"지역 상세"}</span>
        <Label>{region1depth}, {region2depth}</Label>
      </div>
      <Input
        name='symbol'
        placeholder="* symbol 🚩"
        defaultValue={""}
        onChange={(e : any) => handleChange(e)}
        maxLength={10}/>
      <Input
        name='activate'
        placeholder="* 앱 내 활성화 여부 T/F"
        defaultValue={""}
        onChange={(e : any) => handleChange(e)}
        maxLength={10}/>
      <Input
        name='description'
        placeholder="지역 상세 설명"
        defaultValue={""}
        onChange={(e : any) => handleChange(e)}
        maxLength={100}/>
    </div>
  )
}

const Label = styled.span`
  flex: auto;
  color: ${COLORS.neutral_500};
  padding: 4px;
  border-width: 1px;
  border-radius: 10px;
  border-color: ${COLORS.neutral_300};

`

const Input = styled.input`
  margin-top: 0.5rem;
  padding: 0.5em;
  color: ${COLORS.charcol};
  width: 100%;
  font-size: large;
  background: white;
  border: 0.2px solid;
  border-color: ${COLORS.lightGray};
  border-radius: 0.375rem;
`;