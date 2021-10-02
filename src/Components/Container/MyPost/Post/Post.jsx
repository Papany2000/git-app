import React from 'react';
import style from './Post.module.css'
const Post = () => {
    return <div>
            <div class = {style.post}>
            <p> Post</p>
            <textarea>
            </textarea>
            <p><button>send</button></p>
            </div>
        </div>
}
export default Post