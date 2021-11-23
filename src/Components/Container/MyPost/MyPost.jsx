import React from 'react';
import style from './MyPost.module.css'
import Post from './Post/Post';


const MyPost = (props) =>{
    let postElements = props.postData.map((post, index)  => <Post key = {index} messeg = {post.messeg}  name ={post.name} src = {post.src}  alt = {post.alt}/>)
    let newPostElement = React.createRef()
   
    let addPost = () => { 
        props.addPost();   
};

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPost(text)
        
    }

    return <div>
    <div>
        <div className = {style.post}>
        <h3> My post</h3>
        <textarea onChange = {onPostChange} ref = {newPostElement} value = {props.newPostText} placeholder = ''></textarea>
        <p><button onClick = {addPost}>add post</button></p>
        </div>
    </div>
    {postElements}
</div>
}
export default MyPost