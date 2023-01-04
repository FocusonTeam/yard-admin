import React, { useState } from 'react'
import styled from 'styled-components';

import useWindowSize from 'hooks/useWindowSize';
import PreviewArticle from 'components/PreviewArticle';
import { COLORS } from 'styles';
import { Button } from 'components/atoms/Button';
import Label from 'components/atoms/Label';
import SelectBox from 'components/atoms/SelectBox';
import ContentsList from 'components/ContentsList';
import { useLocation } from 'react-router-dom';
import { useGetArticleForEditQuery } from 'generated/graphql';


export default function ArticleEdit() {

  const {state} = useLocation();
  console.log("state", state);

  const {data, refetch, loading, error} = useGetArticleForEditQuery({
    fetchPolicy: 'no-cache',
    variables: {id : state}
  });

  console.log(data);

  // const windowsize = useWindowSize().windowSize;

  const [category, setCategory] = useState("");
  const [area, setArea] = useState("");

  return (
    <Container>
    {/* {windowsize.innerWidth > 1200 ? (<>
      <PreviewArticle />
      </>) : (<></>)} */}
    <WriterContainer>
      <ButtonContainer>
        <Button label='임시저장' tailStyle='text-[#19A2F7] mx-8 font-semibold'/>
        <Button label='검토하기' primary={true}/>
      </ButtonContainer>
      <TitleInput placeholder="* 아티클 제목을 입력하세요" type="text" />
      <div className='flex gap-10 z-10 items-center'>
        <Label text="카테고리"/>
        <SelectBox theme="categories" handleChange={setCategory}/>
        <Label text="지역"/>
        <SelectBox theme="areas" handleChange={setArea}/>
      </div>
      {/* <Label text="썸네일 이미지" />
      <ImageInputButton handleChange={setThumbnail}/> */}
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
  justify-content: flex-end;
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