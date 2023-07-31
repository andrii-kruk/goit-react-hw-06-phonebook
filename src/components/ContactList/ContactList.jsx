import React from 'react';
import { useSelector } from 'react-redux';

import ContactListItem from './ContactListItem/ContactListItem';

import css from './ContactList.module.css';
import { getContacts } from 'redux/selectors';
const { contact_list_container, contact_list } = css;

export const ContactList = ({ removeContact }) => {
  const contacts = useSelector(getContacts);

  const filteredContacts = useSelector(state => {
    const filter = state.filter.toLowerCase();
    return state.contacts.items.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );
  });

  const contactsToDisplay =
    filteredContacts.length > 0 ? filteredContacts : contacts.items;

  return (
    <div className={contact_list_container}>
      <ul className={contact_list}>
        {contactsToDisplay.map(({ id, name, number }) => {
          return (
            <ContactListItem
              key={id}
              id={id}
              name={name}
              number={number}
              removeContact={removeContact}
            />
          );
        })}
      </ul>
    </div>
  );
};
