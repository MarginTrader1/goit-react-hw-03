import { useEffect, useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

import css from "./App.module.css";

//начальный стейт
const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  { id: "id-5", name: "Ann Simpson", number: "217-43-26" },
  { id: "id-6", name: "Rosie Copeland", number: "717-91-25" },
  { id: "id-7", name: "Kline Eden", number: "711-51-65" },
];

//получаем данные с локал сторедж
const getContacts = () => {
  const contacts = JSON.parse(localStorage.getItem("contacts"));

  return contacts === null || contacts[0] === undefined
    ? initialContacts
    : contacts; //проверяем данные в локал сторедж
};

const App = () => {
  const [state, setState] = useState(getContacts); //начальные контакты
  const [searchFilter, setSearchFilter] = useState(""); //начальний фильтр

  // добавление контакта
  const addContact = (contact) => {
    //проверка на наличиe контакта
    let existWord = state.some(
      (object) => object.name.toLowerCase() === contact.name.toLowerCase()
    ); //проверяем контакт через метод some() (true/false)

    if (existWord) {
      alert(`${contact.name} is already in contacts.`);
      return; // паттерн "раннее возвращение" через return
    } else {
      setState([...state, contact]);
    }
  };

  //удаление контакта
  const deleteContact = (id) => {
    setState(state.filter((item) => item.id !== id)); //фильтрация стейта по id
  };

  //поиск контакта
  const searchContact = (value) => {
    setSearchFilter(value);
  };

  //добавление в локал сторедж
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(state));
  }, [state]);

  //фильтруем cтейт по значению filter
  let filteredData = state.filter((item) =>
    item.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox search={searchContact} />
      <ContactList contacts={filteredData} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
