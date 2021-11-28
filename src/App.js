import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Heder from './Components/Heder/Heder'
import Sidebar from './Components/Sidebar/Sidebar';
import ProfileContainer from './Components/Container/ProfileContainer';
import {Route}  from 'react-router-dom'
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
const App = (props) => {

  return (
    <div className ='app-wrapper'>
     <Heder />
     <Sidebar />
     <div className = "app-wrapper-container">
       <Route path = '/Dialogs' render = {() => <DialogsContainer /> } />
       <Route path = '/Container' render = { () => <ProfileContainer />} />
       <Route path = '/News' render = { () =>  <News />}/>
       <Route path = '/users' render = { () => <UsersContainer />}/>
       <Route path = '/Settings' render = { () => <Settings />}/>
       <Route path = '/Music' render = { () => <Music />}/>
     </div>
     <Footer />
    </div>
  )
}


export default App;
