import { useEffect, useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";

//начальный стейт
const initialContacts = [
   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

//получаем данные с локал сторедж
const getContacts = () => {
   const contacts = JSON.parse(localStorage.getItem("contacts"));

   return contacts === null || contacts[0] === undefined ? initialContacts : contacts; //проверяем данные в локал сторедж
};

const App = () => {
   const [state, setState] = useState(getContacts); //начальные контакты

   // добавление контакта
   const addContact = (contact) => {
      setState([...state, contact]);
   };

   //удаление контакта
   const deleteContact = (id) => {
      setState(state.filter((item) => item.id !== id)); //фильтрация стейта по id
   };

   //добавление в локал сторедж
   useEffect(() => {
      localStorage.setItem("contacts", JSON.stringify(state));
   }, [state]);

   return (
      <>
         <h1>Phonebook</h1>
         <ContactForm addContact={addContact} />
         <ContactList contacts={state} deleteContact={deleteContact} />
      </>
   );
};

export default App;
