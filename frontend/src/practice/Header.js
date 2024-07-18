import React from 'react';
import styled from 'styled-components';
import {Route,Routes,Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//하나의 컴포넌트 생성(재사용)
const StyledHeaderDiv= styled.div`
    border: 1px solid black;
    height: 300px;


`;

const Header = () => {
    return (
        
            <StyledHeaderDiv>
              <Navbar bg="light" data-bs-theme="light">
        <Container>
         
          <Nav className="me-auto">
            <Link to='/' className='nav-link'>홈</Link>
            <Link to='/Login/10' className='nav-link'>로그인</Link>

    
          </Nav>
        </Container>
      </Navbar>
            </StyledHeaderDiv>
    
    );
};

export default Header;


//rsc
//<a href='/'>HomePage</a> 전체 다시하기 됨 
//<Link to='/'>HomePage</Link> 필요한 부분만 
//math.params

//bootsrap 