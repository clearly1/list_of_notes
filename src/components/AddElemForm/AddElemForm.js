import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import styles from "./AddElemFormStyles.module.sass"
import * as _ from 'lodash'

function AddElemForm(props) {
    return (
        <Formik
            initialValues={{note: ''}}
            validate={values => {
                const errors = {};
                if (!values.note) {
                    errors.note = 'Required';
                }
                return errors;
            }}
            onSubmit={(values, {setSubmitting}) => {
                    if(!props.pathToElem){
                        props.setListItems(
                            [
                                ...props.listItems,
                                {
                                    value: values.note
                                }
                            ]
                        );
                    }else{
                        let tmp = [...props.listItems];
                        _.set(tmp, props.pathToElem, {
                            value: _.get(tmp,props.pathToElem).value,
                            subList: [
                                ..._.get(tmp,props.pathToElem).subList,
                                {
                                    value: values.note
                                }
                            ]
                        });
                        props.setListItems(tmp);
                    }
                values.note = '';
                setSubmitting(false);
            }}
        >
            {({isSubmitting}) => (
                <Form className={styles.formContainer}>
                    <Field className={styles.fieldContainer} type="text" name="note" placeholder="Note"/>
                    <ErrorMessage className={styles.errorMessage} name="note" component="div"/>
                    <button type="submit" disabled={isSubmitting}>
                        Add
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default AddElemForm