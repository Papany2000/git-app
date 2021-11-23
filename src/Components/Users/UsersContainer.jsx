import Users from './Users'
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setPageIndex, toggleIsFetching } from '../reduc/users-reducer';
import * as axios from 'axios'
import React from 'react'
import Preloader from '../common/Preloader/Preloader';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)

        })
    }
    pageIndexPlus = () => {
        if (this.props.pageIndex * this.props.pageSize < this.props.totalUsersCount / this.props.pageSize) {
            this.props.setPageIndex(this.props.pageIndex + 1)
        }

    }
    pageIndexMinus = () => {
        if (this.props.pageIndex > 1) {
            this.props.setPageIndex(this.props.pageIndex - 1)
        }

    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                pageIndex={this.props.pageIndex}
                currentPage={this.props.currentPage}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                onPageChanged={this.onPageChanged}
                pageIndexPlus={this.pageIndexPlus}
                pageIndexMinus={this.pageIndexMinus}
                users={this.props.users}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        pageIndex: state.usersPage.pageIndex,
        isFetching: state.usersPage.isFetching
    }
}

export default UsersContainer = connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setPageIndex, toggleIsFetching, })(UsersContainer);
