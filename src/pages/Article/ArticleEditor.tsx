import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { createBrowserHistory } from "history";

import { ArticleContentFragment, ArticleContentInput, ArticleInput, Content, CreateArticleInput, useGetArticleForEditQuery } from 'generated/graphql';
import Label from 'components/atoms/Label';
import SelectBox from 'components/atoms/SelectBox';
import { Button } from 'components/atoms/Button';
import styled from 'styled-components';
import { COLORS } from 'styles/colors';
import { useReactiveVar } from '@apollo/client';
import { contentsVar } from 'models/fragmentVar';
import ContentsList from 'components/ContentsList';
import useContentFunc from 'hooks/useContentFunc';
import { ImageInputButton } from 'components/atoms/ImageInputButton';


export default function ArticleEditor() {
  
  const {state} = useLocation();
  let history = createBrowserHistory();

  const {data, refetch, loading, error} = useGetArticleForEditQuery({
    fetchPolicy: 'network-only',
    variables: {id : state}
  });



  console.log(data?.getArticleForEdit.articleContents);

  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [areaId, setAreaId] = useState(0);
  const [content, setContent] = useState<ArticleContentFragment>();
  const [contents, setContents] = useState<ArticleContentFragment[]>([]);
  const [thumbnail, setThumbnail] = useState();

  const contentListVar = useReactiveVar(contentsVar);

  const {
    contentCards,
    settingAllContentCard,
    clearContentsCards
  } = useContentFunc();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setTitle(value);
  };

  const onSaveContent = () => {
    console.log("save contents!!! ", contentCards);
    const contentsInput : Content[] = contentCards.map((card : any) => ({
      subtitle: card.subtitle,
      content: card.content,
      image: card.image
    }))
  }

  useEffect(() => {
    if(data?.getArticleForEdit){
      setTitle(data.getArticleForEdit.title);
      setCategoryId(data.getArticleForEdit.category.id);
      setAreaId(data.getArticleForEdit.area.id);

      console.log("data.getArticleForEdit", data.getArticleForEdit.articleContents);

      if(data?.getArticleForEdit.articleContents !== null){
        contentsVar(data.getArticleForEdit.articleContents);
        console.log("contentListVar", contentListVar);
        settingAllContentCard();
      }
    }
  }, [data?.getArticleForEdit]);

  history.listen(({ action, location }) => {
    console.log(
      `The current URL is ${location.pathname}${location.search}${location.hash}`
    );
    if(`${action}` === "POP"){
      console.log('hshs');
      clearContentsCards();
    }
  });

  return (
    <Container>
    {/* {windowsize.innerWidth > 1200 ? (<>
      <PreviewArticle />
      </>) : (<></>)} */}
    <WriterContainer>
        <ButtonContainer>
          <>
            <Label text="아티클 작성" size="XL"/>
          </>
          <div>
            <Button label='임시저장' onClick={onSaveContent} tailStyle='text-[#19A2F7] mx-8 font-semibold'/>
            <Button label='검토하기' primary={true}/>
          </div>
        </ButtonContainer>
      <TitleInput 
          name="title"
          onChange={(e) => handleChange(e)}
          placeholder="* 아티클 제목을 입력하세요" 
          type="text" 
          defaultValue={title}
        />
      <div className='flex gap-10 z-10 items-center mb-12'>
          <Label text="카테고리"/>
          <SelectBox theme="categories" picked={categoryId} handleChange={setCategoryId}/>
          <Label text="지역"/>
          <SelectBox theme="areas" picked={areaId} handleChange={setAreaId}/>
      </div>
      <Label text="썸네일 이미지" />
      <ImageInputButton handleChange={setThumbnail}/>
      <ContentsList /> 
    </WriterContainer>
    </Container>
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
  font-size: large;
  background: white;
  border: 0.5px solid;
  border-color: ${COLORS.lightGray};
  border-radius: 3px;
`;
