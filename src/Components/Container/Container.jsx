import React from 'react';
import style from './Container.module.css'
import MyPostContainer from './MyPost/MyPostContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Container = (props) => {

   return (
      <div className={style.container}>
         <ProfileInfo />
         <MyPostContainer store = {props.store} />
      </div>
   )
}
export default Container