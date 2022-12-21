import React from 'react'
import styled from 'styled-components';



interface ArticleElementProps {
  acId: number;
  image: any;
  subhead : string;
  contents: string;
}


export default function ArticleElement(props: ArticleElementProps) {
  return (
    <>
      <Contents>
        <div>
          <img className='object-fit: scale-down' src={props.image}/>
        </div>
        <div className='font-semibold text-lg'>{props.subhead}</div>
        <div className='font-medium text-base'>{props.contents}</div>
      </Contents>
      <hr />
    </>
    
  )
}


const Contents = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 30px;
  gap:8px;
`;