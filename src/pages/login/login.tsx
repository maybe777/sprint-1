import React from 'react'
import styles from "./login.module.css";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory, useLocation} from 'react-router-dom'
import {setLoginFormValue, userLogin} from "../../redux/actions/auth-actions";


export function LoginPage() {

    const {
        login,
        password
        //@ts-ignore
    } = useSelector(store => store.auth.form)

    const dispatch = useDispatch()
    const location = useLocation();
    const history = useHistory();

    //@ts-ignore
    const dest = location?.state?.from.pathname || '/'

    //@ts-ignore
    const onChange = (e) => {
        //@ts-ignore
        dispatch(setLoginFormValue(e.target.name, e.target.value))
    }

    const authenticate = () => {
        //@ts-ignore
        dispatch(userLogin(login, password))
        history.push(dest)
    }

    return (
        <div>
            <ul className={styles.loginForm}>
                <li>
                    <h2>Вход</h2>
                </li>
                <form className={styles.loginForm} onSubmit={authenticate}>
                    <li>
                        <Input value={login} name="login" placeholder="E-mail" onChange={onChange}/>
                    </li>
                    <li>
                        <Input value={password} name="password" placeholder="Пароль" icon={'HideIcon'}
                               onChange={onChange}/>
                    </li>
                    <li>
                        <Button type="primary" size="large">Войти</Button>
                    </li>
                </form>
            </ul>
            <ul className={styles.loginCreds}>
                <li>
                    Вы - новый пользователь?&nbsp;
                    <Link to={'/register'}> Зарегистрироваться</Link>
                </li>
                <li>
                    Забыли пароль?&nbsp;
                    <Link to={'/forgot-password'}>Восстановить пароль</Link>
                </li>
            </ul>
        </div>
    );

}