import React from 'react';
import style from './Post.module.css'
const Post = (props) => {
    return <div>
            <div class = {style.post}>
            <p className = 'person'>
                <img className = {style.person} src = {props.src} alt = 'Фото'/>
            </p>
            <p>{props.name}</p>
            <textarea>
                {props.messeg}
            </textarea>
            <p><button>send</button></p>
            </div>
        </div>
}
export default Post