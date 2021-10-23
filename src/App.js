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

const App = (props) => {

  return (
    <div className ='app-wrapper'>
     <Heder />
     <Sidebar />
     <div className = "app-wrapper-container">
       <Route path = '/Dialogs' render = {() => <Dialogs store = {props.store} state =  {props.state.dialogs} messagesData = {props.state.dialogs.messagesData}/> } />
       <Route path = '/Container' render = { () => <Container container = {props.state.container} dispatch = {props.dispatch}/>} />
       <Route path = '/News' render = { () => <News />}/>
       <Route path = '/Settings' render = { () => <Settings />}/>
       <Route path = '/Music' render = { () => <Music />}/>
     </div>
     <Footer />
    </div>
  )
}


export default App;
