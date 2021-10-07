import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Sidebar.module.css'
const Sidebar = (props) =>{
return <sidebar className = {style.sidebar}>
    
   <div className = {style.item}>
   <NavLink to = '/Container' activeClassName = {style.activeLink}>Профиль</NavLink> 
   </div>
   <div className = {style.item}>
   <NavLink to = '/Dialogs' activeClassName = {style.activeLink}>Сообщения</NavLink>
   </div>
   <div className = {style.item}>
   <NavLink to = '/News' activeClassName = {style.activeLink}>Новости</NavLink>
   </div>
   <div className = {style.item}>
   <NavLink to = '/Music' activeClassName = {style.activeLink}>Музыка</NavLink>
   </div>
   <div className = {style.item}>
   <NavLink to = '/Settings' activeClassName = {style.activeLink}>Настройка</NavLink>
   </div>

</sidebar>
}
export default Sidebar