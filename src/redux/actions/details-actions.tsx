import React from 'react';
import {TAppDispatch} from "../types";
import {TDetailsAction} from "../types/details-actions-types";


export const SHOW_DETAILS: 'SHOW_DETAILS' = "SHOW_DETAILS"

export const showDetails = (item: IBurgerItem) => (dispatch: TAppDispatch) => {

    dispatch(showDetails());

    function showDetails(): TDetailsAction {
        return ({
            type: SHOW_DETAILS,
            item: item
        })
    }

}