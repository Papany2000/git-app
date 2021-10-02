import React from 'react';
import style from './Container.module.css'
import MyPost from './MyPost/MyPost';
const Container = () =>{
   return <container className = {style.container}>
    <p> <img className = {style.img} src = 'https://cdn.pixabay.com/photo/2021/09/25/15/46/step-by-step-6655274__340.jpg' alt = 'fgdfgh'/></p>
    <MyPost />
   </container>
}
export default Container