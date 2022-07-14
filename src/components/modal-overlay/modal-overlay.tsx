import React, {FC} from "react";
import styles from './modal-overlay.module.css'

const ModalOverlay:FC = () => {
    return (
        <div className={styles.overlay}/>
    );
}

export default ModalOverlay