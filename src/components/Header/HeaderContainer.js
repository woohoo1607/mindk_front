import React from 'react';
import Header from './Header'
import {connect} from "react-redux";
/*import {getUserData} from "../../reducers/userReducer";*/

class HeaderContainer extends React.Component {
    componentDidMount() {
        /*this.props.getUserData();*/
    }

    render() {
        return (
            <div>
                <Header user = {this.props.user}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        user: state.user
    }
};

export default connect(mapStateToProps, {})(HeaderContainer);
