import React, { useState } from 'react';
import styled from 'styled-components';
import {COLORS} from '../../styles/colors';
import { useNavigate } from 'react-router-dom';

interface ArticleProps {
  id: number;
  thumbnail: any;
  title : string;
  area: string;
  domestic: boolean;
  subtitle: string;
  writer: string;
  deploy: number;
}


const ArticleCard = (props : ArticleProps) => {

  const navigate = useNavigate();

  return (
    <Container onClick = {() => {
      navigate(`/yard-admin/articles/${props.id}`);
    }}>
      <ArticleContainer>
        <Thumbnail src={props.thumbnail}/>
        <ArticleInfo>
          <TitleInfo>
            <Title>{props.title.length < 14
                ? props.title
                : props.title.slice(0, 14) + '...'}
            </Title>
            <Area domestic={props.domestic}>{props.area}</Area>
          </TitleInfo>
          <SubTitle>{props.subtitle}</SubTitle>
        </ArticleInfo>
        <Writer>작성자 : {props.writer}</Writer>
      </ArticleContainer>
      { props.deploy === 0 ? (<></>) : 
        (props.deploy === 1? (
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
  margin: 5px;
  width: 200px;
  height: 250px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(182, 182, 182, 0.15);
`;

const ArticleContainer = styled.div`
  flex:1;
  background-color: white;
  border-radius: 15px;
  border : 1px solid ${COLORS.lightGray};
  flex-direction: column;
  overflow: hidden;
`;

const CoverContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 15px;
  background-color:rgba(0, 0, 0, 0.8);
  color:${COLORS.white};
  font-size: 24px;

  /* 글자 가운데 정렬 */
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Thumbnail = styled.img`
  width:200px;
  height: 60%;
  object-fit: cover;
`;

const ArticleInfo = styled.div`
  flex:1;
  margin: 5px;
`;

const TitleInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.div`
  font-size : 14px;
  font-weight: 600;
  text-align: left;
`;


const Area = styled.div<{domestic : boolean}>`
  width:30px;
  height:20px;
  font-size : 12px;
  background-color: ${props => props.domestic === true ? COLORS.accentColor : COLORS.pink };
  text-align: center;
  align-items : center;
  font-weight: 600;
  border-radius: 6px;
  color:${COLORS.white};
`;

const SubTitle = styled.div`
  font-size : 12px;
  text-align: left;
`;

const Writer = styled.div`
  font-size : 10px;
  font-weight: 400;
  text-align: right;
  padding-right: 10px;
`

export default ArticleCard