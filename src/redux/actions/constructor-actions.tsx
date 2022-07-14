import React from "react";
import {v4 as uuidv4} from 'uuid';


export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const SORT_ITEM = "SORT_ITEM";

export function addItem(item: IBurgerItem) {
    return function (dispatch: any) {

        const itemWithUUID = (item: IBurgerItem) => ({
            ...item,
            __v: uuidv4()
        })
        
        dispatch({
            type: ADD_ITEM,
            item: itemWithUUID(item),
        });
    }
}

export function removeItem(removeIndex: number) {
    return function (dispatch: any) {
        dispatch({
            type: REMOVE_ITEM,
            index: removeIndex
        });
    }
}

export function sortItem(fromIndex: number, toIndex: number) {
    return function (dispatch: any) {
        dispatch({
            type: SORT_ITEM,
            from: fromIndex,
            to: toIndex
        });
    }
}