import React from 'react';
import './App.css';
 import Dialogs from './Components/Dialogs/Dialogs';
import Footer from './Components/Footer/Footer';
import Heder from './Components/Heder/Heder'
import Sidebar from './Components/Sidebar/Sidebar';
import Container from './Components/Container/Container';
import {BrowserRouter, Route}  from 'react-router-dom'
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
    <div className ='app-wrapper'>
     <Heder />
     <Sidebar />
     <div class = "app-wrapper-container">
       <Route path = '/Dialogs' component = {Dialogs} />
       <Route path = '/Container' component = {Container} />
       <Route path = '/News' component = {News}/>
       <Route path = '/Settings' component = {Settings}/>
       <Route path = '/Music' component = {Music}/>
     </div>
     <Footer />
    </div>
    </BrowserRouter>
  )
}


export default App;
