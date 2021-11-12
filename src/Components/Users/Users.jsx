import React from 'react'
import style from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/image.png'

class Users extends React.Component {
  
    componentDidMount(){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)  
    })//компонент смонтирован - метод жизненного цикла.
}
    render() { 
    
        return <div className={style.user}>
            <button onClick ={this.getUsers}>Get users</button>
            {
                this.props.users.map((u) => <div key={u.id}>

                    <div className={style.users}>
                        <div className={style.users_foto}>
                            <p><img className={style.img_1} src={u.photos.small = null ? u.photos.small : userPhoto} alt='foto' /></p>
                            <p>
                                {u.followed
                                    ? <button onClick={() => { this.props.unfollow(u.id) }}>unFollow</button>
                                    : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>
                                }
                            </p>
                        </div>
                        <div className={style.users_information}>
                            <div className={style.users_name}>
                                <p>{u.name}</p>
                                <p>{u.status}</p>
                            </div>
                            <div className={style.users_location}>
                                <p>{"u.location.country"}</p>
                                <p>{"u.location.city"}</p>
                            </div>
                        </div>
                    </div>
                </div>)
            }

        </div>
    }
}

export default Users