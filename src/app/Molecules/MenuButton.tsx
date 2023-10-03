'use client';
import styled from 'styled-components';
const MenuButton = styled.button<{
  widthratio: number;
  heightratio: number;
  position?: string;
}>`
  border: 1px solid #333;
  border-radius: 8px;
  width: ${(props) => props.widthratio}%;
  height: ${(props) => props.heightratio}%;
  background-color: #fff;
  &:hover {
    opacity: 0.8;
  }
  position: ${(props) => props.position};
  inset: 0;
  margin: auto;
  cursor: pointer;
`;

export default MenuButton;
