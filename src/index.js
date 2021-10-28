import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'
import store from './Components/reduc/redux-store';
import {BrowserRouter} from 'react-router-dom';
import StoreContext from './StoreContext';


let rerenderEntireTree = (state) =>{
  ReactDOM.render(
     <BrowserRouter>
         <StoreContext.Provider value = {store}>
             <App />
         </StoreContext.Provider>
      </BrowserRouter>,
    document.getElementById('root')
  );
}
rerenderEntireTree(store.getState())
let state = store.getState()
store.subscribe( () =>{rerenderEntireTree(state)} )//import из state
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
