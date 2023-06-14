// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import userGroupsReducer from './userGroupsSlice';

const store = configureStore({
  reducer: {
    userGroups: userGroupsReducer,
  },
});

export default store;