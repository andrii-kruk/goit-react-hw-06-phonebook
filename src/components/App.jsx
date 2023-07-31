import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { addContact, deleteContact } from 'redux/contactsReducer';

import 'react-toastify/dist/ReactToastify.css';

import css from './App.module.css';
import { changeFilter } from 'redux/filterReducer';
import { getContacts } from 'redux/selectors';
import { handleNotification } from 'utils';
const { section, contacts_container, contact_list_title } = css;

export const App = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const addContactToList = contact => {
    if (contacts.items.some(user => user.name === contact.name))
      return handleNotification('This contanct already added', 'error');

    dispatch(addContact(contact));
    handleNotification('Contact seccesfuly added!', 'success');
  };

  const removeContactFromList = id => {
    dispatch(deleteContact(id));
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
          <div>
            <h3 className={contact_list_title}>There are no contacts</h3>
          </div>
        ) : (
          <>
            <Filter onChange={filterContacts} />
            <ContactList removeContact={removeContactFromList} />
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
