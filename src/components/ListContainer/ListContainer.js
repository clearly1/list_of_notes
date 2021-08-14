import React, {useState} from 'react';
import AddElemForm from "../AddElemForm/AddElemForm";
import styles from "./ListContainerStyles.module.sass"
import ListElem from "../ListElem/ListElem";
import * as _ from 'lodash';


function ListContainer(props) {
    const [listItems, setListItems] = useState([]);

    const up = (pathToElem, pathToPrevElem) => {
        let tmp = [...listItems];
        let newTopElem = _.get(tmp, pathToElem);
        _.set(tmp, pathToElem, _.get(tmp, pathToPrevElem));
        _.set(tmp, pathToPrevElem, newTopElem);
        setListItems(tmp);
    };
    const down = (pathToElem, pathToNextElem) => {
        let tmp = [...listItems];
        let newBottomElem = _.get(tmp, pathToElem);
        _.set(tmp, pathToElem, _.get(tmp, pathToNextElem));
        _.set(tmp, pathToNextElem, newBottomElem);
        setListItems(tmp);
    };
    const addSubList = (path) => {
        let tmp = [...listItems];
        _.set(tmp, path, []);
        setListItems(tmp);
    };
    const removeSubList = (path) => {
        let tmp = [...listItems];
        _.set(tmp, path, null);
        setListItems(tmp);
    };

    const remove = (pathToElem, pathToCurrentList) => {
        let tmp = [...listItems];
        if(pathToCurrentList === ''){
            _.remove(tmp, function (elem) {
                return elem === _.get(tmp, pathToElem)
            });
        }else{
            _.remove(_.get(tmp,pathToCurrentList), function (elem) {
                return elem === _.get(tmp, pathToElem)
            });
        }
        setListItems(tmp);
    };

    return (
        <ul className={styles.listContainer}>
            {
                listItems.map((item, index) => (
                    <ListElem key={index} index={index} item={item} up={up} down={down} addSubList={addSubList}
                              removeSubList={removeSubList} remove={remove}
                              listItems={listItems} setListItems={setListItems} currentList={listItems}/>
                ))
            }
            <AddElemForm listItems={listItems} setListItems={setListItems}/>
        </ul>
    );
}

export default ListContainer;