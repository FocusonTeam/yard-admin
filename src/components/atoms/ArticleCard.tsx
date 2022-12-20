import React, { useState } from 'react';
import styled from 'styled-components';
import {COLORS} from '../../styles/colors'
import thumbnailex1 from '../../assets/images/uk1.jpg';

const ArticleCard = () => {

  const [deploynum, setDeployNumber] = useState(0);

  return (
    <Container>
      <ArticleContainer>
        <Thumbnail src={thumbnailex1}/>
        <ArticleInfo>
          <TitleInfo>
            <Title>오래전 영국을 지금 볼 수 있다면</Title>
            <Area domestic={false}>영국</Area>
          </TitleInfo>
          <SubTitle>소제목</SubTitle>
        </ArticleInfo>
        <Writer>작성자 : 황초원</Writer>
      </ArticleContainer>
      { deploynum === 0 ? (<></>) : 
        (deploynum === 1? (
          <CoverContainer>검토 중</CoverContainer>) : 
        (
          <CoverContainer>배포완료</CoverContainer>
        ))}
    </Container>
  )
}


const Container = styled.div`
  display: flex;
  position: relative;
  width: 400px;
  height: 450px;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(182, 182, 182, 0.15);
`;

const ArticleContainer = styled.div`
  flex:1;
  background-color: white;
  border-radius: 30px;
  border : 1px solid ${COLORS.lightGray};
  flex-direction: column;
  overflow: hidden;
`;

const CoverContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 30px;
  background-color:rgba(0, 0, 0, 0.8);
  color:${COLORS.white};
  font-size: 36px;

  /* 글자 가운데 정렬 */
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 300px;
  vertical-align: middle;
  overflow: hidden;
`;

const ArticleInfo = styled.div`
  flex:1;
  margin: 10px;
`;

const TitleInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.div`
  font-size : 24px;
  font-weight: 600;
  text-align: left;
`;


const Area = styled.div<{domestic : boolean}>`
  width:70px;
  height:30px;
  font-size : 1.2em;
  background-color: ${props => props.domestic === true ? COLORS.accentColor : COLORS.pink };
  text-align: center;
  font-weight: 600;
  border-radius: 8px;
  color:${COLORS.white};
  align-items : center;
`;

const SubTitle = styled.div`
  font-size : 20px;
  text-align: left;
`;

const Writer = styled.div`
  font-size : 16px;
  font-weight: 400;
  text-align: right;
  padding-right: 15px;
  padding-bottom: 10px;
`

export default ArticleCard