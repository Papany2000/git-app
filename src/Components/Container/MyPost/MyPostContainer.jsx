import React from 'react';
import MyPost from './MyPost'
import {addPostActionCreator, updateNewPostActionCreator} from '../../reduc/container-reducer';

const MyPostContainer = (props) =>{
   let state = props.store.getState();
    let addPost = () => {   
    props.store.dispatch(addPostActionCreator())
    
};
    let onPostChange = (text) => {
        let action = updateNewPostActionCreator(text);
        props.store.dispatch(action);
    }

   
    return  (<MyPost updateNewPostText = {onPostChange}  addPost = { addPost} postData = {state.container.postData} newPostText = {state.container.newPostText} />) 
          
}
export default MyPostContainer