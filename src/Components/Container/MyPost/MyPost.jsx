import React from 'react';
import style from './MyPost.module.css'
import Post from './Post/Post';
const MyPost = (props) =>{

    let postElements = props.postData.map(post => <Post messeg = {post.messeg}  name ={post.name} src = {post.src}  alt = {post.alt}/>)
    return<div>
    <div>
        <div class = {style.post}>
        <h3> My post</h3>
        <textarea>
        </textarea>
        <p><button>send</button></p>
        </div>
    </div>
    {postElements}
</div>
}
export default MyPost