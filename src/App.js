import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Heder from './Components/Heder'
import Sidebar from './Components/Sidebar';
import Container from './Components/Container';
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
