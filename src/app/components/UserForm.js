'use client'

// test run 1

import React from 'react';
import './UserForm.css';
import { e1, e2 } from './calender';
import Button from './Button';
import { useState } from 'react';
import Axios from 'axios';

const UserForm = ({ showUserForm, setShowUserForm }) => {
  const handleCancel = () => {
    setShowUserForm(false);
  };


  const g = () => {
    alert("nice")
  }

  const [form, setForm] = useState({
    name: '',
    email: '',
    description: '',
    date: e1,
    time: e2
  });

  const downloadFile = ({ data, fileName, fileType }) => {
    const blob = new Blob([data], { type: fileType });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a); // append the link to the document body
    a.click(); // simulate a click event on the link
    window.URL.revokeObjectURL(url); // revoke the object URL
    document.body.removeChild(a); // remove the link from the document body
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    
    await Axios({
      method: "POST",
      headers: {
        'Content-Type': 'calendar/json'
      },
      data: form,
      withCredentials: true,
      url: "/calendar",
    }).then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.error(err)
    })
  }




  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const Jsonify = JSON.stringify(form);
  //   console.log(Jsonify);

  //   downloadFile({
  //     data: Jsonify,
  //     fileName: 'user.json',
  //     fileType: 'text/json'
  //   });
  // }




  return (
    <> {showUserForm ? (
      <div className="form-container">
        <p>
          <h4> Selected Meeting Time:</h4>
          <h5 value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} >
            {e1}, {e2}
          </h5>
        </p>
        <hr></hr>
        <form>
          <div className="form-field">
            <label htmlFor="name" >Name</label>
            <input type="text" id="name" name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>
          <div className="form-field">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </div>
          <div className="form-field">
            <label htmlFor="description">Meeting Purpose:</label>
            <textarea id="description" name="description" rows="4" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} ></textarea>
          </div>
          <Button title='Confirm' onClick={handleSubmit}></Button>
          <Button title='Cancel' onClick={handleCancel}> </Button>
        </form>
      </div>

    ) : null}
    </>
  );
};

export default UserForm;