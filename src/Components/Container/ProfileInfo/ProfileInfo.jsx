import React from 'react';
import style from './ProfileInfo.module.css'
const ProfileInfo = (props) =>{
    return (
        <div>
            <p> <img className = {style.img} src = 'https://cdn.pixabay.com/photo/2021/09/25/15/46/step-by-step-6655274__340.jpg' alt = 'fgdfgh'/></p>
    <div className={style.user}>
          <p><img className={style.foto} src = 'https://images.pexels.com/photos/7155295/pexels-photo-7155295.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'  alt='foto' /></p>
          <p className={style.text}>Sergey Y.<br />Citi: Ryazan<br />Eduvation: BSU'11</p>
    </div>
        </div>
    
    )
}
export default ProfileInfo
 