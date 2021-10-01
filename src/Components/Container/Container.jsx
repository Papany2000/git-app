import React from 'react';
import style from './Container.module.css'
import image from './image/1.jpg'
const Container = () =>{
   return <container className = {style.container}>
    <p> <img className = {style.img} src = 'https://cdn.pixabay.com/photo/2021/09/25/15/46/step-by-step-6655274__340.jpg' alt = 'fgdfgh'/></p>
    <p><img className = {style.foto} src = {image}  alt = 'foto'/> Papany 2000</p>
    <div>
      <p>My post</p>
      <p>Отправить</p>
    </div>
    <p>hey, whi nobodi love me</p>
    <p>It,s our new program! Hey!</p>
   </container>
}
export default Container