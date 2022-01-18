import React from 'react';

import { 
   ContainerInput, 
   DescriptionInput, 
   InputText,
   ErrorMessage
   } from './styles';

function Input({ label, errorMessage, ...otherProps }) {
  return (
    <ContainerInput>
     <DescriptionInput>{label}</DescriptionInput>
      <InputText
        {...otherProps}
        errorMessage={errorMessage}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
      
    </ContainerInput>
  );
}

export default Input;