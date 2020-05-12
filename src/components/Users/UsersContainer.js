import React from 'react';
import {
    follow, getUsers, setCurrentPage,
    toggleIsFollowingProgress,
    unFollow
} from "../../redux/users_reducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../../common/preloader/preloader";
import {withAuthRedirectComponent} from "../../HOC/withAuthRedirect";
import {compose} from "redux";



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        /*this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setUsersTotalCount(data.totalCount);
        });*/
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
    };
    render() {

        return <>
            {this.props.isFetching ?  <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      unFollow={this.props.unFollow}
                      follow={this.props.follow}
                      followingInProgress={this.props.followingInProgress} />
</>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(follow(userId));
        },
        unFollow: (userId) => {
            dispatch(unFollow(userId));
        },
        setUsers: (users) => {
            dispatch(setUsers(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPage(pageNumber));
},
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCount(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetching(isFetching))
        }
    }
};*/


export default compose(
    connect(mapStateToProps, {
        follow, unFollow, setCurrentPage,
        toggleIsFollowingProgress, getUsers}),
    withAuthRedirectComponent
)(UsersContainer);