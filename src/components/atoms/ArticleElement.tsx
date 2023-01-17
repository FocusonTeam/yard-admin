import { useEncodeUri } from 'hooks';
import React from 'react'
import styled from 'styled-components';
import { SampleImg } from 'assets/images';
import { CLOUD_STORAGE_BASE_URL } from 'utils/constants';

export default function ArticleElement(props: any) {

  //TODO :: element interface 이미지 없는 경우 
  return (
    <>
      <Contents>
        <div>
          {props.image === null || props.image === undefined ? (
            <>
              <img className='object-fit: scale-down' src={SampleImg}/>
            </>
          ) : (
            <>
              <img className='object-fit: scale-down' src={CLOUD_STORAGE_BASE_URL + props.image.path}/>
            </>
          )}
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