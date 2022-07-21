import React from "react";
import {GET_ORDER_ERROR, GET_ORDER_REQUEST, GET_ORDER_SUCCESS} from "../actions/order-actions";
import {TOrderActions} from "../types/order-actions-types";


const initialState: IOrderState = {
    orderRequest: false,
    orderFailed: false,
    number: 0
};

const orderReducer = (state = initialState, action: TOrderActions) => {
    switch (action.type) {
        case GET_ORDER_REQUEST:
            return {
                ...state,
                orderRequest: true,
                orderFailed: false
            };
        case GET_ORDER_SUCCESS:
            return {
                ...state,
                orderFailed: false,
                orderRequest: false,
                number: action.payload
            };
        case GET_ORDER_ERROR:
            return {
                ...state,
                orderFailed: true,
                orderRequest: false
            }
        default:
            return state;
    }
}

export default orderReducer;