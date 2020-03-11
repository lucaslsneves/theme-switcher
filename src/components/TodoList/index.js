import React,{useContext} from 'react';
import styled from 'styled-components';

import ThemeContext from '../../styles/themes/context';

const List = styled.ul`
  background: ${props => props.theme.background};
  color:  ${props => props.theme.color};
  font-family: sans-serif;
  font-size: 18px;
  padding: 20px;
  border-radius:4px;
  list-style-position:inside;
`;


export default function TodoList() {
  return (
    <List>
      <li>Fazer café</li>
      <li>Beber água</li>
      <li>Estudar React</li>
    </List>
  )
}
