import React from 'react';

import { ContainerRadio, Label } from './styles';

function Radio({ options, name, onChange, label = 'Selecione uma opção' }) {
  return (
    <ContainerRadio>
      {label}
      {options.map(option => (
        <Label key={option}>
          <input
            name={name}
            type="radio"
            value={option}
            onChange={onChange}
          />
          {option}
        </Label>
      ))}
    </ContainerRadio>
  );
}

export default Radio;