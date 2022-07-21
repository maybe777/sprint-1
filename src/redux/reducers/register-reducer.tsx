import React from 'react'
import {
    REGISTER_ERROR,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    SET_REGISTER_FORM_VALUE
} from "../actions/register-actions";
import {TRegisterActions} from "../types/register-actions-types";


const initialState: IRegisterInitialState = {
    form: {
        name: '',
        email: '',
        password: ''
    },
    registrationRequest: false,
    registrationError: false,
}

export const registrationReducer = (state = initialState, action: TRegisterActions) => {
    switch (action.type) {
        case SET_REGISTER_FORM_VALUE:
            return {
                form: {
                    ...state.form,
                    [action.field]: action.value
                }
            }
        case REGISTER_REQUEST:
            return {
                ...state,
                registrationRequest: true
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                registrationRequest: false,
                registrationError: false,
                form: {...initialState.form}
            }
        case REGISTER_ERROR:
            return {
                ...state,
                registrationError: true,
                registrationRequest: false
            }
        default:
            return state
    }
}