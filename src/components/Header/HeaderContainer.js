import React, {useEffect} from 'react';
import Header from './Header'
import {connect} from "react-redux";
import {getUserSelector} from "../../reducers/user-selectors";
/*import {getUserData} from "../../reducers/userReducer";*/

const HeaderContainer = (props) => {

    return (
        <div>
            <Header {...props}/>
        </div>
    )
};

let mapStateToProps = (state) => {
    return {
        user: getUserSelector(state),
    }
};

export default connect(mapStateToProps, {})(HeaderContainer);
