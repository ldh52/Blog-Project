import React from 'react'
import './style.css';
import DefaultProfileImage from '../../Assets/Image/DefaultProfileImage.png';
import { BoardListItem } from '../../Types/Interface';
import { useNavigate } from 'react-router-dom';
import { BOARD_DETAIL_PATH, BOARD_PATH } from '../../Constants';

interface Props{
    Top3ListItem: BoardListItem
}

// component: Top 3 List Item  컴포넌트 
export default function Top3Item({Top3ListItem}:Props) {
// properties //
    const {boardNumber,title,content,boardTitleImage}=Top3ListItem;
    const {favoriteCount,commentCount,viewCount}=Top3ListItem;
    const {writeDatetime,writerProfileImage,writerNickname}=Top3ListItem;
// function: 네비게이트 함수 
const navigate=useNavigate();

//event handler: 게시물 아이템 클릭 이벤트 처리 함수 
const onClickHandler =()=>{
    navigate(BOARD_PATH()+'/'+BOARD_DETAIL_PATH(boardNumber));
}
// render: Top 3 List Item 컴포넌트 랜더링 
  return (
    <div className='Top3-List-Item' style={{backgroundImage:`url(${boardTitleImage})`}} onClick={onClickHandler}>
        <div className='To3-List-Item-Main-Box'>
                <div className='Top3-List-Item-Top'>
                            <div className='Top3-List-Profile-Box'>
                                <div className='Top3-List-Item-Profile-Image' style={{backgroundImage:`url(${writerProfileImage ?writerProfileImage :DefaultProfileImage})`}}></div>
                            </div>
                            <div className='Top3-List-Item-Write-Box'>
                                <div className='Top3-List-Item-Nickname'>{writerNickname}</div>
                                <div className='Top3-List-Item-Write-Date'>{writeDatetime}</div>
                            </div>
                </div>
                <div className='Top3-List-Item-Middle'>
                            <div className='Top3-List-Item-title'>{title}</div>
                            <div className='Top3-List-Item-content'>{content}</div>
                </div>
                <div className='Top3-List-Item-Bottom'>
                            <div className='Top3-List-Item-Counts'>{`댓글${commentCount} 좋아요${favoriteCount} 조회수${viewCount}`}</div>
                </div>
        </div>
    </div>
  )
}
