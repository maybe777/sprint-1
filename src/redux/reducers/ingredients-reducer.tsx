import React from "react";
import {GET_DATA_ERROR, GET_DATA_REQUEST, GET_DATA_SUCCESS} from "../actions/ingredients-actions";
import {TIngredientsActions} from "../types/ingredients-actions-types";


const initialState: IIngredientState = {
    dataRequest: false,
    dataFailed: false,
    data: []
};

const ingredientsReducer = (state = initialState, action: TIngredientsActions) => {
    switch (action.type) {
        case GET_DATA_REQUEST:
            return {
                ...state,
                dataFailed: false,
                dataRequest: true
            };
        case GET_DATA_SUCCESS:
            return {
                ...state,
                dataFailed: false,
                dataRequest: false,
                data: action.payload
            }
        case GET_DATA_ERROR:
            return {
                ...state,
                dataFailed: true,
                dataRequest: false
            }
        default:
            return state;
    }
}

export default ingredientsReducer;