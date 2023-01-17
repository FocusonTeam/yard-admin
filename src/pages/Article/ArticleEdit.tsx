import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { uuidv4 } from '@firebase/util';

import { COLORS } from 'styles';
import { Button } from 'components/atoms/Button';
import Label from 'components/atoms/Label';
import SelectBox from 'components/atoms/SelectBox';
import ContentsList from 'components/ContentsList';
import { ArticleState, Content, EditArticleInput, UploadImageInput, useEditArticleMutation, useGetArticleForEditQuery } from 'generated/graphql';
import useContentCollection from 'hooks/useContentCollection';
import { useReactiveVar } from '@apollo/client';
import { contentsVar } from 'models/fragmentVar';
import useContentsFunc from 'hooks/useContentFunc';


export default function ArticleEdit() {

  const {state} = useLocation();
  console.log("state", state);

  const [contentStorage, setContentStorage] = useContentCollection();
  const { contentCards, clearContentsCards, addEmptyContentCard } = useContentsFunc();

  const {data, refetch, loading, error} = useGetArticleForEditQuery({
    fetchPolicy: 'no-cache',
    variables: {id : state}
  });

  console.log("data?.getArticleForEdit.articleContents", data?.getArticleForEdit.articleContents);

  console.log("data for edit : ", data);
  console.log("contentcards", contentStorage);


  console.log(data?.getArticleForEdit.articleContents);

  const contentListVar = useReactiveVar(contentsVar);

  useEffect(() => {
    if(data?.getArticleForEdit.articleContents){
      contentsVar(data.getArticleForEdit.articleContents);
      console.log("contentListVar", contentListVar);
    }
  })


  const [categoryId, setCategoryId] = useState(0);
  const [area, setArea] = useState(0);
  const [title, setTitle] = useState(data?.getArticleForEdit.title || "");
  const [contents, setContents] = useState<Content[]>([]);

  const [editArticle] = useEditArticleMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setTitle(value);
  };

  const onSaveContent = useCallback(async () => {

    if(categoryId !== 0 && area !== 0 && title !== ""){
      console.log("here");
      contentCards.map((contents : any) => {
        // 이미지가 있는 경우
        if(contents.image !== null){
          console.log(contents.image);
          const imageinput : UploadImageInput = { 
            path: contents.image[0],
            mimetype: contents.image[1],
          }

          const contentinput : Content = {
            image: imageinput,
            source : null,
            subtitle : contents.subtitle,
            content : contents.content,
            placeName: null,
            placeUrl: null,
            placeCategory: null,
          }

          setContents(contents => [...contents, contentinput]);
        }else{

          const contentinput : Content = {
            image: null,
            source : null,
            subtitle : contents.subtitle,
            content : contents.content,
            placeName: null,
            placeUrl: null,
            placeCategory: null,
          }

          setContents(contents => [...contents, contentinput]);
        }
        
      })

      const input : EditArticleInput = {
        id: state,
        title: title,
        areaId: area,
        state: ArticleState.Inprogress,
        categoryId: categoryId,
        contents: contents
      }

      console.log("input", input);

      try {
        const results = await editArticle({
          variables : {input}
        })

        if(results.errors){
          alert("아티클을 작성할 수 없습니다. 잠시 후 다시 시도해주세요'");
          console.log(results.errors);
        }
        if(results.data){
          console.log("results.data", results.data);
          clearContentsCards();
          console.log("이후에 로컬 스토리지 확인 : ", contentCards);
        }
      }catch(err){
        alert("아티클을 작성할 수 없습니다. 잠시 후 다시 시도해주세요'");
        console.log(err);
      }

    }else{
      alert('타이틀, 카테고리, 지역을 작성해주세요');
    }
  }, [categoryId, area, title]);

  useEffect(() => {
    // 데이터 컬럼별로 채워넣기
    clearContentsCards();
    if(data?.getArticleForEdit.area.id){
      setArea(data?.getArticleForEdit.area.id);
    }
    if(data?.getArticleForEdit.category.id){
      setCategoryId(data?.getArticleForEdit.category.id);
    }
    if(data?.getArticleForEdit.articleContents){
      const components = data?.getArticleForEdit.articleContents;
      // components.map(item => {
      //   const newContent: ContentModel = {
      //     id: uuidv4(),
      //     image: [item.image?.path!] || [],
      //     subtitle: item.subtitle || "",
      //     content: item.content || ""
      //   }
      //   console.log("newContent", newContent);
      //   setContentStorage((allTasks : any) => {
      //     const columnTasks = allTasks.Contents;
      //     return {
      //       ...allTasks,
      //       Contents: [newContent, ...columnTasks],
      //     };
      //   });
      // });
    }
    console.log("contentcards", contentStorage);
  }, [setContentStorage]);

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
          <SelectBox theme="categories" handleChange={setCategoryId}/>
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