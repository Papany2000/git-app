import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import style from './ProfileInfo.module.css'
const ProfileInfo = (props) =>{
    
    if (!props.container){
        return <Preloader/>
    }
    
    return (
       
        <div>
            <p> <img className = {style.img} src = 'https://cdn.pixabay.com/photo/2021/09/25/15/46/step-by-step-6655274__340.jpg' alt = 'fgdfgh'/></p>
    <div className={style.user}>
          <p><img className={style.foto} src = {props.container.photos.small}  alt='foto' /></p>
          <p className={style.text}>{props.container.fullName}<br />{props.container.contacts.facebook}<br /> {props.container.aboutMe}</p>
    </div>
        </div>
    
    )
}
export default ProfileInfo
 