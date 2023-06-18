// src/components/UserGroupList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeUserGroup } from '../store/userGroupsSlice';
import './UserGroupList.css';

const UserGroupList = () => {
  const userGroups = useSelector((state) => state.userGroups);
  const dispatch = useDispatch();

  const handleRemoveUserGroup = (id) => {
    dispatch(removeUserGroup(id));
  };

  return (
    <ul>
      {userGroups.map((group) => (
        <li key={group.id}>
          {group.name}
          <button onClick={() => handleRemoveUserGroup(group.id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UserGroupList;
