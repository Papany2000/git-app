import React from 'react';
import style from './Heder.module.css'
import images from './images/2.jpg'
const Heder = () => {
  return <header className = {style.header}>
       <img src = {images} alt = "foto"/>
   </header> 
}
export default Heder