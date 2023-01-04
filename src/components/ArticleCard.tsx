import React, { useState } from 'react';
import styled from 'styled-components';
import {COLORS} from '../styles/colors';
import { useNavigate } from 'react-router-dom';
import { ArticleUnitFragment } from '../generated/graphql';

interface ArticleProps {
  articleUnit : ArticleUnitFragment;
}


const ArticleCard = ({articleUnit, ...props} : ArticleProps) => {

  const navigate = useNavigate();

  return (
    <Container onClick = {(e) => {
      navigate(`/yard-admin/articles/${articleUnit.id}`, 
      {
        state : {
          id : articleUnit.id
      }});
    }}>
      <ArticleContainer>
        {articleUnit.thumbnail && <Thumbnail src={articleUnit.thumbnail.path}/> }
        <ArticleInfo>
          <TitleInfo>
            <Title>{articleUnit.title.length < 14
                ? articleUnit.title
                : articleUnit.title.slice(0, 14) + '...'}
            </Title>
            <Area domestic={articleUnit.area.domestic}>{articleUnit.area.region2depth}</Area>
          </TitleInfo>
          <SubTitle>{articleUnit.category.category}</SubTitle>
        </ArticleInfo>
        <Writer>작성자 : {articleUnit.editor}</Writer>
      </ArticleContainer>
      { articleUnit.state === "INPROGRESS" ? (<></>) : 
        (articleUnit.state === "DONE"? (
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