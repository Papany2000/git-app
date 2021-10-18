import React from 'react';
import style from './MyPost.module.css'
import Post from './Post/Post';
const MyPost = (props) =>{

    let addPost = () => {   
    props.addPost()
    props.updateNewPostText('')
};
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    let newPostElement = React.createRef()

    let postElements = props.postData.map(post => <Post messeg = {post.messeg}  name ={post.name} src = {post.src}  alt = {post.alt}/>)
    return <div>
    <div>
        <div className = {style.post}>
        <h3> My post</h3>
        <textarea onChange = {onPostChange} ref = {newPostElement} value = {props.newPostText} />
        <p><button onClick = {addPost}>add post</button></p>
        </div>
    </div>
    {postElements}
</div>
}
export default MyPost