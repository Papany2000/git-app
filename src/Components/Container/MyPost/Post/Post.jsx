import React from 'react';
import style from './Post.module.css'
const Post = (props) => {

    return <div>
            <div className = {style.post}>
            <p className = "person">
                <img className = {style.person} src = {props.src} alt = {props.alt}/>
            </p>
            <p>{props.name}</p>
            <textarea>
                {props.messeg}
            </textarea>
            
            </div>
        </div>
}
export default Post