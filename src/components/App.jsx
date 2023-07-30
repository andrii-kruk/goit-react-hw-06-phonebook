import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { addContact, deleteContact } from 'redux/contactsReducer';

import 'react-toastify/dist/ReactToastify.css';
import { errorNotifyOptions, succesNotifyOptions } from 'notification';

import css from './App.module.css';
import { changeFilter } from 'redux/filterReducer';
const { section, contacts_container, contact_list_title } = css;

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const normalizedContact = filter.toLowerCase();
  const filteredContacts = contacts.items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedContact)
  );

  const dispatch = useDispatch();

  const addContactToList = contact => {
    if (contacts.items.some(user => user.name === contact.name))
      return toast.error('This contanct already added', errorNotifyOptions);

    dispatch(addContact(contact));

    toast.success('Contact seccesfuly added!', succesNotifyOptions);
  };

  const removeContactFromList = index => {
    dispatch(deleteContact(index));
  };

  const filterContacts = ({ target }) => {
    dispatch(changeFilter(target.value));
  };

  return (
    <section className={section}>
      <ContactForm addContact={addContactToList} />

      <div className={contacts_container}>
        <h3 className={contact_list_title}>Contact List</h3>
        {contacts.items.length === 0 ? (
          <h3 className={contact_list_title}>There are no contacts</h3>
        ) : (
          <>
            <Filter onChange={filterContacts} value={filter} />
            <ContactList
              contacts={filteredContacts}
              removeContact={removeContactFromList}
            />
          </>
        )}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};
