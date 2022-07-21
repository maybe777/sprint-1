import {GET_DATA_ERROR, GET_DATA_REQUEST, GET_DATA_SUCCESS} from "../actions/ingredients-actions";

interface IGetDataRequestAction {
    readonly type: typeof GET_DATA_REQUEST
}

interface IGetDataSuccessAction {
    readonly type: typeof GET_DATA_SUCCESS,
    payload: Array<IBurgerItem>
}

interface IGetDataErrorAction {
    readonly type: typeof GET_DATA_ERROR
}

export type TIngredientsActions = IGetDataRequestAction | IGetDataSuccessAction | IGetDataErrorAction