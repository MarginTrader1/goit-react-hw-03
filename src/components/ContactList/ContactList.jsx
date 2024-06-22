import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
   return (
      <ul className={css.list}>
         <Contact contacts={contacts} deleteContact={deleteContact} />
      </ul>
   );
};

export default ContactList;
