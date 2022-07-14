import React from 'react';


export const SHOW_DETAILS = "SHOW_DETAILS"
export const CLOSE_DETAILS = "CLOSE_DETAILS"

export function showDetails(item: IBurgerItem) {
    return function (dispatch: any) {
        dispatch({
            type: SHOW_DETAILS,
            item: item
        });
    }
}