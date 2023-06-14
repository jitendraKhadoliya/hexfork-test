// src/store/userGroupsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userGroupsSlice = createSlice({
  name: 'userGroups',
  initialState: [],
  reducers: {
    addUserGroup: (state, action) => {
      state.push(action.payload);
    },
    removeUserGroup: (state, action) => {
      return state.filter(group => group.id !== action.payload);
    },
  },
});

export const { addUserGroup, removeUserGroup } = userGroupsSlice.actions;
export default userGroupsSlice.reducer;