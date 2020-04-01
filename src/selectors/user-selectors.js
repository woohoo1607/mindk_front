import {createSelector} from "reselect";

export const getUserSelector = (state) => {
    return state.user.user
};

export const isAuthSelector = (state) => {
    return state.user.isAuth
};
