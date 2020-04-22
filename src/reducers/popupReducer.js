
const SET_IS_OPEN_POPUP = "SET_IS_OPEN_POPUP";
const SET_IS_POPUP_MSG = "SET_IS_POPUP_MSG";

let initialState = {
    isOpenPopup: false,
    popupMsg:''
};

const popupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_POPUP_MSG:
        {
            return {
                ...state,
                popupMsg: action.popupMsg
            };
        }
        case SET_IS_OPEN_POPUP:
        {
            return {
                ...state,
                isOpenPopup: action.isOpenPopup
            };
        }
        default:
            return state;
    }
};

export const setPopupMsg = (popupMsg) =>
    ({type: SET_IS_POPUP_MSG, popupMsg: popupMsg});

export const changePopupStatus = (isOpenPopup) =>
    ({type: SET_IS_OPEN_POPUP, isOpenPopup: isOpenPopup});

export const callPopUp = (msg, time=6000) => (dispatch) => {
    dispatch(setPopupMsg(msg));
    dispatch(changePopupStatus(true));
    setTimeout(() => {
        dispatch(setPopupMsg(''));
        dispatch(changePopupStatus(false));
    }, time);
};


export default popupReducer;
