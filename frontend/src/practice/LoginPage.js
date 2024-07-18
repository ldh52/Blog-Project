import React, { useEffect,useMemo,useState,useRef } from 'react';
import {Route,Routes,Link, useParams,useNavigate} from "react-router-dom";

import Login from '../style/Login';
//http 요청 (jquery,ajax,!!fetch,axios())

const LoginPage = (props) => {
        console.log(useParams());
        
        const navigate = useNavigate();
    return (
        <div>

    <Login/>
       <button onClick={()=>{navigate(-1);}}>뒤로가기</button>
        </div>
    );
};

export default LoginPage;


/*  rops 
    1.history   이전페이지로 돌아갈 수 있음 
    2.match     params 
    3.location  정보?

    라우터돔 뒤로가기 검색

*/