import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/js/all.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,//두 번씩 호출됨
  document.getElementById('root')
);//React Dom이라는 라이브러리를 이용해서 우리의 인덱스에 있는 root라는 아이디를 가진 요소와
//우리의 최상위의 component를 연결해주는 작업을 수행했음
//실제로 우리의 최상위 component는 app이라는 곳에서 시작한다.  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
