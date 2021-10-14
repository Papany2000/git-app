import React from 'react';
import style from './Post.module.css'
const Post = (props) => {
    let addPost = () => {alert('Привет')}
    return <div>
            <div class = {style.post}>
            <p className = 'person'>
                <img className = {style.person} src = {props.src} alt = {props.alt}/>
            </p>
            <p>{props.name}</p>
            <textarea>
                {props.messeg}
            </textarea>
            <p><button onClick = {addPost}>send</button></p>
            </div>
        </div>
}
export default Post