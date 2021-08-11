import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from "./AddElemFormStyles.module.sass"

function AddElemForm(props) {
    return (
        <Formik
            initialValues={{ note: '' }}
            validate={values => {
                const errors = {};
                if (!values.note) {
                    errors.note = 'Required';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                props.setListItems(
                    [
                        ...props.listItems,
                        values.note
                    ]
                );
                values.note = '';
                setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <Form className={styles.formContainer}>
                    <Field className={styles.fieldContainer} type="text" name="note" placeholder="Текст заметки"/>
                    <ErrorMessage className={styles.errorMessage} name="note" component="div" />
                    <button type="submit" disabled={isSubmitting}>
                        Добавить
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default AddElemForm;