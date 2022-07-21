import React from "react";
import {
    SET_USER_PROFILE_VALUE, USER_PROFILE_EDIT_ERROR, USER_PROFILE_EDIT_REQUEST, USER_PROFILE_EDIT_SUCCESS,
    USER_PROFILE_ERROR,
    USER_PROFILE_REQUEST,
    USER_PROFILE_SUCCESS
} from "../actions/user-profile-actions";
import {TPersonalSpaceActions} from "../types/user-profile-action-types";


const initialState: IUserProfileInitialState = {
    form: {
        name: "",
        email: ""
    },
    editProfileRequest: false,
    editProfileError: false,
    profileRequest: false,
    profileError: false,
    error: ""
}

export function userProfileReducer(state = initialState, action: TPersonalSpaceActions) {
    switch (action.type) {
        case SET_USER_PROFILE_VALUE:
            return {
                form: {
                    ...state.form,
                    [action.field]: action.value
                }
            }
        case USER_PROFILE_REQUEST:
            return {
                ...state,
                profileRequest: true
            }
        case USER_PROFILE_SUCCESS:
            return {
                ...state,
                profileRequest: false,
                form: action.user
            }
        case USER_PROFILE_ERROR:
            return {
                ...state,
                profileRequest: false,
                profileError: true,
                error: action.error
            }
        case USER_PROFILE_EDIT_REQUEST:
            return {
                ...state,
                editProfileRequest: true
            }
        case USER_PROFILE_EDIT_SUCCESS:
            return {
                ...state,
                editProfileRequest: false,
                form: action.user
            }
        case USER_PROFILE_EDIT_ERROR:
            return {
                ...state,
                editProfileRequest: false,
                editProfileError: true,
                error: action.error
            }
        default:
            return state
    }
}
