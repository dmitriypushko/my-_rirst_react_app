import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {getStatus, getUserProfile, updateStatus} from '../../redux/profile_reducer';
import {withAuthRedirectComponent} from '../../HOC/withAuthRedirect'
import {compose} from "redux";



class ProfileContainer extends React.Component{

    componentDidMount() {
        let userID = this.props.match.params.userId;
        if (!userID) {
            userID = this.props.authorizedUserId;
        }
        this.props.getUserProfile(userID);
        this.props.getStatus(userID);
};

    render() {

        return (
           <Profile {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus = {this.props.updateStatus} />
        )
    }

}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirectComponent
)(ProfileContainer);



