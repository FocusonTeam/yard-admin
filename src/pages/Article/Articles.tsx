import React from 'react'
import styled from 'styled-components'
import ArticleCard from '../../components/atoms/ArticleCard'

import {SampleImg, Imgjeju1, Imgjeju2, Imguk1, Imguk2 } from '../../assets/images/index';
import SearchBar from '../../components/atoms/SearchBar';
import { Button } from '../../components/atoms/Button';
import SelectBox from '../../components/atoms/SelectBox';
import { useNavigate } from 'react-router-dom';


const articles = [
  {
    id:0,
    thumbnail : Imguk1,
    title : "오래 전 영국을 볼 수 있다면",
    area : "UK",
    domestic : false,
    subtitle : "",
    writer : "황초원",
    deploy: 0
  },
  {
    id:1,
    thumbnail : Imgjeju2,
    title : "N번째 제주를 여행하는 사람에게",
    area : "Jeju",
    domestic : false,
    subtitle : "",
    writer : "황초원",
    deploy: 1
  },
  {
    id:2,
    thumbnail : Imgjeju1,
    title : "대한민국에서 가장 높은 곳, 한라산",
    area : "Jeju",
    domestic : false,
    subtitle : "",
    writer : "황초원",
    deploy: 2
  },
  {
    id:4,
    thumbnail : SampleImg,
    title : "미정입니다",
    area : "Jeju",
    domestic : false,
    subtitle : "미정",
    writer : "황초원",
    deploy: 0
  },
]

export default function Articles() {

  const navigate = useNavigate();

  return (
    <div className='flex flex-col relative'>
      <div className='h-16 px-4 flex justify-between items-center'>
        <SearchBar />
        <div className='flex gap-2 z-10'>
          <SelectBox/>
          <Button onClick={() => navigate("/yard-admin/write")} primary={true} label={"아티클 쓰기"}/>
        </div>
        
      </div>
      <div className='flex z-0'>
        {articles.map(article => (
          <ArticleCard
            key={article.id}
            id={article.id}
            thumbnail={article.thumbnail}
            title={article.title}
            area={article.area}
            domestic={article.domestic}
            subtitle={article.subtitle}
            writer={article.writer}
            deploy={article.deploy}/>
        ))}
      </div>
      
    </div>
  )
}
