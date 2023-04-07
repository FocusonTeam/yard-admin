import React, { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import _ from 'lodash';

import { ArticleState, Content, useEditArticleMutation, useGetArticleForEditQuery } from 'generated/graphql';
import Label from 'components/atoms/Label';
import SelectBox from 'components/atoms/SelectBox';
import { Button } from 'components/atoms/Button';
import styled from 'styled-components';
import { COLORS } from 'styles/colors';
import useContentFunc from 'hooks/useContentFunc';
import { SpinnerMessage } from 'components/atoms/SpinnerMessage';
import ContentItem from 'components/ContentItem';
import { MdAdd } from 'react-icons/md';
import { EditArticleInput } from '../../generated/graphql';
import { alerts } from 'utils/alerts';


export default function ArticleEditor () {
  
  const {state} = useLocation();

  const [timeloading, setTimeLoading] = useState(true);

  const {data, refetch, loading, error} = useGetArticleForEditQuery({
    fetchPolicy: 'network-only',
    variables: {id : state}
  });

  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [areaId, setAreaId] = useState(0);
  const [thumbnail, setThumbnail] = useState();
  const [contents, setContents] = useState<Content[]>([]);

  const navigate = useNavigate();

  const [editArticle] = useEditArticleMutation();


  const {
    contentCards,
    setContentCards,
    addEmptyContentCard,
    updateContentCard,
    deleteContentCard,
    swapContentCards,
    clearContentsCards
  } = useContentFunc();

  useEffect(() => {
    if(data?.getArticleForEdit){
      setTitle(data.getArticleForEdit.title);
      setCategoryId(data?.getArticleForEdit.category!.id);
      setAreaId(data?.getArticleForEdit.area!.id);
      if(data?.getArticleForEdit.articleContents !== null){
        setContentCards({Contents : data.getArticleForEdit.articleContents!});
      }
    }

    if(loading){
      setTimeLoading(true);
    }

    if(error){
      alerts({status : "error", title : "아티클을 불러올 수 없습니다. 다시 시도해주세요"});
    }

  }, [data, loading, error]);

  useEffect(() => {
    console.log("contentCards in editor", contentCards);
    if(contentCards.length === 0){
      addEmptyContentCard();
    }
  }, [contentCards]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setTitle(value);
  };

  const onSaveContent = useCallback(async () => {
    console.log("save contents!!! ", contentCards);

    // 이미지가 있거나 없는 경우 나눠서 input에 넣기
    const contentsInput : Content[] = contentCards.map((card : any) => ({
      subtitle: card.subtitle,
      content: card.content,
      image: _.isEmpty(card.image) ? null : {path : card.image.path, mimetype: card.image.mimetype}
    }))

    const input : EditArticleInput = {
      id: state,
      title: title,
      areaId: areaId,
      state: ArticleState.Inprogress,
      categoryId: categoryId,
      contents: contentsInput
    }

    try{
      const results = await editArticle({
        variables : {input}
      })

      if(results.errors){
        alerts({status : "error", title : "아티클을 작성할 수 없습니다. 다시 시도해주세요"});
        console.log(results.errors);
      }
      if(results.data){
        alerts({status : "info", title : "저장이 완료되었습니다"});
        console.log("results.data", results.data);
        clearContentsCards();
        navigate("/articles");
      }
    }catch(err){
      alerts({status : "error", title : "아티클을 작성할 수 없습니다. 다시 시도해주세요"});
      console.log(err);
    }

  }, [contentCards, title, areaId, categoryId]);

  if(timeloading){
    <SpinnerMessage text={"아티클을 불러오는 중입니다"} />;
  }

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
            {/* <Button label='검토하기' primary={true}/> */}
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
          <SelectBox theme="categories" picked={data?.getArticleForEdit.category?.id || categoryId} handleChange={setCategoryId}/>
          <Label text="지역"/>
          <SelectBox theme="areas" picked={data?.getArticleForEdit.area?.id || areaId} handleChange={setAreaId}/>
      </div>
      {/* 컨텐츠 리스트 */}
      <CardContainer>
        {contentCards.map((card, index) => (
          <ContentItem
            key={card.id}
            contentsCard={card}
            index={index}
            onDropHover={swapContentCards}
            onUpdate={updateContentCard}
            onDelete={deleteContentCard}
          />
        ))}
        <CircleButton onClick={addEmptyContentCard}>
          <MdAdd />
        </CircleButton>
      </CardContainer>
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


const ThumbnailCotainer = styled.div`
  display: flex;
  position: relative;
`

const Thumbnail = styled.img`
  object-fit: scale-down;
  max-height: 720px;
`;

const ThumbnailMark = styled.div`
  position: absolute;
  padding:10px;
  background-color:rgba(80, 80, 80, 0.8);
  color:${COLORS.white};
  font-size: 24px;
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


const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-bottom: 50px;
  gap:1em;
  border-radius: 0.375rem;
`

const CircleButton = styled.button`
  background: ${COLORS.accentColor};
  &:hover {
    background: ${COLORS.accentColorActive};
  }
  &:active {
    background: #20c997;
  }
  z-index: 30;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, -50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.125s all ease-in;
`;