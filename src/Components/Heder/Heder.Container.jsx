import React from 'react'
import Header from './Heder'
import * as axios from 'axios'
import { connect } from 'react-redux'
import { setAuthUserData } from '../reduc/auth-reducer';
class HederContainer extends React.Component {
    componentDidMount() {
      axios.post(`https://social-network.samuraijs.com/api/1.0/auth/login`, {email: 'meltice.spb@gmail.com', password: 'meltice'}, {withCredentials: true}).then(response => {
        console.log(response)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true, headers: {
              'API-KEY': '2dd63b84-863f-4c04-8579-e7bb3dd375ab'
          }
        } )
        .then(response => {
    console.log(response)
          if(response.data.resultCode === 0) {
              let {id, email, login} = response.data.data
            this.props.setAuthUserData(id, email, login)
          } 
        })
      })
      
    }
    
    render(){
        return <Header {...this.props}/>
    }
  }
  let mapStateToProps = (state) => {
    return {
     isAuth: state.auth.isAuth,
     login: state.auth.login,
    }
}
  export default connect(mapStateToProps, {setAuthUserData}) (HederContainer)