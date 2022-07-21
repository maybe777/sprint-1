import React from "react";
import {dataRequest} from "../../api/api";
import {TAppDispatch, TAppThunk} from "../types";
import {TIngredientsActions} from "../types/ingredients-actions-types";


export const GET_DATA_REQUEST: 'GET_DATA_REQUEST' = "GET_DATA_REQUEST"
export const GET_DATA_SUCCESS: 'GET_DATA_SUCCESS' = "GET_DATA_SUCCESS"
export const GET_DATA_ERROR: 'GET_DATA_ERROR' = "GET_DATA_ERROR"

export const getData:TAppThunk = () => (dispatch: TAppDispatch) => {

    dispatch(getDataRequest());
    dataRequest()
        .then(res => {
            res ? dispatch(getDataSuccess(res)) : dispatch(getDataError());
        })
        .then(() => console.log("Успешная загрузка данных об ингредиентах."))
        .catch(() => {
            dispatch(getDataError());
        });


    function getDataRequest(): TIngredientsActions {
        return {type: GET_DATA_REQUEST}
    }

    function getDataSuccess(res: Array<IBurgerItem>): TIngredientsActions {
        return {
            type: GET_DATA_SUCCESS,
            payload: res
        }
    }

    function getDataError(): TIngredientsActions {
        return {type: GET_DATA_ERROR}
    }

}



