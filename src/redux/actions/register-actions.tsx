import React from 'react'
import {register} from "../../api/api";


export const SET_REGISTER_FORM_VALUE = 'SET_REGISTER_FORM_VALUE'

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR'

export function setRegisterFormValue(field: String, value: String) {
    //@ts-ignore
    return dispatch => {
        dispatch(setFormValue(field, value))
    }

    function setFormValue(field: String, value: String) {
        return {type: SET_REGISTER_FORM_VALUE, field, value}
    }
}

export function userRegister(name: String, email: String, password: String) {

    let form: RegisterForm = {
        name: name, email: email, password: password
    }

    //@ts-ignore
    return dispatch => {
        dispatch(registerRequest(form));

        register(form)
            .then(() => {
                dispatch(registerSuccess())
            })
            .catch(err => {
                dispatch(registerError(err))
            });
    }

    function registerRequest(form: RegisterForm) {
        return {type: REGISTER_REQUEST, form}
    }

    function registerSuccess() {
        return {type: REGISTER_SUCCESS}
    }

    function registerError(error: String) {
        return {type: REGISTER_ERROR, error}
    }
}