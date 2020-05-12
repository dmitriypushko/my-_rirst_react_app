import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/preloader/preloader";
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img src="https://www.w3schools.com/howto/img_snow.jpg" alt="some alt text" />
            </div>
            <div className={s.descriptionBlock}>
                <img src = {props.profile.photos.large} />
                <ProfileStatus  status={props.status} updateStatus={props.updateStatus} />
            </div>
            <div className={s.descriptionBlock}>
                <h2>About me</h2> <h5>{props.profile.aboutMe} </h5>
                <h2>my contacts</h2> <h5>{props.profile.contacts.facebook} </h5>
                                     <h5>{props.profile.contacts.vk} </h5>
                                     <h5>{props.profile.contacts.twitter} </h5>
                <h5>Looking for a Job</h5> <h5>{props.profile.lookingForAJob} </h5>
                <h5>My full Name is </h5> <h5>{props.profile.fullName} </h5>

            </div>

        </div>
    )
};


export default ProfileInfo;