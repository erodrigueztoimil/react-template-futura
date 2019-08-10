import React from 'react';

function Field(props) {
  let type;
  if (props.textarea) {
    type = 'textarea'
  } else if (props.email) {
    type = 'email'
  } else {
    type = 'text'
  }
  return (
    <input
      onChange={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
      type={ type }
      required
    />
  );
}

export default Field;
