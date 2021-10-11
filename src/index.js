import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let postData = [
  {id: 1, messeg: 'Мне нравится ваш пост', name: 'Pete Y.', src: 'https://cdn.pixabay.com/photo/2016/05/17/22/16/baby-1399332_960_720.jpg', alt: 'foto' },
  {id: 2, messeg: 'Мне нравится ваш пост', name: 'Djon T.', src: 'https://cdn.pixabay.com/photo/2015/06/23/09/13/music-818459__340.jpg', alt: 'foto' },
]
ReactDOM.render(
  <React.StrictMode>
    <App postData = {postData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
