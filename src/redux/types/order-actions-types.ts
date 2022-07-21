import {GET_ORDER_ERROR, GET_ORDER_REQUEST, GET_ORDER_SUCCESS} from "../actions/order-actions";

interface IGetOrderRequest {
    readonly type: typeof GET_ORDER_REQUEST
}

interface IGetOrderSuccess {
    readonly type: typeof GET_ORDER_SUCCESS
    payload: number
}

interface IGetOrderError {
    readonly type: typeof GET_ORDER_ERROR
}

export type TOrderActions = IGetOrderRequest | IGetOrderSuccess | IGetOrderError