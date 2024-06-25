import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={css.card}>
            <Contact name={name} number={number} />
            <button className={css.button} onClick={() => deleteContact(id)}>
              {"Delete"}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
