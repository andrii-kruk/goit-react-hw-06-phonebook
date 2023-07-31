import { useState } from 'react';
import { nanoid } from 'nanoid';

import css from './ContactForm.module.css';
const { contact_form, label, submit_button, input } = css;

const inputNameId = nanoid();
const inputNumberId = nanoid();

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        setName(target.value);
        break;
      case 'number':
        setNumber(target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmitForm = event => {
    event.preventDefault();

    addContact({ id: nanoid(), name, number });

    handleResetForm('');
  };

  const handleResetForm = value => {
    setName(value);
    setNumber(value);
  };

  return (
    <form className={contact_form} onSubmit={handleSubmitForm}>
      <label htmlFor="name" className={label} id={inputNameId}>
        Name:
      </label>
      <input
        id={inputNameId}
        type="text"
        name="name"
        className={input}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="phone" className={label} id={inputNumberId}>
        Phone Number:
      </label>
      <input
        type="tel"
        id={inputNumberId}
        name="number"
        className={input}
        pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        onChange={handleInputChange}
        required
      />

      <button type="submit" className={submit_button}>
        Submit
      </button>
    </form>
  );
};
