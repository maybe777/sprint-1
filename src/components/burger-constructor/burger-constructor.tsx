import React, {FC, useState} from 'react';
import styles from './burger-constructor.module.css'
import {Button, ConstructorElement, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../details-order/order-details";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {addItem} from "../../redux/actions/constructor-actions";
import BurgerConstructorItem from "../burger-constructor-item/burger-constructor-item";
import ChiefCook from "../chief-cook/chief-cook";
import Modal from "../modal/modal";
import {Link, useLocation} from 'react-router-dom';


const BurgerConstructor: FC = () => {

    const data: Array<IBurgerItem> = useSelector((store: any) => store.burger.items)

    const dispatch = useDispatch();

    const location = useLocation()

    const [isVisible, setIsVisible] = useState<boolean>(false)

    const [{isHover}, dropTarget] = useDrop(() => ({
        accept: "burgerItem",
        drop: (item) => {
            // @ts-ignore
            dispatch(addItem(item))
        },
        collect: monitor => ({
            isHover: monitor.isOver()
        })
    }))

    const BUN: Array<IBurgerItem> = data.filter((item: IBurgerItem | any) => {
        return item.type === "bun";
    }).slice(0, 1)

    const INGREDIENTS: Array<IBurgerItem> = data.filter((item: IBurgerItem | any) => {
        return item.type !== "bun";
    })

    let burgerTop = (
        BUN.map((item: any, index: number) => (
            <ConstructorElement key={index}
                                text={item.name + " (верх)"}
                                isLocked={true}
                                type={'top'}
                                thumbnail={item.image}
                                price={item.price}/>
        ))
    );

    let burgerBottom = (
        BUN.map((item: any, index: number) => (
            <ConstructorElement key={index}
                                text={item.name + " (низ)"}
                                isLocked={true}
                                type={'bottom'}
                                thumbnail={item.image}
                                price={item.price}/>
        ))
    );

    const burger: Array<IBurgerItem> = BUN.concat(INGREDIENTS);

    function calculateOrder(burger: Array<IBurgerItem>): number {
        return burger.reduce((result: number, currValue: IBurgerItem | any) => {
            if (currValue.type === 'bun') {
                return currValue.price * 2
            }
            return result + currValue.price;
        }, 0)
    }

    function openModal() {
        setIsVisible(true)
    }

    function closeModal() {
        setIsVisible(false)
    }

    const mainStyle: string = isHover ? styles.main + " " + styles.onHoverMain : styles.main

    return (
        <div ref={dropTarget} className={mainStyle}>
            <div className={styles.bun + " pl-5 pr-2 mr-2"}>
                {burgerTop}
            </div>
            <div className={styles.ingredientList + " mb-1 mt-1"}>
                {INGREDIENTS.length > 0 ?
                    <ul className={styles.list}>
                        {INGREDIENTS.map((item: IBurgerItem | any, index: number) => (
                            <li key={item.__v} className={styles.item}>
                                <BurgerConstructorItem item={item} index={index + 1}/>
                            </li>
                        ))}
                    </ul>
                    :
                    <ChiefCook/>
                }
            </div>
            <div className={styles.bun + " pl-5 pr-2 pt-2 mr-2"}>
                {burgerBottom}
            </div>

            <div className={styles.summary + " mr-4"}>
                <div className={"text text_type_digits-default mr-4"}>
                    <span className={"text text_type_digits-medium"}>{calculateOrder(burger)}</span>
                    <span className={styles.currency}> <CurrencyIcon type={"primary"}/></span>
                </div>
                <Link
                    to={{
                        pathname: '/order',
                        state: {background: location}
                    }}>
                    <Button type={"primary"} size={"large"} onClick={openModal}>Оформить заказ</Button>
                </Link>
                {isVisible && (
                    <Modal onClose={closeModal} title="">
                        <OrderDetails/>
                    </Modal>
                )}
            </div>
        </div>
    );
}

export default BurgerConstructor