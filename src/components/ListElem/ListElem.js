import React, {useState} from 'react';
import styles from './ListElemStyles.module.sass'
import AddElemForm from "../AddElemForm/AddElemForm";

function ListElem(props) {

    const pathToSubList = (props.pathToSubList || '') + `[${props.index}].subList`;
    const pathToElem = (props.pathToElem || '') + `[${props.index}]`;
    const pathToPrevElem = (props.pathToElem || '') + `[${props.index - 1}]`;
    const pathToNextElem = (props.pathToElem || '') + `[${props.index + 1}]`;
    const pathToCurrentList = props.pathToElem || '';

    return (
        <li className={styles.listElemContainer}>
            <div className={styles.flexContainer}>
                <div className={styles.note}>{props.item.value}</div>
                <div className={styles.buttonsContainer}>

                        {
                            props.index !== 0 &&
                            <button onClick={() => props.up(pathToElem, pathToPrevElem)}>up</button>
                        }
                        {
                            props.index < props.currentList.length - 1 &&
                            <button onClick={() => props.down(pathToElem, pathToNextElem)}>down</button>
                        }
                        {
                            props.item.subList ?
                                <button onClick={() => props.removeSubList(pathToSubList)}>Remove Sublist</button>
                                :
                                <button onClick={() => props.addSubList(pathToSubList)}>Add Sublist</button>
                        }

                        <button onClick={() => props.remove(pathToElem, pathToCurrentList)}>Remove</button>

                </div>
            </div>
            {
                props.item.subList &&
                <ul>
                    {
                        props.item.subList.map((item, index) => (
                            <ListElem key={index} index={index} item={item} up={props.up} down={props.down}
                                      addSubList={props.addSubList}
                                      removeSubList={props.removeSubList} remove={props.remove}
                                      listItems={props.listItems}
                                      currentList={props.item.subList}
                                      setListItems={props.setListItems} pathToSubList={pathToSubList}
                                      pathToElem={pathToElem + '.subList'}/>
                        ))
                    }
                    <AddElemForm listItems={props.listItems} setListItems={props.setListItems} pathToElem={pathToElem}/>
                </ul>
            }
        </li>
    );
}

export default ListElem;