import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// const initialState = {
//   contacts: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: {
//       items: [],
//       isLoading: false,
//       error: null,
//     },
//     filter: '',
//   },
//   reducers: {
// addContact: {
//   reducer(state, action) {
//     state.contacts.push(action.payload);
//   },
//   prepare(name, number) {
//     return {
//       payload: {
//         name,
//         number,
//         id: nanoid(),
//       },
//     };
//   },
// },
// deleteContact(state, action) {
//   const index = state.contacts.findIndex(
//     task => task.id === action.payload
//   );
//   state.contacts.splice(index, 1);
// },
// filterContacts(state, action) {
//   state.filter = action.payload;
// },
//   },
// });

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
      state.error = null;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addContact, deleteContact, filterContacts } =
  contactsSlice.actions;

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['contacts'],
// };

// export const contactReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

export const contactReducer = () => contactsSlice.reducer;
