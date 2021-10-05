import React from 'react';
import './App.css';
// import Dialogs from './Components/Dialogs/Dialogs.jsx';
import Footer from './Components/Footer/Footer';
import Heder from './Components/Heder/Heder'
import Sidebar from './Components/Sidebar/Sidebar';
import Container from './Components/Container/Container';

const App = () => {
  return (
    <div className ='app-wrapper'>
     <Heder />
     <Sidebar />
     <div class = "app-wrapper-container">
     <Container />
     </div>
     {/* <Dialogs /> */}
     
     <Footer />
    </div>
  )
}


export default App;
