import React from 'react'
import style from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/image.png'

class Users extends React.Component {
  
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)   
    })//компонент смонтирован - метод жизненного цикла. За ЖЦ вызывается один раз.
}
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items) 
            this.props.setTotalUsersCount(response.data.totalCount) 
         })
    }
    render() { 
    let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
    let pages =[]
    for(let i = 1; i <= 50; i++){
        pages.push(i)
    }
        return <div className={style.user}>
            <div> 
               {pages.map( p => {
return <span onClick = {(e) => this.onPageChanged(p)} className = {this.props.currentPage === p && style.selectedPage}>{p}</span>

               })}
               
            </div>
          
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