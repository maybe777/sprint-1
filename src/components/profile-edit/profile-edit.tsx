import React, {ChangeEvent, FC, useEffect} from 'react'
import styles from "./profile-edit.module.css";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch, useSelector} from "react-redux";
import {editProfile, fetchProfile, setUserProfileFormValue} from "../../redux/actions/user-profile-actions";


export const ProfileEdit: FC = () => {

    const dispatch = useDispatch()

    const {
        name,
        email
    } = useSelector((store: any) => store.profile.form)

    useEffect(() => {
        //@ts-ignore
        dispatch(fetchProfile())
    }, [dispatch])


    const editProfileHandler = () => {
        //@ts-ignore
        dispatch(editProfile(name, email))
    }


    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        //@ts-ignore
        dispatch(setUserProfileFormValue(e.target.name, e.target.value))
    }

    return (
        <div className={styles.payload}>
            <form onSubmit={editProfileHandler}>
                <ul className={styles.inputs + " " + styles.payload}>
                    <li><Input value={name} name="name" placeholder="Имя" icon={'EditIcon'} onChange={onChange}/></li>
                    <li><Input value={email} name="email" placeholder="E-mail" icon={'EditIcon'} onChange={onChange}/>
                    </li>
                    <li><Input value={"******"} name="password" placeholder="Пароль" icon={'EditIcon'}
                               onChange={onChange}/>
                    </li>
                    <li><Button type="primary" size="large">Сохранить</Button></li>
                </ul>
            </form>
        </div>
    );

}