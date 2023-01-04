import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles'
import {SampleImg, Imgjeju1, Imgjeju2, Imgjeju3, Imguk1, Imguk2 } from '../../assets/images/index';
import ArticleElement from '../../components/atoms/ArticleElement'
import ModalBase from '../../common/ModalBase'
import CardModal from '../../components/atoms/CardModal'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useGetArticleQuery, useGetArticleForEditQuery } from '../../generated/graphql';
import Title from 'components/atoms/Title';
import { FontButton } from 'components/atoms/FontButton';
import PulseLoader from 'react-spinners/PulseLoader';
import useWindowSize from 'hooks/useWindowSize';
import PreviewArticle from 'components/PreviewArticle';



export default function ArticleDetail() {

  const navigate = useNavigate();
  const {state} = useLocation();
  const windowsize = useWindowSize().windowSize;

  const {data, refetch, loading, error} = useGetArticleForEditQuery({
    fetchPolicy: 'no-cache',
    variables: {id : state.id}
  });

  const [isActive, setIsActive] = useState(false);

  const onClickModalOn = () => {
    setIsActive(true);
  };

  const onClickModalOff = () => {
    setIsActive(false);
  };

  const onClickCardRemove = () => {
    alert('이벤트 실행');
  };

  const onClickEdit = () => {
    navigate(`/yard-admin/article-edit/${state.id}`, {state : state.id});
  }

  if(data?.getArticleForEdit.contents === undefined || error){
    return (
      <>
      <div>아티클을 불러오지 못했습니다</div>
      </>
    )
  }

  if(loading){
    return (
      <div className='flex justify-center items-center'>
        <PulseLoader
          color={COLORS.accentColor}
          loading={loading}
          size={24}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    )
  }



  return (
    <>
    <Container>
      {windowsize.innerWidth > 1200 ? (<>
        <PreviewArticle htmltext={data?.getArticleForEdit.contents}/>
        </>) : (<></>)}

      <DetailContainer>
        <HeadWrapper>
          <Area domestic={true}>{data?.getArticleForEdit.area.region2depth}</Area>
          <Title title={data?.getArticleForEdit.title}/>
          {/* {data?.getArticle.category ? <><SubTitle subtitle={data?.getArticle.category}/></> : <></>} */}
          <div className='flex justify-between mt-10 mb-10'>
            <div className='flex gap-2 items-center'>
              <div className='font-semibold'>{data?.getArticleForEdit.editor}</div>
              <div>{data?.getArticleForEdit.updatedAt}</div>
            </div>
            <div className='flex gap-2'>
              <FontButton onClick={onClickEdit} label='수정' textColor='text-gray-800'/>
              <FontButton onClick={onClickModalOn} label='삭제' textColor='text-gray-800'/>
            </div>
          </div>
        </HeadWrapper>
        <ThumbnailCotainer>
          <Thumbnail />
          <ThumbnailMark>썸네일</ThumbnailMark>
        </ThumbnailCotainer>
        {data.getArticleForEdit.articleContents?.map(element => (
            <ArticleElement
              key={element.id}
              acId={element.id}
              image={element.image.path}
              subhead={element.subtitle}
              contents={element.content}/>
          ))}
        {data?.getArticleForEdit.state === "INPROGRESS" ? (
          <DeployButton deployNum={0}>배포 전 검토</DeployButton>
        ) : (
          data?.getArticleForEdit.state === "DONE"? (
            <DeployButton deployNum={1}>배포하기</DeployButton>
          ) : (
            <DeployButton deployNum={2}>배포 완료됨</DeployButton>
        ))}

      </DetailContainer>

      
      
    </Container>

      <ModalBase active={isActive} closeEvent={onClickModalOff}>
        <CardModal closeEvent={onClickModalOff} title="아티클 삭제" actionMsg="삭제" actionEvent={onClickCardRemove}>
            아티클을 삭제 하시겠습니까?
            <br />
            삭제한 아티클은 복구 할 수 없습니다.
        </CardModal>
      </ModalBase>
    </>

  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;


const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem;
  padding: 3rem;
  background-color: white;
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
  border-radius: 0.375rem;
`

const HeadWrapper = styled.div`

`;


const Area = styled.div<{domestic : boolean}>`
  width:80px;
  height:30px;
  font-size : 20px;
  background-color: ${props => props.domestic === true ? COLORS.accentColor : COLORS.pink };
  text-align: center;
  align-items : center;
  font-weight: 600;
  border-radius: 6px;
  color:${COLORS.white};
`;

const ThumbnailCotainer = styled.div`
  display: flex;
  position: relative;
`

const Thumbnail = styled.img`
  object-fit: scale-down;
`;

const ThumbnailMark = styled.div`
  position: absolute;
  padding:10px;
  background-color:rgba(80, 80, 80, 0.8);
  color:${COLORS.white};
  font-size: 24px;
`;

const DeployButton = styled.button<{deployNum : number}>`
  margin-top: 20px;
  padding: 10px;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  border-radius: 10px;
  color:white;
  background-color: ${props => props.deployNum === 0? COLORS.textColor : (props.deployNum === 1 ? COLORS.red : COLORS.charcol)};
`