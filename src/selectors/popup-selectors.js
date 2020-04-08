import {createSelector} from "reselect";

export const getPopupStatusSelector = (state) => {
    return state.popup.isOpenPopup
};

export const getPopupMsgSelector = (state) => {
    return state.popup.popupMsg
};
