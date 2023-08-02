import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsReducer';
import css from './ContactListItem.module.css';

const { contact_item, contact_info, remove_button } = css;

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onRemoveBtnClick = () => {
    removeContactFromList(id);
  };

  const removeContactFromList = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={contact_item}>
      <p className={contact_info}>
        {name}: {number}
      </p>
      <button
        type="button"
        className={remove_button}
        aria-label="Remove contact"
        onClick={onRemoveBtnClick}
      >
        Remove
      </button>
    </li>
  );
};

export default ContactListItem;
