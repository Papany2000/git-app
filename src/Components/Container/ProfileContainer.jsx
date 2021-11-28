import React from 'react'
import {withRouter} from 'react-router-dom'
import style from './Container.module.css'
import Container from './Container';
import { connect } from 'react-redux';
import {setUserContainer} from '../reduc/container-reducer';
import * as axios from 'axios';


class ProfileContainer extends React.Component{
    componentDidMount(){
        let userId = this.props.match.params.userId
        if(!userId){
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserContainer(response.data) 
           
        })
    }

    render(){
        return (
            <div className={style.container}>
             <Container {...this.props} 
               />
            </div>
         )
    }
}
let mapStateToProps = (state) => ({
    container: state.container
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserContainer}) (WithUrlDataContainerComponent)