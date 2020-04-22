import React, {useState} from "react";

import avatar from "../../img/user-male-icon.png";
import ProfileDataEdit from "./ProfileDataEdit";
import Button from "../Button/Button";
import OrdersHistory from "./OrdersHistory";
import "./Profile.css";

const Profile = (props) => {

    const signOut = id => () => {
        props.signOut(id)
    };

    let [myInfo, setMyInfo] = useState(true);
    let [ordersHistory, setOrdersHistory] = useState(false);

    let goToMyInfo = () => {
        setMyInfo(true);
        setOrdersHistory(false);
    };

    let goToOrdersHistory = () => {
        setMyInfo(false);
        setOrdersHistory(true);
    };

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
                    <Button click={signOut(props.user.id)}
                            title="Выйти"
                            height="30px"
                            width="60px"
                            color="#000"
                            background-color={"red"}
                            border={"none"}
                            fontSize={"14px"}
                    />
                </div>
            </div>
            <div className="clr"></div>
            <div className="profile-tabs">
                <ul className="profile-tabs-nav">
                    <li onClick={goToMyInfo} className={myInfo ? 'active' : undefined}>Мои данные</li>
                    <li onClick={goToOrdersHistory} className={ordersHistory ? 'active' : undefined}>История заказов</li>
                </ul>
                <div className="clr"></div>
                <div className="profile-tabs-container">
                    {myInfo && <ProfileDataEdit {...props.user}
                                                updateUser={props.updateUser}
                                                isUserError={props.isUserError}
                                                msgUserError={props.msgUserError}
                                                isFetching={props.isFetching}
                    />}
                    {ordersHistory && <OrdersHistory ordersList={props.ordersList}/>}
                </div>
            </div>
        </div>
    )
};
export default Profile;
