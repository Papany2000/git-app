import React from 'react';
import style from './Container.module.css'
import MyPostContainer from './MyPost/MyPostContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Container = (props) => {

   return (
      <div className={style.container}>
         <ProfileInfo />
         <MyPostContainer  />
      </div>
   )
}
export default Container