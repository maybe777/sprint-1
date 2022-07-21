import React from 'react'
import {register} from "../../api/api";
import {TRegisterActions} from "../types/register-actions-types";
import {TAppDispatch, TAppThunk} from "../types";


export const SET_REGISTER_FORM_VALUE: 'SET_REGISTER_FORM_VALUE' = 'SET_REGISTER_FORM_VALUE'
export const REGISTER_REQUEST: 'REGISTER_REQUEST' = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS: 'REGISTER_SUCCESS' = 'REGISTER_SUCCESS'
export const REGISTER_ERROR: 'REGISTER_ERROR' = 'REGISTER_ERROR'

export const setRegisterFormValue = (field: string, value: string) => (dispatch: TAppDispatch) => {

    dispatch(setFormValue(field, value))

    function setFormValue(field: string, value: string): TRegisterActions {
        return {type: SET_REGISTER_FORM_VALUE, field, value}
    }
}

export const userRegister: TAppThunk = (name: string, email: string, password: string) => (dispatch: TAppDispatch) => {

    let form: TRegisterForm = {
        name: name, email: email, password: password
    }

    dispatch(registerRequest(form));

    register(form)
        .then(() => {
            dispatch(registerSuccess())
        })
        .catch(() => {
            dispatch(registerError())
        });

    function registerRequest(form: TRegisterForm): TRegisterActions {
        return {type: REGISTER_REQUEST, form}
    }

    function registerSuccess(): TRegisterActions {
        return {type: REGISTER_SUCCESS}
    }

    function registerError(): TRegisterActions {
        return {type: REGISTER_ERROR}
    }
}