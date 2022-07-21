import store from "../store";
import {TAuthActions} from "./auth-actions-types";
import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import {TConstructorActions} from "./constructor-actions-types";
import {TDetailsAction} from "./details-actions-types";
import {TIngredientsActions} from "./ingredients-actions-types";
import {TOrderActions} from "./order-actions-types";
import {TRegisterActions} from "./register-actions-types";
import {TPersonalSpaceActions} from "./user-profile-action-types";

export type RootState = ReturnType<typeof store.getState>;

// Типизация всех экшенов приложения
export type TApplicationActions = TAuthActions | TConstructorActions | TDetailsAction |
    TIngredientsActions | TOrderActions | TRegisterActions | TPersonalSpaceActions;

// Типизация thunk приложения
export type TAppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TApplicationActions>>;

//Типизация dispatch
export type TAppDispatch = typeof store.dispatch;