import {ADD_ITEM, REMOVE_ITEM, SORT_ITEM} from "../actions/constructor-actions";

interface IAddItem {
    readonly type: typeof ADD_ITEM
    item: IBurgerItem
}

interface IRemoveItem {
    readonly type: typeof REMOVE_ITEM
    index: number
}

interface ISortItem {
    readonly type: typeof SORT_ITEM
    from: number
    to: number
}

export type TConstructorActions = IAddItem | IRemoveItem | ISortItem
