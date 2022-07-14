import React, {ChangeEvent, useState} from 'react'
import styles from "./password-forgot.module.css";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useHistory} from "react-router-dom";
import {passwordForgot} from "../../api/api";


export function PasswordForgotPage() {

    const [email, setEmail] = useState("")


    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const history = useHistory()

    const handleSubmit = () => {
        const isSend: boolean | any = passwordForgot(email)
        if (isSend) {
            history.push("/reset-password")
            localStorage.setItem('isSend', JSON.stringify(true))
        } else {
            console.log('Со сбросом пароля что-то не так.')
        }
    }

    return (
        <div>
            <ul className={styles.forgotForm}>
                <li>
                    <h2>Восстановление пароля</h2>
                </li>
                <form className={styles.forgotForm} onSubmit={handleSubmit}>
                    <li>
                        <Input value={email} placeholder="Укажите e-mail" onChange={handleEmail}/>
                    </li>
                    <li>
                        <Button type="primary" size="large">Восстановить</Button>
                    </li>
                </form>
                <li>
                    <p className="mt-9">Вспомнили пароль?&nbsp; <Link to={'/login'}>Войти</Link></p>
                </li>
            </ul>

        </div>
    );

}