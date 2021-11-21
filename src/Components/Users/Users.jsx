import React from 'react'
import style from './Users.module.css'
import userPhoto from '../../assets/images/image.png'

let Users = (props) => {
    
    let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
    let s = '<<'
    let v = '>>'
   
    let pages =[]
    for(let i = 1; i <= pagesCount; i++){
        pages.push(i)
    }
        return <div className={style.user}>
            <div className = {style.span}> 
            <button onClick = {(e) =>props.pageIndexMinus()}>{s}</button>
               {pages.slice((props.pageIndex -1) * props.pageSize, props.pageIndex * props.pageSize).map( p => {
return <span onClick = {(e) => props.onPageChanged(p)} className = {props.currentPage === p && style.selectedPage}>{p}</span>

               })}
               <button onClick = {(e) =>props.pageIndexPlus()}>{v}</button>
            </div>
          
            {
                props.users.map((u) => <div key={u.id}>

                    <div className={style.users}>
                        <div className={style.users_foto}>
                            <p><img className={style.img_1} src={u.photos.small = null ? u.photos.small : userPhoto} alt='foto' /></p>
                            <p>
                                {u.followed
                                    ? <button onClick={() => { props.unfollow(u.id) }}>unFollow</button>
                                    : <button onClick={() => { props.follow(u.id) }}>Follow</button>
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


export default Users