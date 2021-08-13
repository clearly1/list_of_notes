import React,{useState} from 'react';
import AddElemForm from "../AddElemForm/AddElemForm";
import styles from "./ListContainerStyles.module.sass"
import ListElem from "../ListElem/ListElem";


function ListContainer(props) {
    const [listItems, setListItems] = useState([]);

    return (
        <ul className={styles.listContainer}>
            {
                listItems.map((item, index)=> (
                    <ListElem key={index} item={item}/>
                ))
            }
            <AddElemForm listItems={listItems} setListItems={setListItems}/>
        </ul>
    );
}

export default ListContainer;