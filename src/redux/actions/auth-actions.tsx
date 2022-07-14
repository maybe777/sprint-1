import React from "react";
import {fetchUser, login, logout} from "../../api/api";


export const SET_LOGIN_FORM_VALUE = 'SET_LOGIN_FORM_VALUE'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const GET_USER_REQUEST = 'GET_USER_REQUEST'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_ERROR = 'GET_USER_ERROR'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_ERROR = 'LOGIN_ERROR'

export function setLoginFormValue(field: string, value: string) {
    //@ts-ignore
    return dispatch => {
        dispatch(setFormValue(field, value))
    }

    function setFormValue(field: string, value: string) {
        return {type: SET_LOGIN_FORM_VALUE, field, value}
    }
}

export function getUser() {

    //@ts-ignore
    return dispatch => {
        dispatch(getUserRequest());

        fetchUser()
            .then(user => {
                //@ts-ignore
                dispatch(getUserSuccess(user))
            }).catch(
            err => {
                dispatch(getUserError(err))
            });
    }

    function getUserRequest() {
        return {type: GET_USER_REQUEST}
    }

    function getUserSuccess(user: TUser) {
        return {type: GET_USER_SUCCESS, user}
    }

    function getUserError(error: string) {
        return {type: LOGIN_ERROR, error}
    }
}

export function userLogin(email: string, password: string) {
    //@ts-ignore
    return dispatch => {
        dispatch(loginRequest(email));

        login(email, password)
            .then(data => {
                //@ts-ignore
                dispatch(loginSuccess(data.user));
            }).catch(
            err => {
                dispatch(loginError(err))
            });
    }

    function loginRequest(email: string) {
        return {type: LOGIN_REQUEST, email}
    }

    function loginSuccess(user: TUser) {
        return {type: LOGIN_SUCCESS, user}
    }

    function loginError(error: string) {
        return {type: LOGIN_ERROR, error}
    }
}

export function userLogout() {
    //@ts-ignore
    return dispatch => {
        dispatch({type: LOGOUT_REQUEST})

        logout()
            .then(() => {
                dispatch(logoutSuccess())
            })
            .catch(err => {
                dispatch(logoutError(err))
            })
    }

    function logoutSuccess() {
        return {type: LOGOUT_SUCCESS}
    }

    function logoutError(error: string) {
        return {type: LOGOUT_ERROR, error}
    }
}



