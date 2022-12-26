// Style your elements here
import styled from 'styled-components'

export const ButtonItem = styled.li`
  list-style-type: none;
  padding-left: 0px;
  margin-right: 10px;
`

export const DirectionButton = styled.button`
  padding: 12px 24px;
  border: none;
  outline: none;
  cursor: pointer;
  color: #014f7b;
  background-color: #ffffff;
  border-radius: 5px;
  width: 100%;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
