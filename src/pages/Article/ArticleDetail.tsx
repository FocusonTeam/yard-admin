import React from 'react'
import styled from 'styled-components'
import ArticleComponent from '../../components/atoms/ArticleComponent'
import { FontButton } from '../../components/atoms/FontButton'
import SubTitle from '../../components/atoms/SubTitle'
import Title from '../../components/atoms/Title'
import { COLORS } from '../../styles'
import { SampleImg } from '../../assets/images'

export default function ArticleDetail() {
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
      <Thumbnail src={SampleImg}/>
      <ArticleComponent />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 30px;
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

const Thumbnail = styled.img`
  margin-bottom: 20px;
  height: 200px;
  object-fit: contain;
`;