import { registerStart, registerError, registerSuccess } from "../actions";  //импорт констант действий для диспатча
import { REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS } from "../actionTypes"

import { loginStart, loginError, loginSuccess } from "../actions";
import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "../actionTypes"

import { logoutStart, logoutError, logoutSuccess } from "../actions";
import { LOGOUT_ERROR, LOGOUT_LOADING, LOGOUT_SUCCESS } from "../actionTypes"

import { auth } from "../../../services/firebase";


const initialState = {
    currentUser: null,
    loading: false,
    error: ''
}

export const reducerUser = (state = initialState, action) => {
    switch (action.type) {
        case LOGOUT_LOADING:
        case LOGIN_LOADING:
        case REGISTER_LOADING:
            return {
                ...state,
                error: null,
                loading: true
            }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            console.log(`action.payload.displayName=${action.payload.displayName}`);
            return {
                ...state,
                loading: false,
                error: null,
                currentUser: action.payload
            }
        case LOGOUT_ERROR:
        case LOGIN_ERROR:
        case REGISTER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                currentUser: null
            }
        default:
            return state;
    }
}

export const thunkReg = (email, password, displayName) => {
    return (dispatch) => {
        dispatch(registerStart())
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                user.updateProfile({ displayName });
                dispatch(registerSuccess(user));
            })
            .catch((e) => dispatch(registerError(e.toString())))
    }
}

export const thunkLogin = (email, password) => {
    return (dispatch) => {
        dispatch(loginStart())
        auth
            .signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(loginSuccess(user));
            })
            .catch((e) => dispatch(loginError(e.toString())))
    }
}

export const thunkLogout = () => {
    return (dispatch) => {
        dispatch(logoutStart())
        auth
            .signOut()
            .then(() => {
                dispatch(logoutSuccess());
            })
            .catch((e) => dispatch(logoutError(e.toString())))
    }
}