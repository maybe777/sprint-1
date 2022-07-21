import React, {FC} from 'react';
import {ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import {BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';
import {NavLink, Link, useRouteMatch} from 'react-router-dom';


const AppHeader: FC = () => {

    const isConstructor: boolean = !!useRouteMatch({path: '/', exact: true})
    const isFeed: boolean = !!useRouteMatch({path: '/feed', exact: true})
    const isProfile: boolean = !!useRouteMatch({path: '/profile', exact: true})

    return (
        <header className={styles.header}>
            <nav>
                <ul className={"mr-5 mt-2 mb-2 p-0"}>
                    <li>
                        <BurgerIcon type={isConstructor ? "primary" : "secondary"}/>
                        <NavLink
                            className={styles.link}
                            activeClassName={styles.active}
                            to={'/'}
                            exact>
                            &nbsp;Конструктор
                        </NavLink>
                    </li>
                </ul>
                <ul className={"mr-5 mt-2 mb-2 p-0"}>
                    <li>
                        <ListIcon type={isFeed ? "primary" : "secondary"}/>
                        <NavLink
                            className={styles.link}
                            activeClassName={styles.active}
                            to={'/feed'}
                            exact>
                            &nbsp;Лента заказов
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className={styles.logo}>
                <Link to={'/'}>
                    <Logo/>
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <ProfileIcon type={isProfile ? "primary" : "secondary"}/>
                        <NavLink
                            className={styles.link}
                            activeClassName={styles.active}
                            to={'/profile'}
                            exact>
                            &nbsp;Личный кабинет
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );

}

export default AppHeader