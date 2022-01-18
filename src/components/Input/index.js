import React from 'react';

// import { Container } from './styles';

function Input({ label, ...otherProps }) {
  return (
    <div>
     <label>{label}</label>
      <input
        {...otherProps}
      />
       
    </div>
  );
}

export default Input;