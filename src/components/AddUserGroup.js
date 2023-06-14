// src/components/AddUserGroup.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUserGroup } from '../store/userGroupsSlice';
import './AddUserGroup.css';

const AddUserGroup = () => {
  const [groupName, setGroupName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (groupName.trim()) {
      dispatch(addUserGroup({ id: Date.now(), name: groupName }));
      setGroupName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
        placeholder="Enter group name"
      />
      <button type="submit">Add Group</button>
    </form>
  );
};

export default AddUserGroup;