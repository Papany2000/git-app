import React from 'react';
import style from './MyPost.module.css'
import Post from './Post/Post';
const MyPost = (props) =>{
    let addPost = () => {let text = newPostElement.current.value;
    alert(text)}
    let postElements = props.postData.map(post => <Post messeg = {post.messeg}  name ={post.name} src = {post.src}  alt = {post.alt}/>)
    let newPostElement = React.createRef()
    return <div>
    <div>
        <div class = {style.post}>
        <h3> My post</h3>
        <textarea ref = {newPostElement}></textarea>
        <p><button onClick = {addPost}>add post</button></p>
        </div>
    </div>
    {postElements}
</div>
}
export default MyPost