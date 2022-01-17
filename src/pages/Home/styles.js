import styled from 'styled-components';

export const CategoryItem = styled.div`
  height: 34px;
  padding: 10px 5px;
  width: 100%;
  background: #304E74;
  margin: 10px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  
  a {
    font-size: 26px;
    color: #FFF; 
    text-decoration: none;
    font-weight: bold;
  };

  &:hover {
    background: #0C1025;
    zoom: 1.1;
  };
`;
