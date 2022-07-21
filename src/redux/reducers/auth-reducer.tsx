import React from "react";
import {
    GET_USER_ERROR, GET_USER_REQUEST, GET_USER_SUCCESS,
    LOGIN_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS, LOGOUT_ERROR,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    SET_LOGIN_FORM_VALUE
} from "../actions/auth-actions";


const initialState: IAuthInitialState = {
    form: {
        login: '',
        password: ''
    },

    loggedIn: false,
    loggedOut: true,
    userRequest: false,
    loginRequest: false,
    logoutRequest: false,
    userError: false,
    loginError: false,
    logoutError: false,
    user: null
}

export function authReducer(state = initialState, action: any) {
    switch (action.type) {
        case SET_LOGIN_FORM_VALUE:
            return {
                form: {
                    ...state.form,
                    [action.field]: action.value
                }
            }
        case GET_USER_REQUEST:
            return {
                ...state,
                userRequest: true
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                user: action.user,
                userRequest: false
            }
        case GET_USER_ERROR:
            return {
                ...state,
                userRequest: false,
                userError: true
            }
        case LOGIN_REQUEST:
            return {
                ...state,
                loginRequest: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                loggedOut: false,
                loginRequest: false,
                form: {
                    ...initialState.form
                },
                user: action.user
            }
        case LOGIN_ERROR:
            return {
                ...state,
                loginRequest: false,
                loginError: true
            }
        case LOGOUT_REQUEST:
            return {
                ...state,
                logoutRequest: true
            }
        case LOGOUT_SUCCESS: {
            return {
                ...state,
                logoutRequest: false,
                loggedOut: true,
                loggedIn: false,
                user: null
            }
        }
        case LOGOUT_ERROR: {
            return {
                ...state,
                logoutError: true
            }
        }
        default:
            return state
    }

}
