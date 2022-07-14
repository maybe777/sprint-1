import React, {FC, useEffect} from 'react'
import MainPage from "../../pages/main/main"
import {Switch, Route, useLocation, useHistory} from 'react-router-dom'
import {LoginPage} from "../../pages/login/login";
import {RegisterPage} from "../../pages/register/register";
import {Error404Page} from "../../pages/error404/Error404";
import {ProfilePage} from "../../pages/profile/profile";
import {PasswordResetPage} from "../../pages/password-reset/password-reset";
import {PasswordForgotPage} from "../../pages/password-forgot/password-forgot";
import IngredientDetails from "../details-ingredient/ingredient-details";
import styles from "./app.module.css";
import AppHeader from "../header/app-header";
import {ProtectedRoute} from "../protected-route/protected-route";
import Modal from "../modal/modal";
import {useDispatch} from "react-redux";
import {getUser} from "../../redux/actions/auth-actions";
import {getData} from "../../redux/actions/ingredients-actions";
import OrderDetails from "../details-order/order-details";
import {getLocalStorageItem} from "../../service/token-service";


const App: FC = () => {

    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch();

    const loggedIn: boolean = !!getLocalStorageItem('user')

    useEffect(() => {
        // @ts-ignore
        dispatch(getData())
        if (loggedIn) {
            //@ts-ignore
            dispatch(getUser())
        }
    }, [dispatch])

    //@ts-ignore
    const background = location.state && location.state.background

    return (
        <div className={styles.container}>
            <AppHeader/>
            <div className={styles.content}>
                <Switch location={background || location}>
                    <Route path={"/ingredients/:id"} exact={true}>
                        <IngredientDetails/>
                    </Route>
                    <ProtectedRoute path={"/forgot-password"} exact={true}>
                        <PasswordForgotPage/>
                    </ProtectedRoute>
                    <ProtectedRoute path={"/reset-password"} exact={true}>
                        <PasswordResetPage/>
                    </ProtectedRoute>
                    <ProtectedRoute isAuthOnly={true} path={"/profile"} exact={true}>
                        <ProfilePage/>
                    </ProtectedRoute>
                    <ProtectedRoute path={"/register"} exact={true}>
                        <RegisterPage/>
                    </ProtectedRoute>
                    <ProtectedRoute path={"/login"} exact={true}>
                        <LoginPage/>
                    </ProtectedRoute>
                    <Route path={"/"} exact={true}>
                        <MainPage/>
                    </Route>
                    <Route>
                        <Error404Page/>
                    </Route>
                </Switch>
                {
                    background && (
                        <>
                            <Route path='/ingredients/:id' exact={true}>
                                <Modal
                                    onClose={() => {
                                        history.goBack()
                                    }} title={"Детали ингредиента"}>
                                    <IngredientDetails/>
                                </Modal>
                            </Route>
                            <ProtectedRoute isAuthOnly={true} path='/order' exact={true}>
                                <Modal
                                    onClose={() => {
                                        history.goBack()
                                    }} title={""}>
                                    <OrderDetails/>
                                </Modal>
                            </ProtectedRoute>
                        </>
                    )
                }
            </div>
        </div>
    );
}

export default App;
