import React from 'react'
import style from './Users.module.css'

const Users = (props) => {
    
  
    return (<div className={style.user}>
        {
            props.users.map((u) => <div key={u.id}>

                <div className={style.users}>
                    <div className={style.users_foto}>
                        <p><img className={style.img_1} src={u.photoUrl} alt='foto' /></p>
                        <p>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>unFollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Follow</button>
                            }
                        </p>
                    </div>
                    <div className={style.users_information}>
                        <div className={style.users_name}>
                            <p>{u.fullName}</p>
                            <p>{u.status}</p>
                        </div>
                        <div className={style.users_location}>
                            <p>{u.location.country}</p>
                            <p>{u.location.city}</p>
                        </div>
                    </div>
                </div>
            </div>)
        }

    </div>)
}

export default Users