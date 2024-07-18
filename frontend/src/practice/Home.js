import React from 'react';
import styled from 'styled-components'
import { Button } from 'react-bootstrap';


const StyledHomeDiv=styled.div`
text-align: center;

padding: 20px 0 20px 0;
display: block;

`;



//function 방식 
const Home = (props) => {
   

    const{boards,setBoards,number,setNumber}=props;
    


    return (
        <div>
            
            <Button variant="primary" onClick={()=>setNumber(number+1)}>버튼</Button>
        <StyledHomeDiv>
            <h1>홈 페이지 입니다.</h1>
            <button onClick={()=>{setBoards([])}}>삭제 버튼</button>
            {boards.map(n=><h3>제목:{n.title} 내용:{n.content}</h3>)}
        </StyledHomeDiv>
        </div>
    );
};

export default Home;