import React from 'react';
import style from './MyPost.module.css'
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostActionCreator} from '../../reduc/container-reducer';

const MyPost = (props) =>{

    let postElements = props.postData.map(post => <Post messeg = {post.messeg}  name ={post.name} src = {post.src}  alt = {post.alt}/>)
    let newPostElement = React.createRef()
   
    let addPost = () => {   
    props.dispatch(addPostActionCreator())
    
};
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostActionCreator(text);
        props.dispatch(action);
    }

   
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