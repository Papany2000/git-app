import React from 'react';
import './App.css';
import Footer from './Components/footer';
import Heder from './Components/heder'
import Sidebar from './Components/sidebar';
import Profile from './Components/profile';
const App = () => {
  return (
    <div className ='app-wrapper'>
     <Heder />
     <Sidebar />
     <Profile />
     <Footer />
    </div>
  )
}


export default App;
