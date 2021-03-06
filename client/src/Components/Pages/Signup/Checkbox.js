import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const Checkbox =({ checkbox, handleChange }) => {
  return (
    <div>
      {checkbox.map(el => (
        <div className='divBox'>
          <input key={el.name} id={ el.name } type={ el.type } value={ el.name } name={ el.name } onChange={ handleChange } />
          <span className='checkBoxSpan'>
            { el.text }
          </span>
        </div>
      ))}
    </div>
  );
};
export default Checkbox;
