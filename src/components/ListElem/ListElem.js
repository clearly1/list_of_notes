import React from 'react';
import styles from './ListElemStyles.module.sass'

function ListElem(props) {
    return (
        <li className={styles.listElemContainer}>
            {props.value}
        </li>
    );
}

export default ListElem;