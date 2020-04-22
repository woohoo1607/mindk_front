import React from "react";
import {connect} from "react-redux";

import {getPopupMsgSelector, getPopupStatusSelector} from "../../selectors/popup-selectors";
import "./styles.css";

const PopUp = (props) => {
    return (
        <>
            {props.isOpenPopup && <div className="popup">
                <p>{props.popupMsg}</p>
            </div>}
        </>
    )
};

let mapStateToProps = (state) => {
    return {
        popupMsg: getPopupMsgSelector(state),
        isOpenPopup: getPopupStatusSelector(state),
    }
};

export default connect(mapStateToProps, {})(PopUp);
