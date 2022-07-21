//AUTH-ACTIONS INTERFACES
import {
    GET_USER_ERROR,
    GET_USER_REQUEST, GET_USER_SUCCESS,
    LOGIN_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS, LOGOUT_ERROR, LOGOUT_REQUEST, LOGOUT_SUCCESS,
    SET_LOGIN_FORM_VALUE
} from "../actions/auth-actions";

export interface ISetLoginFormValue {
    readonly type: typeof SET_LOGIN_FORM_VALUE
    field: string
    value: string
}

interface IGetUserRequestAction {
    readonly type: typeof GET_USER_REQUEST
}

interface IGetUserSuccessAction {
    readonly type: typeof GET_USER_SUCCESS
    readonly user: TUser
}

interface IGetUserErrorAction {
    readonly type: typeof GET_USER_ERROR
    readonly error: string
}

interface ILoginRequestAction {
    readonly type: typeof LOGIN_REQUEST
}

interface ILoginSuccessAction {
    readonly type: typeof LOGIN_SUCCESS
    readonly user: TUser
}

interface ILoginErrorAction {
    readonly type: typeof LOGIN_ERROR
    readonly error: string
}

interface ILogoutRequestAction {
    readonly type: typeof LOGOUT_REQUEST
}

interface ILogoutSuccessAction {
    readonly type: typeof LOGOUT_SUCCESS
}

interface ILogoutErrorAction {
    readonly type: typeof LOGOUT_ERROR
    readonly error: string
}

export type TAuthActions =
    ISetLoginFormValue |
    IGetUserRequestAction |
    IGetUserSuccessAction |
    IGetUserErrorAction |
    ILoginRequestAction |
    ILoginSuccessAction |
    ILoginErrorAction |
    ILogoutRequestAction |
    ILogoutSuccessAction |
    ILogoutErrorAction
