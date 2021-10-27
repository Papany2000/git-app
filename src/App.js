import React from 'react';
import './App.css';
 import Dialogs from './Components/Dialogs/Dialogs';
import Footer from './Components/Footer/Footer';
import Heder from './Components/Heder/Heder'
import Sidebar from './Components/Sidebar/Sidebar';
import Container from './Components/Container/Container';
import {Route}  from 'react-router-dom'
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';

const App = (props) => {

  return (
    <div className ='app-wrapper'>
     <Heder />
     <Sidebar />
     <div className = "app-wrapper-container">
       <Route path = '/Dialogs' render = {() => <DialogsContainer store = {props.store} /> } />
       <Route path = '/Container' render = { () => <Container store = {props.store} />} />
       <Route path = '/News' render = { () => <News />}/>
       <Route path = '/Settings' render = { () => <Settings />}/>
       <Route path = '/Music' render = { () => <Music />}/>
     </div>
     <Footer />
    </div>
  )
}


export default App;
