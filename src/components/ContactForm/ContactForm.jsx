import { useId } from "react";

import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

// паттерн для проверки номера
const phoneRegExp =
  /^\+?\d{1,4}?[ .-]?(\(\d{1,3}\))?([ .-]?\d{1,4}){1,4}([ .-]?\d{1,9})?$/;

// паттерн для проверки имени
const nameRegExp =
  "^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .matches(nameRegExp, "Неверный ввод")
    .required("Заполните поле!"),
  number: Yup.string()
    .min(7, "Too Short!")
    .matches(phoneRegExp, "Неверный ввод")
    .required("Заполните поле!"),
});

const ContactForm = ({ addContact }) => {
  const id = useId();

  const submit = (values, actions) => {
    //добавляем контакт
    addContact({
      id: nanoid(),
      ...values,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submit}
      validationSchema={ValidationSchema}
    >
      <Form className={css.form}>
        <div className={css.input}>
          <label htmlFor={`name-${id}`}>Name</label>
          <div className={css.inputText}>
            <Field
              type="text"
              name="name"
              id={`name-${id}`}
              className={css.inputField}
            />
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>
        </div>
        <div className={css.input}>
          <label htmlFor={`number-${id}`}>Number</label>
          <div className={css.inputText}>
            <Field
              type="text"
              name="number"
              id={`number-${id}`}
              className={css.inputField}
            />
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </div>
        </div>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
