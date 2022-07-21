import React from "react"
import {fetchUser, saveUser} from "../../api/api";
import {TPersonalSpaceActions} from "../types/user-profile-action-types";
import {TAppDispatch} from "../types";


export const SET_USER_PROFILE_VALUE: 'SET_USER_PROFILE_VALUE' = 'SET_USER_PROFILE_VALUE'
export const USER_PROFILE_REQUEST: 'USER_PROFILE_REQUEST' = 'USER_PROFILE_REQUEST'
export const USER_PROFILE_SUCCESS: 'USER_PROFILE_SUCCESS' = 'USER_PROFILE_SUCCESS'
export const USER_PROFILE_ERROR: 'USER_PROFILE_ERROR' = 'USER_PROFILE_ERROR'
export const USER_PROFILE_EDIT_REQUEST: 'USER_PROFILE_EDIT_REQUEST' = 'USER_PROFILE_EDIT_REQUEST'
export const USER_PROFILE_EDIT_SUCCESS: 'USER_PROFILE_EDIT_SUCCESS' = 'USER_PROFILE_EDIT_SUCCESS'
export const USER_PROFILE_EDIT_ERROR: 'USER_PROFILE_EDIT_ERROR' = 'USER_PROFILE_EDIT_ERROR'

export const setUserProfileFormValue = (field: string, value: string) => (dispatch: TAppDispatch) => {

    dispatch(setFormValue(field, value))

    function setFormValue(field: string, value: string): TPersonalSpaceActions {
        return {type: SET_USER_PROFILE_VALUE, field, value}
    }
}

export const fetchProfile = () => (dispatch: TAppDispatch) => {

    dispatch(fetchProfileRequest())
    fetchUser().then(data => {
        dispatch(fetchProfileSuccess(data))
    })
        .catch(err => {
            dispatch(fetchProfileError(err))
        })

    function fetchProfileRequest(): TPersonalSpaceActions {
        return {type: USER_PROFILE_REQUEST}
    }

    function fetchProfileSuccess(user: TUser): TPersonalSpaceActions {
        return {type: USER_PROFILE_SUCCESS, user}
    }

    function fetchProfileError(error: string): TPersonalSpaceActions {
        return {type: USER_PROFILE_ERROR, error}
    }
}


export const editProfile = (name: string, email: string) => (dispatch: TAppDispatch) => {

    let form: TUser = {
        name: name, email: email
    }

    dispatch(editProfileRequest(form))

    saveUser(form).then(data => {
        dispatch(editProfileSuccess(data))
    })
        .catch(err => {
            dispatch(editProfileError(err))
        })

    function editProfileRequest(form: TUser): TPersonalSpaceActions {
        return {type: USER_PROFILE_EDIT_REQUEST, form}
    }

    function editProfileSuccess(user: TUser): TPersonalSpaceActions {
        return {type: USER_PROFILE_EDIT_SUCCESS, user}
    }

    function editProfileError(error: string): TPersonalSpaceActions {
        return {type: USER_PROFILE_EDIT_ERROR, error}
    }
}

