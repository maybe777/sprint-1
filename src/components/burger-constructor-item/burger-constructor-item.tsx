import React, {FC, useRef} from 'react'
import styles from "./burger-constructor-item.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {removeItem, sortItem} from "../../redux/actions/constructor-actions";
import {useDrag, useDrop} from "react-dnd";
import {useDispatch} from "react-redux";


const BurgerConstructorItem: FC<TConstructorProps> = ({item, index}) => {

    const dndRef = useRef<HTMLDivElement>(null)

    const dispatch = useDispatch()

    const [{isDrag}, dragRef] = useDrag({
        type: "burgerElem",
        item: () => {
            return {item, index}
        },
        collect: monitor => ({
            isDrag: monitor.isDragging()
        }),
        canDrag: true,
    });

    const [, sortRef] = useDrop(() => ({
        accept: "burgerElem",
        hover: (item: any, monitor) => {

            const dragIndex = item.index

            if (item.index === index) {
                return
            }

            if (!dndRef.current) {
                return
            }

            // @ts-ignore
            const hoverBoundRect = dndRef.current?.getBoundingClientRect()
            const hoverY = (hoverBoundRect.bottom - hoverBoundRect.top) / 1.2
            const clientOffset = monitor.getClientOffset()
            // @ts-ignore
            const clientY = clientOffset?.y - hoverBoundRect?.top

            if (dragIndex < index && clientY < hoverY) {
                return
            }

            if (dragIndex > index && clientY > hoverY) {
                return
            }

            //@ts-ignore
            dispatch(sortItem(item.index, index))

            item.index = index
        },
    }))

    dragRef(sortRef(dndRef))

    const opacity: number = isDrag ? 0 : 1;

    return (
        <div ref={dndRef} style={{opacity}} className={styles.item + " pt-2 mr-2"}>
            <div className={styles.drag}>
                <DragIcon type={"primary"}/>
            </div>
            <ConstructorElement
                text={item.name}
                thumbnail={item.image}
                price={item.price}
                isLocked={false}
                //@ts-ignore
                handleClose={() => dispatch(removeItem(index))}
            />
        </div>
    )
}

export default BurgerConstructorItem
