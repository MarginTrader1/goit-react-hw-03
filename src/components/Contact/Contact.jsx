import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

import css from "./Contact.module.css";

const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <>
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
    </>
  );
};

export default Contact;
