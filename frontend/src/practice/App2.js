import React, { useState,useEffect } from 'react';
import Top from './Top';
import Bottom from './Bottom';
import './App.css';


import axios from 'axios';

function App() {

    const [hello, setHello] = useState([]); 
    useEffect(() => {
        axios.get('/api/hello')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);


    return (
       <div>
            <div className='container'>
            <h1>최상단 화면</h1>
            <div>아이패드 맥  화면 미링 테스트 성공</div>
          <div>백엔드에서 가져온 데이터:{hello}</div>
            <Top />  
            <Bottom  />
            </div>
      
      </div>
    );
}

export default App;


//index.js

/*



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux";
import {createStore} from "redux";
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.js';
import reducer from './practice/store';


const store=createStore(reducer);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
   <App/>
   </Provider>
  </BrowserRouter>








*/