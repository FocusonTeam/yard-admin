import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Divider } from '@chakra-ui/react'
import { Disclosure } from '@headlessui/react'
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import {RiDeleteBack2Line} from 'react-icons/ri';

import { AreaUnitFragment, useGetAreasLazyQuery } from 'generated/graphql';
import Label from './atoms/Label';
import { COLORS } from 'styles/colors';
import { Button } from './atoms/Button';
import { LeftArrow, RightArrow } from './atoms/Arrow';
import { IoAddSharp } from 'react-icons/io5';
import { CLOUD_STORAGE_BASE_URL } from 'utils/constants';

export default function ManageAreaInfo({theme, handleChange, handleContent} : any) {

  const [areaResult, setAreaResult] = useGetAreasLazyQuery();
  const [areaDataList, setAreaDataList] = useState<AreaUnitFragment[]>([]);

  const [editItemId, setEditItemId] = useState<number>(0);

  useEffect(() => {
    getAreaList();
  }, []);

  const getAreaList = async() => {
    const result = await areaResult({});
    if(result.data?.getAreas){
      setAreaDataList(result.data.getAreas);
      console.log("getArea ::", result.data.getAreas)
    }
    if(result.error){
      console.log("area 못 불러와요");
    }
  };

  const onClickAddArea = () => {
    handleChange("Add Area");
  }

  const onClickOpenArea = () => {
    handleChange("Open Area");
  }

  const onClickAddAreaImage = (areaId: number) => {
    console.log("action add image", areaId)
    handleChange("Add Area Image");
    handleContent({id: areaId, name: ""});
  }



  return (
    <>
    <Card>
      <CardHeader>
        <AddButton onClick={onClickAddArea}><IoAddSharp size="32"/></AddButton>
      </CardHeader>
      <Divider/>
      <CardBody>
          {areaDataList.map((item, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between items-center rounded-lg py-2 bg-white font-medium hover:bg-gray-200">
                      <CardText>{item.region2depth + item.symbol}</CardText>
                      {item.activate? (
                        <Button label='오픈' tailStyle='bg-neutral-700 text-white p-2 border rounded-lg mx-8 w-20 font-semibold' />) : (
                        <Button label='오픈하기' onClick={onClickOpenArea} tailStyle='text-[#19A2F7] mx-8 w-20 font-semibold'/>
                      )}
                    </Disclosure.Button>
                    <Disclosure.Panel className="inline-flex px-4 pt-4 pb-2 text-sm text-gray-500 border-neutral-200">
                      <Button onClick={() => onClickAddAreaImage(item.id)} label='이미지 추가' tailStyle='bg-gray-200 text-gray-800 p-2 border rounded-lg mr-8 w-20 mb-10 font-semibold' />
                      <AreaDetailContainer>
                        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
                          {item.images ? (
                            item.images.map((image) => (
                              <>
                              <AreaImageCard>
                                <AreaImage src={CLOUD_STORAGE_BASE_URL! + image.image?.path}/>
                                <ImageTitle>{image.title}</ImageTitle>
                              </AreaImageCard>
                              </>
                            ))
                          ) : (<></>)}
                        </ScrollMenu>
                      </AreaDetailContainer>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
        </CardBody>
    </Card>
    </>
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
  justify-content: flex-end;
  margin-bottom: 10px;
`

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
`

const AreaDetailContainer = styled.div`
  width: 1200px;
  overflow: hidden;
  .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
    display: none;
  }
  .react-horizontal-scrolling-menu--scroll-container {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

const AreaImageCard = styled.div`
  width: 300px;
`

const AreaImage = styled.img`
  width:240px;
  height: 60%;
  object-fit: cover;
`;

const ImageTitle = styled.div`
  font-size: 18px;
  color: ${COLORS.blackText};
  margin-left: 20px;
  margin-top: 10px;
  font-weight: 500;
  height: 40px;
`

const CardText = styled.div`
  font-size: 18px;
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

const AreaTitleInput = styled.input`
  width: 400px;
  padding: 1em;
  margin-top: 50px;
  margin-bottom: 50px;
  color: ${COLORS.charcol};
  font-size: large;
  background: white;
  border: 0.5px solid;
  border-color: ${COLORS.lightGray};
  border-radius: 3px;
`;