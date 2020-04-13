import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_IS_AUTH = "SET_IS_AUTH";
const SET_IS_MSG_USER_ERROR = "SET_IS_MSG_USER_ERROR";
const SET_IS_USER_ERROR = "SET_IS_USER_ERROR";
const IS_FETCHING = "IS_FETCHING";

const uniqueErrorMsg = "Нарушение ограничения уникальности";
const notFoundMsg = "Пользователь не найден";

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
    isAuth: false,
    isFetching: false,
    isUserError: false,
    msgUserError: '',
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
        case SET_IS_MSG_USER_ERROR:
        {
            return {
                ...state,
                msgUserError: action.msgUserError
            };
        }
        case SET_IS_USER_ERROR:
        {
            return {
                ...state,
                isUserError: action.isUserError
            };
        }
        case IS_FETCHING:
        {
            return {
                ...state,
                isFetching: action.isFetching
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

export const setMsgUserError = (msgUserError) =>
    ({type: SET_IS_MSG_USER_ERROR, msgUserError: msgUserError});

export const changeErrorStatus = (isUserError) =>
    ({type: SET_IS_USER_ERROR, isUserError: isUserError});

export const setIsFetching = (isFetching) =>
    ({type: IS_FETCHING, isFetching: isFetching});

export const signIn = (username, password) => (dispatch) => {
    dispatch(resetUserError());
    dispatch(setIsFetching(true));
    authAPI.login(username, password)
        .then(res=> {
            if (res.responseCode===0) {
                dispatch(setIsFetching(false));
                dispatch(setUserData(res.data));
                dispatch(setAuth(true));
                localStorage.setItem("token", res.data.token);
            } else {
                dispatch(setIsFetching(false));
                if (res.message===notFoundMsg) {
                    let msg = "Неверный логин и/или пароль";
                    dispatch(createUserError(msg));
                } else {
                    dispatch(createUserError(res.message));
                }
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
    dispatch(setIsFetching(true));
    authAPI.logout(id)
        .then(res => {
            if (res.responseCode===0) {
                dispatch(setIsFetching(false));
                delete localStorage.token;
                dispatch(setUserData(initialState.user));
                dispatch(setAuth(false));
            }
            dispatch(setIsFetching(false));
        })
};

export const resetUserError = () => (dispatch) => {
    dispatch(changeErrorStatus(false));
    dispatch(setMsgUserError(''));
};

export const createUserError = (msg) => (dispatch) => {
    dispatch(changeErrorStatus(true));
    dispatch(setMsgUserError(msg));
};

export const createUser = (user) => (dispatch) => {
    dispatch(resetUserError());
    return authAPI.register(user)
        .then(res=> {
            if (res.responseCode===0) {
                return true;
            } else {
                if (res.message===uniqueErrorMsg) {
                    let msg = "Логин, email и/или мобильный телефон уже используются";
                    dispatch(createUserError(msg));
                } else {
                    dispatch(createUserError(res.message));
                }
                return false
            }
        }).catch(err=>console.log(err))
};

export default userReducer;
