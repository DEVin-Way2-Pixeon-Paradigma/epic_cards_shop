import React from 'react';

import { ContainerInput, DescriptionInput, InputText } from './styles';

function Input({ label, ...otherProps }) {
  return (
    <ContainerInput>
     <DescriptionInput>{label}</DescriptionInput>
      <InputText
        {...otherProps}
      />
    </ContainerInput>
  );
}

export default Input;