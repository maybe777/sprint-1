import React, {FC} from "react";
import {useSelector} from "../../service/hooks";
import styles from './ingredient-details.module.css'
import {useParams} from "react-router-dom";


const IngredientDetails: FC = () => {

    const {id} = useParams<{ id: string }>();

    const item = useSelector(store => {
        return store.ingredients.data.find((item: IBurgerItem) => item._id === id);
    });

    if (!item) {
        return <div>Загрузка...</div>
    }

    return (
        <div className={styles.container}>
            <div className={styles.picture + " mt-5"}>
                <img className={styles.img} src={item.image_large} alt={"Image detail"}/>
            </div>
            <div className={styles.title}>
                <p className="text text_type_main-medium title">
                    {item.name}
                </p>
            </div>
            <div className={styles.prop1 + " mt-3"}>
                <p className="text text_type_main-default text_color_inactive">Калории, ккал</p>
                <p className="text text_type_digits-default text_color_inactive">{item.calories}</p>
            </div>
            <div className={styles.prop2 + " mt-3"}>
                <p className="text text_type_main-default text_color_inactive">Белки, г</p>
                <p className="text text_type_digits-default text_color_inactive">{item.proteins}</p>
            </div>
            <div className={styles.prop3 + " mt-3"}>
                <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
                <p className="text text_type_digits-default text_color_inactive">{item.fat}</p>
            </div>
            <div className={styles.prop4 + " mt-3"}>
                <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
                <p className="text text_type_digits-default text_color_inactive">{item.carbohydrates}</p>
            </div>
        </div>
    );

}

export default IngredientDetails