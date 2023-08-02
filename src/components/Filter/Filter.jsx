import { useDispatch, useSelector } from 'react-redux';

import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterReducer';

import css from './Filter.module.css';

const { filter_input } = css;

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filterContacts = ({ target }) => {
    dispatch(changeFilter(target.value));
  };
  return (
    <input
      type="text"
      id="filter"
      name="filter"
      className={filter_input}
      placeholder="Search contacts..."
      onChange={filterContacts}
      value={filter}
    />
  );
};
