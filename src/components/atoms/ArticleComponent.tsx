import React from 'react'
import styled from 'styled-components';

export default function ArticleComponent() {
  return (
    <Contents>
      <div>사진</div>
      <div>소제목</div>
      <div>컨텐츠</div>
    </Contents>
  )
}


const Contents = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;