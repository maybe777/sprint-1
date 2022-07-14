import React, {ChangeEvent} from 'react'
import styles from './register.module.css'
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {setRegisterFormValue, userRegister} from "../../redux/actions/register-actions";


export function RegisterPage() {

    const {
        name,
        email,
        password
    } = useSelector((store: any) => store.register.form)

    const dispatch = useDispatch()
    const history = useHistory()


    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        //@ts-ignore
        dispatch(setRegisterFormValue(e.target.name, e.target.value))
    }

    const registration = () => {
        //@ts-ignore
        dispatch(userRegister(name, email, password))
        history.push('/login')
    }

    return (
        <div className={styles.register}>
            <ul className={styles.registerForm}>
                <li>
                    <h2>Регистрация</h2>
                </li>
                <form className={styles.registerForm} onSubmit={registration}>
                    <li>
                        <Input name="name" value={name} placeholder="Имя" onChange={onChange}/>
                    </li>
                    <li>
                        <Input name="email" value={email} placeholder="E-mail" onChange={onChange}/>
                    </li>
                    <li>
                        <Input name="password" value={password} placeholder="Пароль" icon={'HideIcon'}
                               onChange={onChange}/>
                    </li>
                    <li>
                        <Button type="primary" size="large">Зарегистрироваться</Button>
                    </li>
                </form>
                <li>
                    <p className="mt-9">Уже зарегистрированы?&nbsp; <Link to={'/login'}>Войти</Link></p>
                </li>
            </ul>

        </div>
    );

}