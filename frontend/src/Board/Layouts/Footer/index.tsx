import './style.css'

import React from 'react'



// component: 푸터 레이아웃 
export default function Footer() {
// event Handler: 인스타 아이콘 버튼 클릭 이벤트 처리 
const onInstaButtonClickHandler=()=>{
    window.open('https://www.instagram.com');
};
// event Handler: 네이버 블로그 버튼 클릭 이벤트 처리 
const onNaverBlogButtonClickHandler=()=>{
    window.open('https://blog.naver.com');
};
// render: 푸터 레이아웃 렌더링
  return (
    <div id='Footer'>
        <div className='Footer-Container'>
            <div className='Footer-Top'>
                        <div className='Footer-Logo-Box'>
                                    <div className='Icon-Box'>
                                            <div className=' Icon Logo-Light-Icon'></div>
                                    </div>
                                    <div className='Footer-Logo-Text'>{'JAEHO JEONG'}</div></div>
                        <div className='Footer-Link-Box'>
                                    <div className='Footer-Email-Link'>{'1010wogh@naver.com'}</div>
                                    <div className='Icon-Button' onClick={onInstaButtonClickHandler}>
                                                <div className='Icon Insta-Icon'></div>
                                    </div>
                                    <div className='Icon-Button'onClick={onNaverBlogButtonClickHandler}>
                                                <div className='Icon Naver-Blog-Icon'></div>
                                    </div>
                        </div>
            </div>
            <div className='Footer-Bottom'>
                        <div className='Footer-CopyRight'>{'Copyright 2024 All Rights Reserved.'}</div>
            </div>
        </div>
    </div>
  )
}
