import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Divider } from '@chakra-ui/react'

import { AreaUnitFragment, useGetAreasLazyQuery, useGetArticleCategoriesLazyQuery } from 'generated/graphql';
import Label from './atoms/Label';
import { COLORS } from 'styles/colors';
import { InfoModel } from 'models/models';
import { Button } from './atoms/Button';
import { AiOutlineEllipsis } from 'react-icons/ai';
import { IoAddSharp } from 'react-icons/io5';

export default function ManageBasicInfo({theme, handleChange, handleContent} : any) {
  
  const [categoryResult, setCategoryResult] = useGetArticleCategoriesLazyQuery();
  const [infoDataList, setInfoDataList] = useState<InfoModel[]>([]);

  useEffect(() => {
    getCategoryList();
  }, [setInfoDataList]);

  const getCategoryList = async() => {
    const result = await categoryResult({});
    if(result.data?.getArticleCategories){
      const datalist = result.data?.getArticleCategories.map((item) => {
        return {id: item.id, name: item.category}
      })
      setInfoDataList(datalist);
    }
    if(result.error){
      console.log("category 못 불러와요");
    }
  };

  const onClickEditCategory = (item : any) => {
    handleChange("Edit Category");
    handleContent({id: item.id, name: item.name});
  }

  const onClickAddCategory = () => {
    handleChange("Add Category");
  }

  return (
    <Card>
      <CardHeader>
        <Label text={"아티클 카테고리 정보"} size="XL"/>
        <AddButton onClick={onClickAddCategory}><IoAddSharp size="32"/></AddButton>
      </CardHeader>
      <Divider/>
      <CardBody>
          {infoDataList.map((item, index) => (
            <CardCol key={index}>
              <CardText>{item.name}</CardText>
              <EditButton onClick={() => onClickEditCategory(item)}><AiOutlineEllipsis size="24"/></EditButton>
            </CardCol>
          ))}
      </CardBody>
    </Card>
  )
}



const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  margin-top: 2rem;
  background-color: white;
  filter: drop-shadow(2px 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(2px 2px 2px rgb(0 0 0 / 0.06));
  border-radius: 0.375rem;
`

const CardHeader = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
`

const CardCol = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  justify-content: space-between;
  &:hover{  
    background-color : ${COLORS.lightGray};
  }
`

const CardText = styled.div`
  font-size: 20px;
  color: ${COLORS.blackText};
  margin-left: 20px;
  margin-top: 10px;
  font-weight: 500;
  height: 40px;
`

const EditButton = styled.button`
  padding-right: 10px;
`

const AddButton = styled.button`
  padding-right: 5px;
`