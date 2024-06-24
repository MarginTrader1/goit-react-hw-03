import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

import css from "./Contact.module.css";

const Contact = ({ contacts, deleteContact }) => {
   return (
      <>
         {contacts.map(({ id, name, number }) => {
            return (
               <li key={id} className={css.card}>
                  <div className={css.contact}>
                     <div className={css.cardName}>
                        <FaUser />
                        <p>{name}</p>
                     </div>
                     <div className={css.cardNumber}>
                        <FaPhoneAlt />
                        <p>{number}</p>
                     </div>
                  </div>
                  <button className={css.button} onClick={() => deleteContact(id)}>
                     {"Delete"}
                  </button>
               </li>
            );
         })}
      </>
   );
};

export default Contact;
