import React from 'react';
import App from './Board/App';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
   <App/>
   </BrowserRouter>
   </React.StrictMode>,
   document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

//reactDom.render 의미 : 어떤 데이터를 기반으로 그림 그리는? <App/>클릭해봐 :jsx문법 
// App.js 로 이동  root 를 index html의 root 라는 것을 찾는다 
//index html 파일은 빈파일 즉 , 이 파일에 root안에 우리가 만든게 들어간다?
// npm start 하면은 index.js가 실행되고 root를 찾아 html로가서 <App />를 그린다?