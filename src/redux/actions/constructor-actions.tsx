import React from "react";
import {v4 as uuidv4} from 'uuid';
import {TAppDispatch} from "../types";
import {TConstructorActions} from "../types/constructor-actions-types";


export const ADD_ITEM: 'ADD_ITEM' = "ADD_ITEM";
export const REMOVE_ITEM: 'REMOVE_ITEM' = "REMOVE_ITEM";
export const SORT_ITEM: 'SORT_ITEM' = "SORT_ITEM";

export const addItem = (item: IBurgerItem) => (dispatch: TAppDispatch) => {

    dispatch(addItem());

    function addItem(): TConstructorActions {
        const itemWithUUID = (item: IBurgerItem) => ({
            ...item,
            __v: uuidv4()
        })
        return ({type: ADD_ITEM, item: itemWithUUID(item)})
    }

}

export const removeItem = (removeIndex: number) => (dispatch: TAppDispatch) => {

    dispatch(removeItem(removeIndex));

    function removeItem(index: number): TConstructorActions {
        return ({
            type: REMOVE_ITEM,
            index: index
        })
    }
}

export const sortItem = (fromIndex: number, toIndex: number) => (dispatch: TAppDispatch) => {

    dispatch(sortItem(fromIndex, toIndex));

    function sortItem(from: number, to: number): TConstructorActions {
        return ({
            type: SORT_ITEM,
            from: from,
            to: to
        })
    }
}