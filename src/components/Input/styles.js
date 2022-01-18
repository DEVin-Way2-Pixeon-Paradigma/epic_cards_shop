import styled from 'styled-components';

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DescriptionInput = styled.label`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
  color: #212529;
`;

export const InputText = styled.input`
  height: 24px;
  border-radius: 2px;
  outline: none;
  border: 1px solid #ced4da;
  padding: 5px 10px;

  &:focus {
    border-color: #EC6D08;
  }
`;
