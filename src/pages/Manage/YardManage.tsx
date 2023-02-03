import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

import Label from 'components/atoms/Label'
import ManageBasicInfo from 'components/ManageBasicInfo';
import ModalBase from 'common/ModalBase';
import CardModal from 'components/atoms/CardModal';
import { COLORS } from 'styles/colors';
import { useAddArticleCategoryMutation } from 'generated/graphql';
import { useEditArticleCategoryMutation } from '../../generated/graphql';
import { alerts } from 'utils/alerts';

export default function YardManage() {

  const [actionInfo, setActionInfo] = useState<String>("");
  const [addInfo, setAddInfo] = useState({id: 0, name: ""});

  let modalTitle = "";
  
  const [createCategory] = useAddArticleCategoryMutation({fetchPolicy: 'network-only'});
  const [editCategory] = useEditArticleCategoryMutation({fetchPolicy: 'network-only'});

  console.log(addInfo);

  useEffect(() => {
    switch(actionInfo){
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
      default:
        break;
    }
  }, [actionInfo]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
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
        const results = await createCategory({
          variables : {
            category : addInfo.name
          }
        })
        if(results.data){
          onClickModalOff();
          window.location.reload();
        }
        if(results.errors){
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
    }
  }, []);

  return (
    <>
    <Container>
      <Label text="야드 운영 관리" size="XL"/>      
      <ManageBasicInfo theme="areas" handleChange={setActionInfo} />
      <ManageBasicInfo theme="categories" handleChange={setActionInfo} handleContent={setAddInfo}/>
    </Container>

    <ModalBase active={isActive} closeEvent={onClickModalOff}>
      {actionInfo === "Add Category"? (
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
      ) : actionInfo === "Open Area" ? (
        <CardModal closeEvent={onClickModalOff} title={modalTitle} actionMsg="확인" actionEvent={onClickAction}>
          아직 지원되지 않는 기능입니다. 필요시 담당 개발자에게 요청해주세요
          {/* 지역을 오픈하시겠습니까?
          <br />
          오픈 즉시 앱에 반영됩니다 */}
        </CardModal>
      ) : (
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
      )}
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

const ModalText = styled.div`
  display: flex;
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