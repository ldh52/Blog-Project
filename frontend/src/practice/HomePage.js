import React, { useEffect,useMemo,useState,useRef } from 'react';
import Home from '../style/Home';

//http요청 (jquery ajax,fetch,axios(다운 필요))






const HomePage = (propos) => {

    const[boards,setBoards]=useState([]);
    const[number,setNumber]=useState(0);

    

useEffect(()=>{
    
    let data=[
        
            {id:1,title:'제목 1',content:'내용 1'},
            {id:2,title:'제목 2',content:'내용 2'},
            {id:3,title:'제목 3',content:'내용 3'}

             ]
    // 빈데이터가 들어감 
    setBoards([...data]);

},[]);



    return (
        <div>
       
         <div>{number}</div>
         <Home boards={boards} setBoards={setBoards} number={number} setNumber={setNumber}/> 
       
        </div>
    );
};

export default HomePage;

//<Home boards={boards}/> 처음에는 데이터 빈 데이터 전달되고 그다음에 전달됨 