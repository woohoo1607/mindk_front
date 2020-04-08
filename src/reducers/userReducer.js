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
    return authAPI.login(username, password)
        .then(res=> {
            if (res.responseCode===0) {
                dispatch(setUserData(res.data));
                dispatch(setAuth(true));
                localStorage.setItem("token", res.data.token);
                return true
            }
        })
};

export const getMe = () => (dispatch) => {
    authAPI.me()
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
    authAPI.logout(id)
        .then(res => {
            if (res.responseCode===0) {
                delete localStorage.token;
                dispatch(setUserData(initialState.user));
                dispatch(setAuth(false));
            }
        })
};

export const createUser = (user) => (dispatch) => {
    return authAPI.register(user)
        .then(res=> {
            console.log(res);
            if (res.responseCode===0) {
                return true;
            }
        })
};

export default userReducer;
