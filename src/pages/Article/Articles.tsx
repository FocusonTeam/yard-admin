import React, { CSSProperties, useEffect, useState } from 'react';
import PulseLoader from "react-spinners/PulseLoader";

import {SampleImg, Imgjeju1, Imgjeju2, Imgjeju3, Imguk1, Imguk2 } from '../../assets/images/index';
import SearchBar from '../../components/atoms/SearchBar';
import { Button } from '../../components/atoms/Button';
import SelectBox from '../../components/atoms/SelectBox';
import { useNavigate } from 'react-router-dom';
import Pagination from '../../components/Pagination';
import ArticleList from '../../components/ArticleList';
import { useGetArticlesQuery } from '../../generated/graphql';
import { COLORS } from '../../styles';


export default function Articles(props : any) {

  const navigate = useNavigate();


  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(15);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const {data, refetch, loading} = useGetArticlesQuery({
    fetchPolicy: 'no-cache',
    variables: {areaId : null}
  });
  
  let dataset = data?.getArticles;

  const [areaId, setAreaId] = useState(0);

  let currentPosts = data?.getArticles.slice(firstPostIndex, lastPostIndex);

  // TODO :: area - areaId랑 같이
  useEffect(() => {
    if(areaId !== 0){
      dataset = dataset?.filter(set => set.area.id === areaId)
      console.log(dataset);
      currentPosts = dataset?.slice(firstPostIndex, lastPostIndex);
    }
  }, [currentPosts]);

  console.log(currentPosts);

  const [searchField, setSearchField] = useState("");

  if(loading){
    return (
      <div className='flex justify-center items-center'>
        <PulseLoader
          color={COLORS.accentColor}
          loading={loading}
          size={24}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    )
  }


  return (
    <div className='flex flex-col relative'>
      <div className='h-16 px-4 flex justify-between items-center'>
        <SearchBar 
        />
        <div className='flex gap-2 z-10'>
          <SelectBox theme="areas" handleChange={setAreaId}/>
          <Button onClick={() => navigate("/yard-admin/write")} primary={true} label={"아티클 쓰기"}/>
        </div>
      </div>
      <ArticleList 
        articleData = {currentPosts}
      />
      <Pagination
        totalPosts={dataset?.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  )
}
