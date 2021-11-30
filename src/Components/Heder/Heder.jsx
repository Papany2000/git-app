import React from 'react';
import style from './Heder.module.css'
import images from './images/2.jpg'
import {NavLink} from 'react-router-dom'
const Heder = (props) => {
  return <header className = {style.header}>
  
       <img src = {images} alt = "foto"/>
       < div className = {style.loginBlock}>
        {props.isAuth ? props.login 
        : <NavLink to = {'/login'}>Login</NavLink>}
         
       </div>

   </header> 
}
export default Heder