import React from "react";
import "./Profile.css";
import avatar from "../../img/user-male-icon.png";
import ProfileDataEdit from "./ProfileDataEdit";

const Profile = (props) => {
    console.log(props);
    return (
        <div className="profile">
            <div className="profile-container">
                <div className="profile-avatar">
                    <img src={avatar} />
                </div>
                <div className="profile-info">
                    <h2>{props.user.first_name + " " + props.user.second_name}</h2>
                    <h3>{props.user.email}</h3>
                    <h3>{props.user.mobile_phone}</h3>
                </div>
            </div>
            <div className="clr"></div>
            <div className="profile-tabs">
                <ul>
                    <li>Мои данные</li>
                    <li>История заказов</li>
                </ul>
                <div className="clr"></div>
                <div className="profile-tabs-container">
                    <ProfileDataEdit {...props.user}/>
                </div>
            </div>
        </div>
    )
};
export default Profile;
