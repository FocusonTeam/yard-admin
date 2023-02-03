import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import PulseLoader from 'react-spinners/PulseLoader';

import { COLORS } from '../../styles'
import ArticleElement from '../../components/atoms/ArticleElement'
import ModalBase from '../../common/ModalBase'
import CardModal from '../../components/atoms/CardModal'
import { useGetArticleForEditQuery, useDeleteArticleMutation, useChangeArticleStateMutation } from '../../generated/graphql';
import Title from 'components/atoms/Title';
import { FontButton } from 'components/atoms/FontButton';
import useWindowSize from 'hooks/useWindowSize';
import PreviewArticle from 'components/PreviewArticle';
import SubTitle from 'components/atoms/SubTitle';
import { SampleImg } from 'assets/images';
import useContentFunc from 'hooks/useContentFunc'
import Label from 'components/atoms/Label'
import { State, alerts } from 'utils/index'
import _ from 'lodash';

const CLOUD_STORAGE_BASE_URL = process.env.REACT_APP_AWS_S3_URL;

export default function ArticleDetail() {

  const navigate = useNavigate();
  const {state} = useLocation();
  const windowsize = useWindowSize().windowSize;
  const [actionInfo, setActionInfo] = useState<string>("");

  const {data, refetch, loading, error} = useGetArticleForEditQuery({
    fetchPolicy: 'no-cache',
    variables: {id : state.id}
  });

  const [changeArticleState] = useChangeArticleStateMutation({fetchPolicy:"network-only"});

  const {
    setContentCards,
  } = useContentFunc();

  useEffect(() => {
    if(data?.getArticleForEdit){
      if(data?.getArticleForEdit.articleContents !== null){
        setContentCards({Contents : data.getArticleForEdit.articleContents!});
      }
    }
  }, [data]);


  // 삭제 모달 활성화 및 삭제 쿼리
  const [deleteArticle] = useDeleteArticleMutation();

  const [isActive, setIsActive] = useState(false);

  const onClickModalOff = () => {
    setIsActive(false);
    setActionInfo("");
  };

  const onClickCardRemove = useCallback(async () => {

    const result = await deleteArticle({
      variables : {id : state.id}
    });

    if(result.data){
      navigate("/articles");
    }
    if(result.errors){
      //TODO :: 삭제된 아티클인 경우와 다른 error 분기 나누기
      alerts({status : "error", title : "아티클을 삭제할 수 없습니다"});
    }
    setActionInfo("");
    
  }, []);

  const onClickEdit = () => {
    navigate(`/article-edit/${state.id}`, {state : state.id});
  };

  // 아티클 상태 변경

  useEffect(() => {
    if(actionInfo === ""){
      setIsActive(false);
    }else{
      setIsActive(true);
    }
  }, [actionInfo]);

  const onClickChangeState = useCallback(async () => {
    console.log(actionInfo);
    switch(actionInfo){
      case "GO_REVIEW":
        const results_inprogress = await changeArticleState({
          variables: {
            id: state,
            state : State.DONE
          }
        })
        if(results_inprogress.data){
          onClickModalOff();
          window.location.reload();
        }
        if(results_inprogress.errors){
          alerts({status : "error", title : "아티클 검토로 변경 할 수 없습니다. 잠시 후 다시 시도해주세요😂"});
        }
        break;
      case "GO_DEPLOY":
        const results_done = await changeArticleState({
          variables: {
            id: state,
            state : State.UPLOADED
          }
        })
        if(results_done.data){
          onClickModalOff();
          window.location.reload();
        }
        if(results_done.errors){
          alerts({status : "error", title : "아티클을 배포할 수 없습니다. 잠시 후 다시 시도해주세요😂"});
        }
        break;
      case "TAKE DOWN":
        const results_down = await changeArticleState({
          variables: {
            id: state,
            state : State.DONE
          }
        })
        if(results_down.data){
          onClickModalOff();
          window.location.reload();
        }
        if(results_down.errors){
          alerts({status : "error", title : "아티클을 내릴 수 없습니다. 잠시 후 다시 시도해주세요😂"});
        }
        break;
    }
    setActionInfo("");
  }, [])


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
      {windowsize.innerWidth > 1600 ? (<>
        <PreviewArticle htmltext={data?.getArticleForEdit.contents}/>
        </>) : (<></>)}

      <DetailContainer>
        <HeadWrapper>
          <Area domestic={true}>{data?.getArticleForEdit.area.region2depth}</Area>
          <Title title={data?.getArticleForEdit.title}/>
          {data?.getArticleForEdit.category === null || data?.getArticleForEdit.category === undefined ? <></> : <>
            <SubTitle subtitle={data?.getArticleForEdit.category.category}/>
          </>}
          <div className='flex justify-between mt-10 mb-10'>
            <div className='flex gap-2 items-center'>
              <div className='font-semibold text-lg'>{data?.getArticleForEdit.editor}</div>
              <div className='text-lg'>{data?.getArticleForEdit.updatedAt}</div>
            </div>
            <div className='flex gap-2'>
              <FontButton onClick={onClickEdit} label='수정' textColor='text-gray-800' size='large'/>
              <FontButton onClick={() => setActionInfo("REMOVE")} label='삭제' textColor='text-gray-800' size='large'/>
            </div>
          </div>
        </HeadWrapper>
        <ThumbnailCotainer>
          {_.isEmpty(data.getArticleForEdit.thumbnail) ?  (
              <>
                <Thumbnail src={SampleImg} />
              </>
            ) : (
                <Thumbnail src={CLOUD_STORAGE_BASE_URL! + data.getArticleForEdit.thumbnail.path}/>
            ) }
          <ThumbnailMark>썸네일</ThumbnailMark>
        </ThumbnailCotainer>
        {data.getArticleForEdit.articleContents?.map(element => (
            <ArticleElement
              key={element.id}
              acId={element.id}
              image={element.image}
              subhead={element.subtitle}
              contents={element.content}/>
          ))}
        {data?.getArticleForEdit.state === "INPROGRESS" ? (
          <DeployButton deployNum={0} onClick={() => setActionInfo("GO_REVIEW")}>배포 전 검토하기</DeployButton>
        ) : (
          data?.getArticleForEdit.state === "DONE"? (
            <DeployButton deployNum={1} onClick={() => setActionInfo("GO_DEPLOY")}>배포하기</DeployButton>
          ) : (
            <DeployButton deployNum={2} onClick={() => setActionInfo("TAKEDOWN")}>배포 완료됨</DeployButton>
        ))}

      </DetailContainer>
    </Container>
      <ModalBase active={isActive} closeEvent={onClickModalOff}>
        {actionInfo === "GO_REVIEW"? (<>
          <CardModal closeEvent={onClickModalOff} title="" actionMsg="확인" actionEvent={onClickChangeState}>
            <Label text="아티클을 검토하시겠습니까?" size="XL"/>
            <Label text="아티클 검토 이후 배포를 요청해주세요" size="MD"/>
          </CardModal>
        
        </>) : actionInfo === "GO_DEPLOY" ? (<>
          <CardModal closeEvent={onClickModalOff} title="" actionMsg="수정" actionEvent={onClickChangeState}>
            <Label text="아티클을 배포하시겠습니까?" size="XL"/>
            <Label text="배포 즉시 앱에 반영됩니다" size="MD"/>
          </CardModal>
        
        </>) : actionInfo === "TAKEDOWN" ? (
          <CardModal closeEvent={onClickModalOff} title="" actionMsg="수정" actionEvent={onClickChangeState}>
            <Label text="아티클을 검토 단계로 변경하시겠습니까?" size="XL"/>
            <Label text="즉시 앱에 반영되어 아티클이 내려갑니다" size="MD"/>
          </CardModal>
        ) : (
          <CardModal closeEvent={onClickModalOff} title="" actionMsg="삭제" actionEvent={onClickCardRemove}>
            <Label text=" 아티클을 삭제 하시겠습니까?" size="XL"/>
            <br />
            삭제한 아티클은 복구 할 수 없습니다.
          </CardModal>
        )
      }
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
  min-width: 1000px;
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
  max-height: 720px;
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