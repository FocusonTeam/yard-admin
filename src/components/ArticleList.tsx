import React, { useEffect, useState } from 'react';
import { useReactiveVar } from '@apollo/client';

import { articleUnitsVar } from 'models/fragmentVar';
import SubTitle from './atoms/SubTitle';
import ArticleCard from './ArticleCard';


const ArticleList = ({props} : any) => {

  const articlesListVar = useReactiveVar(articleUnitsVar);
  console.log("articlesList :: ", articlesListVar);

  if(articlesListVar === null || articlesListVar === undefined){
    return (<div>
      <SubTitle subtitle="아티클을 불러올 수 없습니다"></SubTitle>
    </div>)
  }

  return (
    <div className='flex z-0 px-3 flex-wrap max-w-{1300px}'>
      {articlesListVar.map((item : any) => (
        <ArticleCard key={item.id} articleUnit={item}/>
      ))}
    </div>
  )
}

export default ArticleList;