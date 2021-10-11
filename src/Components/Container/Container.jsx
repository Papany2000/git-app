import React from 'react';
import style from './Container.module.css'
import MyPost from './MyPost/MyPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Container = (props) =>{
 
   return (
   <div className = {style.container}>
     <ProfileInfo />
      <MyPost postData = {props.postData}/>
   </div>
   )
}
export default Container