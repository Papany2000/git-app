import React from 'react';
import image from '../image/1.jpg'
import style from './MyPost.module.css'
import Post from './Post/Post';
const MyPost = () =>{
    return<div>
    <div>
        <div className={style.user}>
            <p><img className={style.foto} src={image} alt='foto' /></p>
            <p className={style.text}>Sergey Y.<br />Citi: Ryazan<br />Eduvation: BSU'11</p>
        </div>
        <div class = {style.post}>
        <p> My post</p>
        <textarea>
        </textarea>
        <p><button>send</button></p>
        </div>
    </div>
    <Post messeg = 'Мне нравится ваш пост' name = 'Pete Y.' src = 'https://cdn.pixabay.com/photo/2016/05/17/22/16/baby-1399332_960_720.jpg'/>
    <Post messeg = 'Мне не нравится ваш пост' name = 'Djon T.' src =  'https://cdn.pixabay.com/photo/2015/06/23/09/13/music-818459__340.jpg'/>
</div>
}
export default MyPost