import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_IS_AUTH = "SET_IS_AUTH";

let initialState = {
    user: {
        id: null,
        login: null,
        first_name: null,
        second_name: null,
        email: null,
        isadmin: false,
        mobile_phone: null,
        token: null
    },
    isAuth: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        {
            return {
                ...state,
                user: {...action.userData}
            };
        }
        case SET_IS_AUTH:
        {
            return {
                ...state,
                isAuth: action.isAuth
            };
        }
        default:
            return state;
    }
};

export const setUserData = (user) =>
    ({type: SET_USER_DATA, userData: user});

export const setAuth = (isAuth) =>
    ({type: SET_IS_AUTH, isAuth: isAuth});

export const signIn = (username, password) => (dispatch) => {
    authAPI.login(username, password)
        .then(res=> {
            if (res.responseCode===0) {
                dispatch(setUserData(res.data));
                dispatch(setAuth(true));
                localStorage.setItem("token", res.data.token);
            }
        })
};

export const getMe = () => (dispatch) => {
    return authAPI.me()
        .then(res=> {
            if (res.responseCode===0) {
                let user = {...res.data};
                user.token = localStorage.getItem("token");
                dispatch(setUserData(user));
                dispatch(setAuth(true));
            }
        })
};

export const signOut = (id) => (dispatch) => {
    return authAPI.logout(id)
        .then(res => {
            if (res.responseCode===0) {
                delete localStorage.token;
                dispatch(setUserData(initialState.user));
                dispatch(setAuth(false));
            }
        })
};

/*export const getUserData = () => (dispatch) => {
    userAPI.getUser()
        .then(response => {
            if (response.status ===1) {
                let user = response.result[0];
                dispatch(setUserData(user));
                dispatch(setAuth(true));
            }
        });
};*/

export default userReducer;
