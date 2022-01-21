import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  background: #FFF;
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0;
`;

export const THeader = styled.thead`
  background: #EC6D08;
  th {
  color: #FFF;
  text-align: left;
  padding: 12px;
  }
`;

export const TBody = styled.tbody`
`;

export const Row = styled.tr`
`;

export const RowItem = styled.td`
  padding: 12px;
  border-bottom: 1px solid #EC6D08;
`;

export const CartPhoto = styled.img`
  height: 100px;
`;

export const Button = styled.button`
  border: 0;
  background: #EC6D08;
  width: 150px;
  color: #FFF;
  font-weight: bold;
  float: right;
  margin: 10px 0;
`;