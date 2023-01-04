import React, { useState } from 'react';
import ArticleCard from './ArticleCard';


const ArticleList = ({articleData} : any) => {

  const [articles, setArticles] = useState(articleData); 

  return (
    <div className='flex z-0 px-3 flex-wrap max-w-{1300px}'>
        {articles.map((item : any) => (
          <ArticleCard key={item.id} articleUnit={item}/>
        ))}
      </div>
  )
}

export default ArticleList;