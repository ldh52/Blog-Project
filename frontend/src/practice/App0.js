import React, { useEffect,useMemo,useState,useRef } from 'react';
import Header from '../../style/PracticeStyle/Header';
import HomePage from '../../page/PracticePage/HomePage';
import Footer from '../../style/PracticeStyle/Footer';
import LoginPage from '../../page/PracticePage/LoginPage';

import {Route,Routes} from "react-router-dom";

function App1() {

 return (
    
        <div>
           
             
         <Header />
        
         <Routes>
         <Route path="/" exact={true} element={<HomePage/>}/>
         <Route path="/login/:id" exact={true} element={<LoginPage/>}/>
         </Routes> 
         
         <Footer />
        </div>
 );
};

export default App1;


