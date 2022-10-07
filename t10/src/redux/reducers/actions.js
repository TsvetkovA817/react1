//actions creator
import { REGISTER_LOADING, REGISTER_ERROR, REGISTER_SUCCESS } from './actionTypes';
import { LOGIN_LOADING, LOGIN_ERROR, LOGIN_SUCCESS } from './actionTypes';
import { LOGOUT_LOADING, LOGOUT_ERROR, LOGOUT_SUCCESS } from './actionTypes';

export const loadingPosts = () => ({
    type: 'getPosts'
});

export const errorPosts = (e) => ({
    type: 'error',
    payload: e
});


export const registerStart = () => ({
    type: REGISTER_LOADING
});

export const registerError = (e) => ({
    type: REGISTER_ERROR,
    payload: e.toString()
});

export const registerSuccess = (user) => ({
    type: REGISTER_SUCCESS,
    payload: user
});

export const loginStart = () => ({
    type: LOGIN_LOADING
});

export const loginError = (e) => ({
    type: LOGIN_ERROR,
    payload: e.toString()
});

export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user
});


export const logoutStart = () => ({
    type: LOGOUT_LOADING
})

export const logoutError = (e) => ({
    type: LOGOUT_ERROR,
    payload: e.toString()
})

export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS,
})


