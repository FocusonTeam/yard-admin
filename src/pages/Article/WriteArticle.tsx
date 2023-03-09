import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import SelectBox from '../../components/atoms/SelectBox'
import Label from '../../components/atoms/Label'
import { COLORS } from '../../styles'
import { Button } from '../../components/atoms/Button';
import ContentsList from 'components/ContentsList';
import { ArticleState, Content, CreateArticleInput, useCreateArticleMutation } from 'generated/graphql';
import useContentsFunc from 'hooks/useContentFunc';
import { alerts } from '../../utils';



export default function WriteArticle() {

  const { contentCards, clearContentsCards, addEmptyContentCard } = useContentsFunc();

  const [categoryId, setCategoryId] = useState(0);
  const [area, setArea] = useState(0);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState<Content[]>([]);

  const [createArticle] = useCreateArticleMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setTitle(value);
  };

  //아티클 첫 작성시 스토리지 클리어, 아티클 작성 중 새로고침시 스토리지 유지
  useEffect(() => {
    if(contentCards.length === 0){
      addEmptyContentCard();
    }
  }, [contentCards]);

  const onSaveContent = useCallback(async () => {

    if(categoryId !== 0 && area !== 0 && title !== ""){

      const contentsInput : Content[] = contentCards.map((card : any) => ({
        subtitle: card.subtitle,
        content: card.content,
        image: _.isEmpty(card.image) ? null : {path : card.image.path, mimetype: card.image.mimetype}
      }))
  
      console.log(categoryId, area, title, "content::", contentsInput); 

      const input : CreateArticleInput = {
        title: title,
        areaId: area,
        state: ArticleState.Inprogress,
        categoryId: categoryId,
        contents: contentsInput
      }

      console.log("input", input);

      try {
        const results = await createArticle({
          variables : {input}
        })

        if(results.errors){
          alerts({status : "error", title : "아티클을 작성할 수 없습니다. 잠시 후 다시 시도해주세요"});
          console.log(results.errors);
        }
        if(results.data){
          alerts({status : "info", title : "저장이 완료되었습니다"});
          console.log("results.data", results.data);
          clearContentsCards();
          console.log("이후에 로컬 스토리지 확인 : ", contentCards);
        }
      }catch(err){
        alerts({status : "error", title : "아티클을 작성할 수 없습니다. 잠시 후 다시 시도해주세요"});
        console.log(err);
      }

    }else{
      alerts({status : "warning", title : "타이틀, 카테고리, 지역을 작성해주세요"});
    }
  }, [contentCards, title, area, categoryId]);


  //TODO :: 배포하기
  const onReviewContent = useCallback(() => {
    if(categoryId !== 0 || area !== 0 || title !== "" || contentCards === null){

    }else{
      alerts({status : "warning", title : "아티클을 모두 작성해주세요"});
    }
  }, [contentCards])

  return (
    <>
    <Container>
      <WriterContainer>
        <ButtonContainer>
          <>
            <Label text="아티클 작성" size="XL"/>
          </>
          <div>
            <Button label='임시저장' onClick={onSaveContent} tailStyle='text-[#19A2F7] mx-8 font-semibold'/>
            <Button label='검토하기' onClick={onReviewContent} primary={true}/>
          </div>
        </ButtonContainer>
        <TitleInput 
          name="title"
          onChange={(e) => handleChange(e)}
          placeholder="* 아티클 제목을 입력하세요" 
          type="text" 
          defaultValue={title}
        />
        <div className='flex gap-10 z-10 items-center mb-10'>
          <Label text="* 카테고리"/>
          <SelectBox theme="categories" handleChange={setCategoryId}/>
          <Label text="* 지역"/>
          <SelectBox theme="areas" handleChange={setArea}/>
        </div>
        {/* <Label text="썸네일 이미지" />
        <ImageInputButton handleChange={setThumbnail}/> */}
        <ContentsList /> 
      </WriterContainer>
    </Container>
    </>
  )
}


const Container = styled.div`
  display: flex;
  justify-content: center;
`

const WriterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom:1rem;
  background-color: white;
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
  gap:2em;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const TitleInput = styled.input`
  padding: 1em;
  color: ${COLORS.charcol};
  font-size: 24px;
  background: white;
  border: 0.5px solid;
  border-color: ${COLORS.lightGray};
  border-radius: 3px;
`;