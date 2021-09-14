import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import s from './App.module.css';

const App = () => {
  return (
    <div>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.section}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
