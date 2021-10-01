import React from 'react';
import style from './Sidebar.module.css'
const Sidebar = () =>{
return <sidebar className = {style.sidebar}>
<nav>
  <ul>
    <li>Профиль</li>
    <li>Сообщения</li>
    <li>Новости</li>
    <li>Музыка</li>
  </ul>
</nav>
</sidebar>
}
export default Sidebar