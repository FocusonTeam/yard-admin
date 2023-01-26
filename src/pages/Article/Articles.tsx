import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PulseLoader from "react-spinners/PulseLoader";

import SearchBar from '../../components/atoms/SearchBar';
import { Button } from '../../components/atoms/Button';
import SelectBox from '../../components/atoms/SelectBox';
import Pagination from '../../components/Pagination';
import { ArticleUnitFragment, useGetArticlesQuery } from '../../generated/graphql';
import { COLORS } from '../../styles';
import ArticleCard from 'components/ArticleCard';
import useLogout from 'hooks/useLogout';
import Label from 'components/atoms/Label';
import { useReactiveVar } from '@apollo/client';
import { articleUnitsVar } from '../../models/fragmentVar';
import useContentFunc from 'hooks/useContentFunc';

export default function Articles(props : any) {

  const navigate = useNavigate();
  const {logout} = useLogout();

  const countPerPage = ["10", "15", "20", "25"];

  const articleAllVar = useReactiveVar(articleUnitsVar);
  const [allData, setAllData] = useState<ArticleUnitFragment[]>([]);
  const [articleData, setArticleData] = useState<ArticleUnitFragment[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(15);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  // const [currentPosts, setCurrentPosts] = useState<ArticleUnitFragment[]>([]);

  const [keyword, setKeyword] = useState("");
  const [areaId, setAreaId] = useState(0);

  const {data, refetch, loading, error} = useGetArticlesQuery({
    fetchPolicy: 'cache-and-network',
    variables: {areaId : null}
  });

  const {
    contentCards,
    setContentCards,
    clearContentsCards
  } = useContentFunc();

  useEffect(() => {
    clearContentsCards();
    console.log("contentsCards in articles", contentCards);
  }, [])

  useEffect(() => {
    console.log(data?.getArticles);
    if(data?.getArticles){
      console.log("data.getarticles");
      setAllData(data?.getArticles);
      articleUnitsVar(data.getArticles);
      setArticleData(data?.getArticles);
      console.log(articleData);
    }
    if(error){
      console.log("error", error);
      if(error.message === "Authentication Failed"){
        logout();
      }
    }
  }, [data, error]);

  useEffect(() => {
    if(areaId !== 0 && keyword === ""){
      console.log("case 1", areaId);
      const filterData = allData.filter((set) => set.area.id === areaId);
      setArticleData(filterData);
    }
    if(areaId === 0 && keyword !== ""){
      console.log("case 2");
      setArticleData(allData.filter(set => set.title.includes(keyword))!);
    }
    if(areaId !== 0 && keyword !== ""){
      console.log("case 3");
      setArticleData(allData.filter(set => set.area.id === areaId && set.title.includes(keyword))!);
    }
    if(areaId === 0 && keyword === ""){
      console.log("case 4");
      console.log("articleall", articleAllVar);
      setArticleData(articleAllVar || allData);
    }
    console.log("필터링 이후 areaId", areaId, "keyword :", keyword, articleData);
    console.log(firstPostIndex, lastPostIndex);
    // setCurrentPosts(articleData.slice(firstPostIndex, lastPostIndex));
  }, [areaId, keyword, firstPostIndex, lastPostIndex]);

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
        <SearchBar handleChange={setKeyword} />
        <div className='flex gap-2 z-10'>
          <SelectBox theme="areas" handleChange={setAreaId} />
          <Button onClick={() => navigate("/yard-admin/write")} primary={true} label={"아티클 쓰기"}/>
        </div>
      </div>
      <div className="h-16 px-4 flex justify-between items-center">
        <Label text={"전체 아티클 " + allData.length + "개"}/>
        <select className='h-10 w-36 rounded-lg'
          value={postsPerPage}
          onChange={e => setPostsPerPage(Number(e.target.value))}>
          {countPerPage.map(i => (
            <option value={i} key={i}> {i} 개씩 보기</option>
          ))}
        </select>
      </div>
      <div className='flex z-0 px-3 flex-wrap max-w-{1300px}'>
        {articleData.slice(firstPostIndex, lastPostIndex).map((item : any) => (
          <ArticleCard key={item.id} articleUnit={item}/>
        ))}
      </div>
      <Pagination
        totalPosts={data?.getArticles?.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  )
}

