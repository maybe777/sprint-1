import React from 'react'
import {register} from "../../api/api";


export const SET_REGISTER_FORM_VALUE = 'SET_REGISTER_FORM_VALUE'

export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR'

export function setRegisterFormValue(field: string, value: string) {
    //@ts-ignore
    return dispatch => {
        dispatch(setFormValue(field, value))
    }

    function setFormValue(field: string, value: string) {
        return {type: SET_REGISTER_FORM_VALUE, field, value}
    }
}

export function userRegister(name: string, email: string, password: string) {

    let form: TRegisterForm = {
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

    function registerRequest(form: TRegisterForm) {
        return {type: REGISTER_REQUEST, form}
    }

    function registerSuccess() {
        return {type: REGISTER_SUCCESS}
    }

    function registerError(error: string) {
        return {type: REGISTER_ERROR, error}
    }
}