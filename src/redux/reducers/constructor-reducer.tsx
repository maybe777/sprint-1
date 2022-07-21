import React from "react";
import {ADD_ITEM, REMOVE_ITEM, SORT_ITEM} from "../actions/constructor-actions";
import {TConstructorActions} from "../types/constructor-actions-types";


const initialState: IConstructorState = {
    items: [
        {
            "_id": "60666c42cc7b410027a1a9b1",
            "name": "Выберите булочку пожалуйста :-)",
            "type": "bun",
            "proteins": 0,
            "fat": 0,
            "carbohydrates": 0,
            "calories": 0,
            "price": 0,
            "image": "https://code.s3.yandex.net/react/code/bun-02.png",
            "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
            "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
            "__v": '0'
        },
    ]
};

const constructorReducer = (state = initialState, action: TConstructorActions) => {
    switch (action.type) {
        case ADD_ITEM:
            if (action.item.type === 'bun') {
                return {
                    ...state,
                    items: [state.items[0] = action.item]
                }
            } else {
                return {
                    ...state,
                    items: [...state.items, action.item]
                }
            }
        case REMOVE_ITEM:
            let items = [...state.items]
            items.splice(action.index, 1)
            return {
                ...state,
                items: items
            }
        case SORT_ITEM: {
            let sortedArray = [...state.items]
            sortedArray.splice(action.from, 1)
            sortedArray.splice(action.to, 0, state.items[action.from])
            return {
                ...state,
                items: sortedArray
            }
        }
        default:
            return state
    }
}

export default constructorReducer;