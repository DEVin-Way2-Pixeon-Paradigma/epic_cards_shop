import React from 'react';
import {
  ContainerSelect,
  DescriptionSelect,
  List
} from './styles';

function Select({ label, options, description, ...otherProps }) {
  
  return (
    <ContainerSelect>
     
      <DescriptionSelect>{label}</DescriptionSelect>
      <List {...otherProps} selected="">
        <option disabled value="">{description}</option>
        {options.map(option => <option
          key={option.value}
          value={option.value}>
          {option.label}
        </option>
        )}
      </List>
    </ContainerSelect>
  );
}

export default React.memo(Select);