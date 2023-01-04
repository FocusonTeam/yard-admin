import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import SelectBox from '../../components/atoms/SelectBox'
import Label from '../../components/atoms/Label'
import { COLORS } from '../../styles'
import { Button } from '../../components/atoms/Button';
import ContentsList from 'components/ContentsList';
import useContentsFunc from 'hooks/useContentsFunc'
import { ArticleState, Content, CreateArticleInput, UploadImageInput, useCreateArticleMutation } from 'generated/graphql'


export default function WriteArticle() {

  const { contentCards } = useContentsFunc();

  const [categoryId, setCategoryId] = useState(0);
  const [area, setArea] = useState(0);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState<Content[]>([]);

  const [createArticle] = useCreateArticleMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setTitle(value);
  };

  const onSaveContent = useCallback(async () => {
    if(categoryId !== 0 || area !== 0 || title !== ""){
      console.log(categoryId, area, title);

      contentCards.map((contents) => {
        const imageinput : UploadImageInput = { 
          path: contents.image[0],
          mimetype: contents.image[1],
          encoding: null,
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
      })
      console.log("contents : ", contents);

      const input : CreateArticleInput = {
        title: title,
        areaId: area,
        state: ArticleState.Inprogress,
        thumbnailIndex: 0,
        categoryId: categoryId,
        contents: contents
      }

      console.log("input", input);

      try {
        const results = await createArticle({
          variables : {input}
        })

        if(results.errors){
          alert("저장할 수 없습니다");
          console.log(results.errors);
        }
        if(results.data){
          console.log("results.data", results.data);
        }
      }catch(err){
        console.log(err);
      }

    }else{
      alert('타이틀, 카테고리, 지역을 작성해주세요');
    }
  }, [categoryId, area, title]);

  const onReviewContent = useCallback(() => {
    if(categoryId !== 0 || area !== 0 || title !== "" || contentCards === null){

    }else{
      alert('아티클을 모두 작성해주세요');
    }
  }, [])

  return (
    <Container>
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
        <div className='flex gap-10 z-10 items-center'>
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