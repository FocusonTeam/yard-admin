import React, { useState } from 'react'
import styled from 'styled-components'
import ArticleComponent from '../../components/atoms/ArticleElement'
import { FontButton } from '../../components/atoms/FontButton'
import SubTitle from '../../components/atoms/SubTitle'
import Title from '../../components/atoms/Title'
import { COLORS } from '../../styles'
import {SampleImg, Imgjeju1, Imgjeju2, Imgjeju3, Imguk1, Imguk2 } from '../../assets/images/index';
import ArticleElement from '../../components/atoms/ArticleElement'


const articleElements = [
  {
    acId : 1023,
    image : Imgjeju1,
    subhead: "백록담으로 가는 지름길",
    contents : "백록담으로 향하는 지름길은 왕복 약 9시간이 걸립니다. 언덕길부터 계단, 급경사 코스 등 다양한 길과 제주의 변덕스러운 날씨가 9시간의 등반 내내 지루할 틈을 주지 않습니다. 정상까지 4시간 30분이 걸리는 성판악 코스와 5시간이 걸리는 관음사 코스 중 원하는 코스를 선택해 보세요. 한라산 정상으로 가는 길은 여러 가지지만 백록담으로 가는 직행 코스는 이 두 가지가 유일합니다. 제주에 와서 백록담을 보고 싶다면 이날 하루만큼은 오후 일정을 비워두셔야 할 거예요."
  },
  {
    acId : 1024,
    image : Imgjeju3,
    subhead: "백록담을 보려면 미리 준비해야 합니다",
    contents : "9.6km의 성판악, 8.7km의 관음사 탐방로는 미리 예약한 등산객만 출입할 수 있습니다. 현재 성판악 코스는 하루 1,000명, 관음사 코스는 하루 500명으로 제한하고 있어요. 코스마다, 계절마다 일몰 전에 하산이 완료될 수 있도록 시간도 정해져있으니 등반 하루 전 확인은 필수입니다. 절기에 따라 새벽 5~6시경 입산이 시작되니 제주 맛집 말고 한라산 오픈런은 어떠세요?"
  },
  {
    acId : 1025,
    image : Imgjeju1,
    subhead: "한라산 초심자 코스, 어승생악",
    contents : "차가 없어도, 미리 예약하지 않아도 갈 수 있는 어승생악 코스입니다. 어리목 탐방안내소에서 시작하는 30분에서 1시간의 짧은 등산 코스지만 미니 한라산이라는 별명이 있을 만큼 한라산의 풍경을 짧은 코스에 모두 담고 있어 인기가 많습니다. 한라산의 설경을 어렵지 않게 보고 싶다면 어승생악만한 곳이 없어요. 쉬운 코스, 짧은 일정 그리고 눈 덮인 한라산을 조망할 수 있는 정상까지 맛볼 수 있어요."
  }
]

export default function ArticleDetail() {

  const [deploy, setDeploy] = useState(2);

  return (
    <Container>
      <HeadWrapper>
        <Area domestic={true}>영국</Area>
        <Title title="어쩌면 런던보다 더 좋을 네 개의 도시"/>
        <SubTitle subtitle="미정"/>
        <div className='flex justify-between mt-10 mb-10'>
          <div className='flex gap-2 items-center'>
            <div className='font-semibold'>황초원</div>
            <div>2022년 9월 5일</div>
          </div>
          <div className='flex gap-2'>
            <FontButton label='수정' textColor='text-gray-800'/>
            <FontButton label='삭제' textColor='text-gray-800'/>
          </div>
        </div>
      </HeadWrapper>
      <ThumbnailCotainer>
        <Thumbnail src={Imgjeju2}/>
        <ThumbnailMark>썸네일</ThumbnailMark>
      </ThumbnailCotainer>
      {articleElements.map(element => (
          <ArticleElement
            key={element.acId}
            acId={element.acId}
            image={element.image}
            subhead={element.subhead}
            contents={element.contents}/>
        ))}
      {deploy === 0 ? (
        <DeployButton deployNum={deploy}>배포 전 검토</DeployButton>
      ) : (
        deploy === 1? (
          <DeployButton deployNum={deploy}>배포하기</DeployButton>
        ) : (
          <DeployButton deployNum={deploy}>배포 완료됨</DeployButton>
      ))}
      
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6rem;
`

const HeadWrapper = styled.div`

`;


const Area = styled.div<{domestic : boolean}>`
  width:60px;
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
  padding: 5px;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  border-radius: 10px;
  color:white;
  background-color: ${props => props.deployNum === 0? COLORS.textColor : (props.deployNum === 1 ? COLORS.red : COLORS.black)};
`