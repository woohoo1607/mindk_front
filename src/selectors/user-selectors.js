import {createSelector} from "reselect";

export const getUserSelector = (state) => {
    return state.user.user
};

export const isAuthSelector = (state) => {
    return state.user.isAuth
};

export const isUserErrorSelector = (state) => {
    return state.user.isUserError
};

export const getMsgUserErrorSelector = (state) => {
    return state.user.msgUserError
};

export const getIsFetchingUserSelector = (state) => {
    return state.user.isFetching
};
