import { nanoid } from "nanoid";

const ContactForm = ({ addContact }) => {
   const submit = (evt) => {
      evt.preventDefault();

      const form = evt.target;
      const { name, number } = form.elements;
      console.log(name.value, number.value);

      addContact({
         id: nanoid(),
         name: name.value,
         number: number.value,
      });

      form.reset();
   };

   return (
      <form onSubmit={submit}>
         <input type="text" name="name" />
         <input type="number" name="number" />
         <button type="submit">{"Add Contact"}</button>
      </form>
   );
};

export default ContactForm;
