import React from 'react';

import css from './Filter.module.css';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
const { filter_input } = css;

export const Filter = ({ onChange }) => {
  const filter = useSelector(getFilter);
  return (
    <input
      type="text"
      id="filter"
      name="filter"
      className={filter_input}
      placeholder="Search contacts..."
      onChange={onChange}
      value={filter}
    />
  );
};
