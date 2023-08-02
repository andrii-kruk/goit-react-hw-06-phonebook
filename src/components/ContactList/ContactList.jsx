import { useDispatch, useSelector } from 'react-redux';

import ContactListItem from './ContactListItem/ContactListItem';

import { getContacts } from 'redux/selectors';
import { changeFilter } from 'redux/filterReducer';

import css from './ContactList.module.css';

const { contact_list_container, contact_list, contact_list_title } = css;

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const filteredContacts = useSelector(state => {
    const filter = state.filter.toLowerCase();
    return state.contacts.items.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );
  });

  const contactsToDisplay =
    filteredContacts.length > 0 ? filteredContacts : contacts.items;

  if (filteredContacts.length === 0) dispatch(changeFilter(''));

  return (
    <>
      {contacts.items.length === 0 && (
        <h2 className={contact_list_title}>There are no contacts</h2>
      )}
      <div className={contact_list_container}>
        <ul className={contact_list}>
          {contactsToDisplay.map(({ id, name, number }) => {
            return (
              <ContactListItem key={id} id={id} name={name} number={number} />
            );
          })}
        </ul>
      </div>
    </>
  );
};
