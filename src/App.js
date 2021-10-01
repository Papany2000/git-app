import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Heder from './Components/Heder/Heder'
import Sidebar from './Components/Sidebar/Sidebar';
import Container from './Components/Container/Container';
const App = () => {
  return (
    <div className ='app-wrapper'>
     <Heder />
     <Sidebar />
     <Container />
     <Footer />
    </div>
  )
}


export default App;
