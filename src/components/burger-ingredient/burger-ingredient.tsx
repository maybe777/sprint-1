import React, {FC} from "react";
import styles from './burger-ingredient.module.css'
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDrag} from "react-dnd";
import {Link, useLocation} from "react-router-dom";


const BurgerIngredient: FC<TBurgerProps> = ({item, count}) => {

    const location = useLocation()

    const [{isDrag}, dragRef] = useDrag({
        type: "burgerItem",
        item: item,
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });

    const opacity: number = isDrag ? 0.4 : 1

    const counter = () => {
        if (count > 0) {
            return (<div className={styles.counter}>{count}</div>)
        }
        return null
    }

    return (
        <Link
            to={{
                pathname: '/ingredients/' + item._id,
                state: {background: location}
            }}
            className={styles.item}
            style={{opacity}}
            ref={dragRef}>
            {counter()}
            <div>
                <img src={item.image} alt={"Burger item"}/>
            </div>
            <div className={styles.price + " text text_type_digits-default"}>
                            <span className={"mr-2"}>
                                {item.price}
                            </span>
                <span>
                                <CurrencyIcon type={"primary"}/>
                            </span>
            </div>
            <div className={styles.description}>
                <p>{item.name}</p>
            </div>
        </Link>
    );
}

export default BurgerIngredient