import React, {useState} from 'react';
import styles from './ListElemStyles.module.sass'
import AddElemForm from "../AddElemForm/AddElemForm";

function ListElem(props) {

    const [listElemValue, setListElemValue] = useState(props.item.value);
    const [subList, setSubList] = useState([]);

    return (
        <li className={styles.listElemContainer}>
            {listElemValue}
            {
                subList &&
                <ul>
                    {
                        subList.map((item, index) => (
                            <ListElem key={index} item={item}/>
                        ))
                    }
                    <AddElemForm listItems={subList} setListItems={setSubList}/>
                </ul>
            }
        </li>
    );
}

export default ListElem;