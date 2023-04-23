import { configureStore } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
import {  contactsSlice } from './contactsSlice';
import {filterSlice} from './filterSlice'
export const store = configureStore({
  reducer: {
    // contacts: contactReducer,
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
  // middleware(getDefaultMiddleware) {
  //   return getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   });
  // },
});


// export const persistor = persistStore(store);