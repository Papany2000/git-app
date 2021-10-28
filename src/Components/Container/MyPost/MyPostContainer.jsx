import React from 'react';
import MyPost from './MyPost'
import {addPostActionCreator, updateNewPostActionCreator} from '../../reduc/container-reducer';
import StoreContext from '../../../StoreContext';

const MyPostContainer = () =>{
 
    return  (
         <StoreContext.Consumer>
             {
            (store) => {
                let state = store.getState();
                let addPost = () => {   
                    store.dispatch(addPostActionCreator())
                    
                };
                let onPostChange = (text) => {
                    let action = updateNewPostActionCreator(text);
                    store.dispatch(action);
                }
            
      return   <MyPost updateNewPostText = {onPostChange}  addPost = { addPost} postData = {state.container.postData} newPostText = {state.container.newPostText} />
        } 
     }
         </StoreContext.Consumer>
    )
          
}
export default MyPostContainer