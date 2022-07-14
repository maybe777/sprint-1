import styles from './order-details.module.css'
import approve from '../../images/done.png'
import ErrorHandler from "../error/error-handler";
import {useDispatch, useSelector} from "react-redux";
import React, {FC, useEffect} from "react";
import {getOrder} from "../../redux/actions/order-actions";


const OrderDetails: FC = () => {

    const {orderNumber, orderFailed}: TOrderDetails = useSelector((store: any) => ({
        orderNumber: store.order.number,
        orderFailed: store.order.orderFailed
    }));

    const dispatch = useDispatch();

    useEffect(() => {
        // @ts-ignore
        dispatch(getOrder())
    }, [dispatch])

    if (orderFailed) {
        return (
            <div className={styles.container}>
                <ErrorHandler/>
            </div>
        )
    } else {
        return (
            <div className={styles.details}>
                <p className="text text_type_digits-large pt-4">{orderNumber}</p>
                <p className="text text_type_main-medium pt-5">идентификатор заказа</p>
                <p className="mt-15"><img src={approve} alt={"Order approval image"}/></p>
                <p className="text text_type_main-default mt-10">Ваш заказ начали готовить</p>
                <p className="text text_type_main-default mt-2"><span style={{color: '#8585AD'}}>Дождитесь готовности на орбитальной станции</span>
                </p>
            </div>)
    }

}

export default OrderDetails