import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

import css from "./Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <div className={css.contact}>
      <div className={css.name}>
        <FaUser />
        <p>{name}</p>
      </div>
      <div className={css.number}>
        <FaPhoneAlt />
        <p>{number}</p>
      </div>
    </div>
  );
};

export default Contact;
