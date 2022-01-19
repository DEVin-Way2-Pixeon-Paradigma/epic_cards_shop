import React from 'react';

import {
  ContainerInput,
  DescriptionInput,
  InputTextarea,
  ErrorMessage
} from './styles';

function Textarea({
  label,
  errorMessage,
  rows = "5",
  ...otherProps
}) {
  return (
    <ContainerInput>
      <DescriptionInput>{label}</DescriptionInput>
      <InputTextarea
        {...otherProps}
        rows={rows}
        errorMessage={errorMessage}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </ContainerInput>
  );
}

export default React.memo(Textarea);