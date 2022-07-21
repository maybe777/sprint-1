import {SHOW_DETAILS} from "../actions/details-actions";

interface IShowDetailsAction{
    readonly type: typeof SHOW_DETAILS
    item: IBurgerItem
}


export type TDetailsAction = IShowDetailsAction