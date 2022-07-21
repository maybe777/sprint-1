import {
    SET_USER_PROFILE_VALUE, USER_PROFILE_EDIT_ERROR, USER_PROFILE_EDIT_REQUEST, USER_PROFILE_EDIT_SUCCESS,
    USER_PROFILE_ERROR,
    USER_PROFILE_REQUEST,
    USER_PROFILE_SUCCESS
} from "../actions/user-profile-actions";

interface ISetUserProfileFormValue {
    readonly type: typeof SET_USER_PROFILE_VALUE
    field: string
    value: string
}

interface IUserProfileRequest {
    readonly type: typeof USER_PROFILE_REQUEST
}

interface IUserProfileSuccess {
    readonly type: typeof USER_PROFILE_SUCCESS
    user: TUser
}

interface IUserProfileError {
    readonly type: typeof USER_PROFILE_ERROR
    error: string
}

interface IUserProfileEditRequest {
    readonly type: typeof USER_PROFILE_EDIT_REQUEST
    form: TUser
}

interface IUserProfileEditSuccess {
    readonly type: typeof USER_PROFILE_EDIT_SUCCESS
    user: TUser
}

interface IUserProfileEditError {
    readonly type: typeof USER_PROFILE_EDIT_ERROR
    error: string
}


export type TPersonalSpaceActions =
    ISetUserProfileFormValue |
    IUserProfileRequest |
    IUserProfileSuccess |
    IUserProfileError |
    IUserProfileEditRequest |
    IUserProfileEditSuccess |
    IUserProfileEditError