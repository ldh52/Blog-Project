import React, { useEffect, useState } from 'react'
import './style.css';
import Top3Item from '../../Components/Top3Item';
import { BoardListItem } from '../../Types/Interface';
import BoardItem from '../../Components/BoardItem';
import Pagination from '../../Components/Pagination';
import { useNavigate } from 'react-router-dom';
import { SEARCH_PATH } from '../../Constants';
import { getLatestBoardListRequest, getPopularListRequest, getTop3BoardListRequest } from '../../Apis';
import { GetLatestBoardListResponseDto, GetTop3BoardListResponseDto } from '../../Apis/Response/Board';
import { ResponseDto } from '../../Apis/Response';
import { usePagination } from '../../Hooks';
import { GetPopularListResponseDto } from '../../Apis/Response/Search';




// component: 메인화면 컴포넌트 
export default function Main() {




  // component: 메인화면 상단 컴포넌트 
  const MainTop =()=>{
  //state: 주간 top3 게시물 리스트 상태(임시) 
  const[top3BoardList,setTop3BoardList]=useState<BoardListItem[]>([]);

  //function: get top 3 board list response 처리 함수 
  const getTop3BoardListResponse =(responseBody:GetTop3BoardListResponseDto |ResponseDto|null)=>{
    if(!responseBody) return;
    const {code}=responseBody;
    if(code ==='DBE') alert('데이터베이스 오류 입니다.');
    if(code !=='SU') return;

    const {top3List}=responseBody as GetTop3BoardListResponseDto;
    setTop3BoardList(top3List);
  }
  // effect: 첫 마운트 시 실핼될 함수 
  useEffect(()=>{
    getTop3BoardListRequest().then(getTop3BoardListResponse);
  },[])
  // render: 메인화면 상단 컴포넌트 렌더링 
  return(
    <div id='main-top-wrapper'>
        <div className='main-top-container'>
            <div className='main-top-title'>{'커피 전문점\n다양한 리뷰를 통해 소통해요'}</div>
            <div className='main-top-contents-box'>
                <div className='main-top-contents-title'>{'주간 TOP 3 게시물'}</div>
                <div className='main-top-contents'>
                  {top3BoardList.map(top3ListItem=><Top3Item Top3ListItem={top3ListItem}/>)}
                </div>
            </div>
        </div>
    </div>
  )
}







  // component: 메인화면 하단 컴포넌트 
  const MainBottom =()=>{

  // function: 네비게이트 함수 
  const navigate=useNavigate();

  //state: 페이지 네이션 관련 상태 
  const {
        currentPage,
        setCurrentPage,
        currentSection,
        setCurrentSection,
        viewList,
        viewPageList,
        totalSection,
        setTotalList
  }=usePagination<BoardListItem>(5);
  //state: 인기 검색어 리스트 상태 
  const[popularWordList,setPopularWordList]=useState<string[]>([]);

  //function: get latest board list response 처리 함수 
  const getLatestBoardListResponse =(responseBody:GetLatestBoardListResponseDto| ResponseDto |null)=>{
    if(!responseBody) return;
    const {code} =responseBody;
    if(code ==='DBE') alert('데이터 베이스 오류 입니다.');
    if(code !== 'SU') return;

    const {latestList}=responseBody as GetLatestBoardListResponseDto;
    setTotalList(latestList);
  }
//function: get latest board list response 처리 함수 
const getPopularListResponse =(responseBody:GetPopularListResponseDto| ResponseDto |null)=>{
  if(!responseBody) return;
  const {code} =responseBody;
  if(code ==='DBE') alert('데이터 베이스 오류 입니다.');
  if(code !== 'SU') return;

  const {popularWordList}=responseBody as GetPopularListResponseDto;
  setPopularWordList(popularWordList);
}
  //event handler: 인기 검색어 클릭 이벤트 처리 
  const onPopularWordClickHandler=(word:string)=>{
    navigate(SEARCH_PATH(word));
  }
  // effect: 첫 마운트 시 실핼될 함수 
  useEffect(()=>{
    getLatestBoardListRequest().then(getLatestBoardListResponse);
    getPopularListRequest().then(getPopularListResponse);
  },[])
  // render: 메인화면 하단 컴포넌트 렌더링 
  return(
      <div id='main-bottom-wrapper'>
        <div className='main-bottom-container'>
          <div className='main-bottom-title'>{'최신 게시물'}</div>
          <div className='main-bottom-contents-box'>
                <div className='main-bottom-current-contents'>
                  {viewList.map(boardListItem =><BoardItem boardListItem={boardListItem}/>)}
                  
                </div>
                <div className='main-bottom-popular-box'>
                          <div className='main-bottom-popular-card'>
                              <div className='main-bottom-popular-card-container'>
                                  <div className='main-bottom-popular-card-title'>{'인기 검색어'}</div>
                                  <div className='main-bottom-popular-card-contents'>
                                    {popularWordList.map(word=><div className='word-badge' onClick={()=>onPopularWordClickHandler(word)}>{word}</div>)}
                                  </div>
                              </div>
                          </div>
                </div>
          </div>
          <div className='main-bottom-pagination-box'>
            <Pagination
             currentPage={currentPage}
             currentSection={currentSection}
             setCurrentPage={setCurrentPage}
             setCurrentSection={setCurrentSection}
             viewPageList={viewPageList}
             totalSection={totalSection}/>
          </div>
        </div>
      </div>
  )
  }






// render: 메인화면 컴포넌트 렌더링 
  return (
    <>
     <MainTop/>
     <MainBottom/>
    </>
  )
}
