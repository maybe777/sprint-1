import {REGISTER_ERROR, REGISTER_REQUEST, REGISTER_SUCCESS, SET_REGISTER_FORM_VALUE} from "../actions/register-actions";

interface ISetRegisterFormValue {
    readonly type: typeof SET_REGISTER_FORM_VALUE
    field: string
    value: string
}

interface IRegisterRequestAction {
    readonly type: typeof REGISTER_REQUEST
    form: {
        name: string,
        email: string,
        password: string
    }
}

interface IRegisterSuccessAction {
    readonly type: typeof REGISTER_SUCCESS
}

interface IRegisterErrorAction {
    readonly type: typeof REGISTER_ERROR
}


export type TRegisterActions =
    ISetRegisterFormValue |
    IRegisterRequestAction |
    IRegisterSuccessAction |
    IRegisterErrorAction