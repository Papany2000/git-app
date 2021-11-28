import React from 'react'
import style from './Container.module.css'
import Container from './Container';
import { connect } from 'react-redux';
import {setUserContainer} from '../reduc/container-reducer';
import * as axios from 'axios';


class ProfileContainer extends React.Component{
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserContainer(response.data)
           
        })
    }




    render(){
        return (
            <div className={style.container}>
             <Container {...this.props} container = {this.props.container}  />
            </div>
         )
    }
}
let mapStateToProps = (state) => ({
    container: state.container
})
export default connect(mapStateToProps, {setUserContainer}) (ProfileContainer)