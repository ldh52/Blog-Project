import React from 'react'
import './style.css';
import { favoriteListItem } from '../../Types/Interface';
import defaultProfileImage from '../../Assets/Image/default-profile-image.png';

interface Props{
    FavoriteListItem:favoriteListItem;
}




export default function FavoriteItem({FavoriteListItem}:Props) {

const{profileImage,nickname}=FavoriteListItem;

  return (
    
      <div className='Favorite-List-Item'>
            <div className='Favorite-List-Item-Profile-Box'>
                    <div className='Favorite-List-Item-Profile-Image'style={{backgroundImage:`url(${profileImage ?profileImage :defaultProfileImage})`}}></div>
            </div>
      
            <div className='Favorite-List-Item-Nickname'>{nickname}</div>
    </div>
  )
}


