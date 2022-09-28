import React from 'react';

function Input(props) {
  return (
    <label>
      {props.headline}
      <br />
      {(() => {
        if (props.type === 'text' || props.type === 'checkbox') {
          return (
            <input
              name={props.name}
              type={props.type}
              value={props.value.name}
              onChange={props.handleChange}
            />
          );
        } else if (props.type === 'textarea') {
          return (
            <textarea
              name={props.name}
              value={props.value.city}
              onChange={props.handleChange}
            />
          );
        } else if (props.type === 'select') {
          return (
            <select name="timeLived" onChange={props.handleChange}>
              <option value="0">0-1 year</option>
              <option value="1">1-5 years</option>
              <option value="2">5-10 years</option>
              <option value="3">10-15 years</option>
              <option value="4">15+ years</option>
            </select>
          );
        }
      })()}

      <br></br>
    </label>
  );
}

export default Input;
