import React from "react";
import {SHOW_DETAILS} from "../actions/details-actions";
import {TDetailsAction} from "../types/details-actions-types";

const initialState: IDetailsState = {
    item: null
}

const detailsReducer = (state = initialState, action: TDetailsAction) => {
    switch (action.type) {
        case SHOW_DETAILS:
            return {
                ...state,
                item: action.item
            };
        default :
            return state;
    }
}

export default detailsReducer;