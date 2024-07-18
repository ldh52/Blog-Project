import React from 'react'
import './style.css';
import { commentListItem } from '../../Types/Interface';
import defaultProfileImage from '../../Assets/Image/default-profile-image.png';
import dayjs from 'dayjs';
interface Props{
    commentListItem:commentListItem;
}

// component: comment list item 컴포넌트 
export default function CommentItem({commentListItem}:Props) {

// state: properties 
const{nickname,profileImage,writeDatetime,content}=commentListItem;
//  function : 작성일 경과 시간 함수 
const getElapsedTime =()=>{
  
  const now =dayjs().add(9,'hour');
  const writeTime =dayjs(writeDatetime);
  
  const gap= now.diff(writeTime,'s');
  if (gap < 60) return `${gap}초 전`;
  if (gap < 3600) return `${Math.floor(gap / 60)}분 전`;
  if(gap  < 86400) return `${Math.floor(gap / 3600)}시간 전`;
  return `${Math.floor(gap/ 86400)}일 전`;
  
}
// render: commmet list item 렌더링 
  return (
    <div className='Comment-List-Item'>
      <div className='Comment-List-Item-Top'>
            <div className='Comment-List-Item-Profile-Box'>
                    <div className='Comment-List-Item-Profile-Image' style={{backgroundImage:`url(${profileImage ?profileImage :defaultProfileImage})`}}></div>
            </div>
            <div className='Comment-List-Item-Nickname'>{nickname}</div>
            <div className='Comment-List-Item-Divider'>{'|'}</div>
            <div className='Comment-List-Item-Time'>{getElapsedTime()}</div>
      </div>
      <div className='Comment-List-Item-Main'></div>
            <div className='Comment-List-Item-Content'>{content}</div>
    </div>
  )
}
