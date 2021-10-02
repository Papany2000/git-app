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
    <Post />
    <Post />
</div>
}
export default MyPost