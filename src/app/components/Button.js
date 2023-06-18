import React from 'react';
import './Button.css';
export default function Button(props) {
  return (
    <button className="red-button mx-4 my-4" onClick={props.onClick}>
      <b>{props.title}</b>
    </button>
  );
}
