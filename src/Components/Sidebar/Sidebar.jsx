import React from 'react';
import style from './Sidebar.module.css'
const Sidebar = (props) =>{
return <sidebar className = {style.sidebar}>
<nav>
  <ul>
   <a href = '/Container'><li>Профиль</li></a> 
   <a href = '/Dialogs'><li>Сообщения</li></a>
   <a href = '/News'><li>Новости</li></a>
   <a href = '/Music'><li>Музыка</li></a>
   <a href = '/Setting'><li>Настройка</li></a>
  </ul>
</nav>
</sidebar>
}
export default Sidebar