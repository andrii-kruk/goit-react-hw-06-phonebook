import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = {
  items: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter((contact, i) => i !== action.payload);
    },
  },
});

export const { setContacts, addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
