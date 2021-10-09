import React from 'react';

import style from './MyPost.module.css'
import Post from './Post/Post';
const MyPost = () =>{
    return<div>
    <div>
       
        <div class = {style.post}>
        <h3> My post</h3>
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