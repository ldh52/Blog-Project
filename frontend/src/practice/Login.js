import React from 'react';
import styled from 'styled-components'



const StyledLoginDiv=styled.div`
text-align: center;

padding: 20px 0 20px 0;
display: block;

`;



const Login = () => {
   
    return (
        <StyledLoginDiv>
            <h1> 로그인 페이지 입니다</h1>
        </StyledLoginDiv>
    );
};

export  default Login;