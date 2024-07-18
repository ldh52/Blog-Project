import React from 'react';
import styled from 'styled-components'
//하나의 컴포넌트 생성(재사용)
const StyledFooterDiv=styled.div`


    border:1px solid black;
    height:300px;


`;

const Footer = () => {
    return (
        
            <StyledFooterDiv>
                <ul>
                    <li>오시는 길</li>
                    <li>전화번호 :01045884553</li>
                </ul>
            </StyledFooterDiv>
    
    );
};

export default Footer;
