import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

import Label from 'components/atoms/Label'
import ManageBasicInfo from 'components/ManageBasicInfo';
import ModalBase from 'common/ModalBase';
import CardModal from 'components/atoms/CardModal';
import { COLORS } from 'styles/colors';
import { useAddAreaImageMutation, useAddArticleCategoryMutation, useEditArticleCategoryMutation } from 'generated/graphql';
import { alerts } from 'utils/alerts';
import { Tab } from '@headlessui/react';
import { classNames } from 'utils/classNames';
import ManageAreaInfo from 'components/ManageAreaInfo';
import { ImageInputButton } from 'components/atoms/ImageInputButton';
import { UploadAreaImageInput, AddAreaImageInput, useSearchAreaDataLazyQuery, AreaData } from '../../generated/graphql';
import RadioButton from 'components/atoms/RadioButton';
import SearchBar from 'components/atoms/SearchBar';
import AreaModal from 'pages/Modal/AreaModal';

export default function YardManage() {

  const [keyword, setKeyword] = useState("");
  const [actionInfo, setActionInfo] = useState<String>("");
  const [addInfo, setAddInfo] = useState({id: 0, name: ""});
  const [areaData, setAreaData] = useState<AreaData[]>([]);

  let modalTitle = "";
  
  const [createCategory] = useAddArticleCategoryMutation({fetchPolicy: 'network-only'});
  const [editCategory] = useEditArticleCategoryMutation({fetchPolicy: 'network-only'});
  const [addAreaImage] = useAddAreaImageMutation({fetchPolicy: 'network-only'});

  const [tabCategory, setTabCategory] = useState({
    '지역 정보': <ManageAreaInfo handleChange={setActionInfo} handleContent={setAddInfo}/>,
    '아티클 카테고리': <ManageBasicInfo theme="categories" handleChange={setActionInfo} handleContent={setAddInfo}/>
  });

  const [image, setImage] = useState([]);   // For 지역이미지 추가

  useEffect(() => {
    console.log(image);
  }, [image])

  useEffect(() => {
    switch(actionInfo){
      case "Add Area":
        modalTitle = "지역 추가"
        setIsActive(true);
        break;
      case "Edit Category" :
        modalTitle = "카테고리 수정"
        setIsActive(true);
        break;
      case "Add Category":
        modalTitle = "카테고리 추가"
        setIsActive(true);
        break;
      case "Open Area":
        modalTitle = "지역 오픈";
        setIsActive(true);
        break;
      case "Add Area Image":
        modalTitle = "지역 이미지 추가"
        setIsActive(true);
        break;
      default:
        break;
    }
  }, [actionInfo]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    console.log(name, value);
    setAddInfo({id: addInfo.id, name: value});
  };

  // Modal Active
  const [isActive, setIsActive] = useState(false);
  const onClickModalOn = () => {
    setIsActive(true);
  };
  const onClickModalOff = () => {
    setIsActive(false);
    setActionInfo("");
  };

  const onClickAction = () => {
    transferData();
  }


  const transferData = useCallback(async () => {
    switch(actionInfo){
      case "Add Category":
        const addCategoryResults = await createCategory({
          variables : {
            category : addInfo.name
          }
        })
        if(addCategoryResults.data){
          onClickModalOff();
          window.location.reload();
        }
        if(addCategoryResults.errors){
          onClickModalOff();
          alerts({status : "error", title : "카테고리 추가를 할 수 없습니다. 잠시 후 다시 시도해주세요😂"});
        }
        break;
      case "Edit Category":
        console.log(addInfo.id, addInfo.name);
        const editresults = await editCategory({
          variables : {
            id: addInfo.id,
            category : addInfo.name
          }
        })
        console.log(editresults);
        if(editresults.data?.editArticleCategory){
          console.log("카테고리 변경");
          onClickModalOff();
          window.location.reload();
        }
        if(editresults.errors){
          onClickModalOff();
          alerts({status : "error", title : "카테고리 수정을 할 수 없습니다. 잠시 후 다시 시도해주세요😂"});
        }
        break;
      case "Add Area Image":
        console.log(addInfo.id, addInfo.name);
        console.log(image);
        const uploadInput : UploadAreaImageInput = {
          path: image[0],
          mimetype: image[1],
          encoding: null,
          title: addInfo.name
        };
        const addAreaInput : AddAreaImageInput = {
          imageInput : uploadInput,
          areaId : addInfo.id
        }

        const addImageResults = await addAreaImage({
          variables: {
            input: addAreaInput
          }
        })

        if(addImageResults.data){
          console.log(addImageResults.data);
          onClickModalOff();
          window.location.reload();
        }
        if(addImageResults.errors){
          onClickModalOff();
          alerts({status : "error", title : "지역 이미지 추가를 할 수 없습니다. 잠시 후 다시 시도해주세요😂"});
        }
      break;
    }
  }, [setAreaData]);


  const renderModalComponent = (actionInfo : any) => {
    switch(actionInfo){
      case "Add Category":
        return (
          <CardModal closeEvent={onClickModalOff} title={modalTitle} actionMsg="추가" actionEvent={onClickAction}>
            <Label text="카테고리를 추가하시겠습니까?" size="XL"/>
            <Label text="추가한 카테고리는 아티클 작성 및 수정시 사용가능합니다" size="MD"/>
            <CategoryInput
              name="addCategory"
              onChange={(e) => handleChange(e)}
              placeholder="* 추가할 카테고리를 입력하세요" 
              type="text" 
              defaultValue={addInfo.name}
            />
          </CardModal>
        )
      case "Add Area":
        return (
          <AreaModal />
        )
      case "Open Area":
        return (
          <CardModal closeEvent={onClickModalOff} title={modalTitle} actionMsg="확인" actionEvent={onClickAction}>
            {/* 아직 지원되지 않는 기능입니다. 필요시 담당 개발자에게 요청해주세요 */}
            지역을 오픈하시겠습니까?
            <br />
            오픈 즉시 앱에 반영됩니다
          </CardModal>
        )
      case "Edit Category":
        return (
          <CardModal closeEvent={onClickModalOff} title={modalTitle} actionMsg="수정" actionEvent={onClickAction}>
            <Label text="카테고리를 수정하시겠습니까?" size="XL"/>
            <Label text="수정 즉시 앱에 반영됩니다" size="MD"/>
            <CategoryInput
              name="editCategory"
              onChange={(e) => handleChange(e)}
              placeholder="* 수정할 카테고리를 입력하세요" 
              type="text" 
              defaultValue={addInfo.name}
            />
          </CardModal>
        )
      case "Add Area Image":
        return (
          <CardModal closeEvent={onClickModalOff} title={modalTitle} actionMsg="저장" actionEvent={onClickAction}>
            <Label text="지역 이미지를 추가하시겠습니까?" size="XL"/>
            <Label text="수정 즉시 앱에 반영됩니다" size="MD"/>
            <br />
            <ImageInputButton savePath="AREA" handleImage={setImage}/>
            <CategoryInput
              name="addImageTitle"
              onChange={(e) => handleChange(e)}
              placeholder="* 추가할 이미지의 제목을 입력하세요" 
              type="text" 
              defaultValue={addInfo.name}
            />
          </CardModal>
        )
      
      default:
        break;
    }
  }

  return (
    <>
    <Container>
      {/* <Label text="야드 운영 관리" size="XL"/>     */}
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl p-2">
          {Object.keys(tabCategory).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'p-2 mr-6 border-b-4 transition-colors duration-300 text-2xl',
                  selected
                    ? 'border-gray-500 font-bold'
                    : 'font-medium border-transparent hover:bg-white/[0.12] hover:text-gray-500'
                )
              }
              >
                {category}
              </Tab>
            ))}
        </Tab.List>
        <Tab.Panels>
          {Object.values(tabCategory).map((component, idx) => (
              <Tab.Panel key={idx}>
                {component}
              </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </Container>

    <ModalBase active={isActive} closeEvent={onClickModalOff}>
      {renderModalComponent(actionInfo)}
    </ModalBase>
    </>

  )
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 1000px;
  margin: 3rem;
  padding: 3rem;
  padding-bottom: 5rem;
  background-color: white;
`

const CategoryInput = styled.input`
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

const AreaInput = styled.input`
  width: 400px;
  padding: 1em;
  margin-top: 16px;
  color: ${COLORS.charcol};
  font-size: large;
  background: white;
  border: 0.5px solid;
  border-color: ${COLORS.lightGray};
  border-radius: 3px;
`;