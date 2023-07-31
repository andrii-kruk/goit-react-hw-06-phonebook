import React, { Component } from 'react';

import css from './ContactListItem.module.css';
const { contact_item, contact_info, remove_button } = css;

class ContactListItem extends Component {
  onRemoveBtnClick = () => {
    this.props.removeContact(this.props.id);
  };

  render() {
    const { name, number } = this.props;
    return (
      <li className={contact_item}>
        <p className={contact_info}>
          {name}: {number}
        </p>
        <button
          type="button"
          className={remove_button}
          aria-label="Remove contact"
          onClick={this.onRemoveBtnClick}
        >
          Remove
        </button>
      </li>
    );
  }
}

export default ContactListItem;
