import React, { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import './style.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { AUTH_PATH, BOARD_DETAIL_PATH, BOARD_UPDATE_PATH, BOARD_WRITE_PATH, MAIN_PATH, SEARCH_PATH, USER_PATH } from '../../Constants';
import { useCookies } from 'react-cookie';
import { useBoardStore, useLoginUserStore } from '../../Stores';
import { BOARD_PATH } from '../../Constants/index';
import { fileUploadRequest, patchBoardRequest, postBoardReqest } from '../../Apis';
import { PatchBoardRequestDto, PostBoardRequestDto } from '../../Apis/Request/Board';
import { ResponseDto } from '../../Apis/Response';
import { PatchBoardResponseDto, PostBoardResponseDto } from '../../Apis/Response/Board';


// component: 헤더 레이아웃 
export default function Header() {
//state: path상태 
const{pathname}=useLocation();
// state: 로그인 유저 상태 
const{loginUser,setLoginUser,resetLoginUser}=useLoginUserStore();
// state: cookie 상태 
const [cookies,setCookie]=useCookies();
// state: 로그인 상태 
const[isLogin,setLogin]=useState<boolean>(false);
// state: 인증, 메인 ,검색 ,게시물 상세 작성 수정 , 유저페이지 상태 

const[isAuthPage,setAuthPage]=useState<boolean>(false);
const[isMainPage,setMainPage]=useState<boolean>(false);
const[isSearchPage,setSearchPage]=useState<boolean>(false);
const[isBoardDetailpage,setBoardDetailpage]=useState<boolean>(false);
const[isBoardWritePage,setBoardWritePage]=useState<boolean>(false);
const[isBoardUpdatePage,setBoardUpdatePage]=useState<boolean>(false);
const[isUserPage,setUserPage]=useState<boolean>(false);
/*
//const isAuthPage =pathname===AUTH_PATH();
const isAuthPage =pathname.startsWith(AUTH_PATH());
const isMainPage =pathname===(MAIN_PATH());
const isSearchPage =pathname.startsWith(SEARCH_PATH(''));
const isBoardDetailpage=pathname.startsWith(BOARD_PATH()+'/'+BOARD_DETAIL_PATH('')); 
const isBoardWritePage=pathname.startsWith(BOARD_PATH()+'/'+BOARD_WRITE_PATH());
const isBoardUpdatePage=pathname.startsWith(BOARD_PATH()+'/'+BOARD_UPDATE_PATH(''));
const isUserPage=pathname.startsWith(USER_PATH(''));
*/
// function: 네비게이트 함수

const navigate=useNavigate();

// event handler: 로고 클릭 이벤트 처리 함수 

const onLogoClickHandler=()=>{
  navigate(MAIN_PATH());
}

// component: 검색 버튼 컴포넌트 

const SearchButton=()=>{

// state: 검색어 버튼 요소 참조 상태 
const searchButtonRef=useRef<HTMLDivElement | null>(null);
// state: 검색 버튼 상태 
const[status,setStatus]=useState<Boolean>(false);
//state; 검색어 상태 
const[Word,setWord]=useState<string>('');
//state: 검색어 path variable 상태 
const {searchWord}=useParams();
// event handler: 검색어 변경 이벤트 처리 함수 
const onSearchWordHandler=(event:ChangeEvent<HTMLInputElement>)=>{

    const value=event.target.value;
    setWord(value); 
};
// event handler: 검색어 키 이벤트 처리 함수 
const onSearchWordKeyDownHandler=(event:KeyboardEvent<HTMLInputElement>)=>{
    if(event.key !=='Enter') return;
    if(!searchButtonRef.current) return;
    searchButtonRef.current.click();

};
// event handler: 검색 버튼 클릭 이벤트 처리 함수 
const onSearchClickHandler=()=>{
  if(!status){
    setStatus(!status);
    return;
  }
  navigate(SEARCH_PATH(Word))
};
//effect: 검색어 path variable 변경 될때 마다 실행될 함수 
useEffect(()=>{
  if(searchWord) {
    setWord(searchWord);
    setStatus(true);
  }
},[searchWord]);
//status는 현재 검색 버튼의 상태를 나타냄. false인 경우 검색 버튼이 보이고, true인 경우 검색 입력 상자가 보인다
if (!status)
// render: 검색버튼 컴포넌트 랜더링(클릭 x false)
return (<div className='Icon-Button' onClick={onSearchClickHandler}>
              <div className='Icon serch-light-icon'></div>
        </div>
       );
// render: 검색버튼 컴포넌트 랜더링(클릭 o true) 
return(
  <div className='Header-Search-Input-Box'>
        <input className='Hedaer-Search-Input'type='text' placeholder='검색어를 입력해주세요.' value={Word} onChange={onSearchWordHandler} onKeyDown={onSearchWordKeyDownHandler}/>
        <div ref={searchButtonRef} className='Icon-Button' onClick={onSearchClickHandler}>
             <div className='Icon serch-light-icon'>
             </div>
        </div>

  </div>
)
}
  // component: 마이페이지 버튼 컴포넌트 
const MyPageButton=()=>{

// state: 유저 이메일 path variable 상태 
const {userEmail}=useParams();

// event handler: 마이페이지 버튼 클릭 이벤트 처리함수 
const onMyPageButtonClickHandler=()=>{
  if(!loginUser) return;
  const{email}=loginUser;
 
  navigate(USER_PATH(email));
};
// event handler: 로그아웃 버튼 클릭 이벤트 처리함수 
const onSinginOutButtonClickHandler=()=>{
  resetLoginUser();
  setCookie('accessToken','',{path:MAIN_PATH(),expires: new Date()})
  navigate(MAIN_PATH());
};
// event handler: 로그인 버튼 클릭 이벤트 처리함수 
const onSignInButtonClickHandler=()=>{
  navigate(AUTH_PATH());
};

console.log('isLogin:', isLogin);
console.log('userEmail:', userEmail);
console.log('loginUser?.email:', loginUser?.email);
// render: 로그아웃 버튼 컴포넌트 렌더링 
if(isLogin && userEmail ===loginUser?.email)
return<div className='white-button' onClick={onSinginOutButtonClickHandler}>{'로그아웃'}</div>;
// render: 마이페이지 버튼 컴포넌트 렌더링 
if(isLogin)
return<div className='white-button' onClick={onMyPageButtonClickHandler}>{'마이페이지'}</div>;
// render: 로그인 버튼 컴포넌트 렌더링 
return<div className='black-button'onClick={onSignInButtonClickHandler}>{'로그인'}</div>;

};
  // component: 업로드 버튼 컴포넌트 
const UpLoadButton=()=>{

// state: 게시물 번호 path variable 상태 
const {boardNumber}=useParams();
// state: 게시물 상태 
const {title,content,boardImageFileList,resetBoard}=useBoardStore();

//function: post board response 처리 함수 

const postBoardResponse =(responseBody:PostBoardResponseDto|ResponseDto|null)=>{
    if(!responseBody)return;
    const{code}= responseBody;
    if(code ==='AF' ||code==='NU') navigate(AUTH_PATH());
    if(code==='VF') alert('제목과 내용은 필수입니다.');
    if(code==='DBE') alert('데이터베이스 오류 입니다.');
    if(code !=='SU') return;

    resetBoard();
    if(!loginUser)return;
    const {email}=loginUser;
    navigate(USER_PATH(email));
}
//function: patch board response 처리 함수 
const patchBoardResponse=(responseBody:PatchBoardResponseDto|ResponseDto|null)=>{
  if(!responseBody)return;
    const{code}= responseBody;
    if(code ==='AF' ||code==='NU'||code==='NB'||code==='NP') navigate(AUTH_PATH());
    if(code==='VF') alert('제목과 내용은 필수입니다.');
    if(code==='DBE') alert('데이터베이스 오류 입니다.');
    if(code !=='SU') return;

    if(!boardNumber) return;
    navigate(BOARD_PATH()+'/'+BOARD_DETAIL_PATH(boardNumber))
}
// event handler: 업로드 버튼 클릭 이벤트 처리  
const onUpLoadButtonClickHandler= async()=>{
    
    const accessToken=cookies.accessToken;
    if(!accessToken) return;

    const boardImageList:string[]=[];

    
    for(const file of boardImageFileList){

      const data=new FormData();
      data.append('file',file);

      const url=await fileUploadRequest(data);
      if(url) boardImageList.push(url);

    }
    const isWriterPage= pathname ===BOARD_PATH()+'/'+BOARD_WRITE_PATH();
    if(isWriterPage){
      const requestBody:PostBoardRequestDto={
        title,content,boardImageList
      }
      postBoardReqest(requestBody,accessToken).then(postBoardResponse);
  
    }else{
      if(!boardNumber)return;
      const requestBody:PatchBoardRequestDto={
        title,content,boardImageList
      }
      patchBoardRequest(boardNumber,requestBody,accessToken).then(patchBoardResponse);
    }



   
}
if(title&&content)
// render: 업로드 버튼 컴포넌트 렌더링
return<div className='black-button'onClick={onUpLoadButtonClickHandler}>{'업로드'}</div>;

// render: 업로드 불가 버튼 컴포넌트 렌더링
return<div className='disable-button'>{'업로드'}</div>;


};

// effect: path가 변경 될때 마다 실핼될 함수 
useEffect(()=>{

  const isAuthPage =pathname.startsWith(AUTH_PATH());
        setAuthPage(isAuthPage);
  const isMainPage =pathname===(MAIN_PATH());
        setMainPage(isMainPage);
  const isSearchPage =pathname.startsWith(SEARCH_PATH(''));
        setSearchPage(isSearchPage);
  const isBoardDetailpage=pathname.startsWith(BOARD_PATH()+'/'+BOARD_DETAIL_PATH('')); 
        setBoardDetailpage(isBoardDetailpage);
  const isBoardWritePage=pathname.startsWith(BOARD_PATH()+'/'+BOARD_WRITE_PATH());
        setBoardWritePage(isBoardWritePage);
  const isBoardUpdatePage=pathname.startsWith(BOARD_PATH()+'/'+BOARD_UPDATE_PATH(''));
        setBoardUpdatePage(isBoardUpdatePage)
  const isUserPage=pathname.startsWith(USER_PATH(''));
        setUserPage(isUserPage);

},[pathname]);


useEffect(()=>{
  setLogin(loginUser !==null);
},[loginUser])
// render: 헤더 레이아웃 렌더링 
  return (
    <div id= 'Header'>
      <div className='Header-Container'>
            <div className='Header-Left-Box' onClick={onLogoClickHandler}>
                  <div className='Icon-Box'>
                      <div className='Icon Logo-Dark-Icon'></div>
                  </div>
                  <div className='Header-Logo'>{'coffee Blog'}</div>
            </div>
            <div className='Header-Right-Box'>
              { (isAuthPage || isMainPage || isSearchPage ||isBoardDetailpage)&& <SearchButton/>}
              {(isMainPage || isBoardDetailpage || isSearchPage || isUserPage )&& <MyPageButton/> }
              {(isBoardWritePage ||isBoardUpdatePage  )&& <UpLoadButton/>}

            </div>
      </div>

    </div>
  )
}
