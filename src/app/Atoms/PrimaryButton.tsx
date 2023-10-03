'use client';
import styled from 'styled-components';

const PrimaryButton = styled.button<{
  paddingvertical?: number;
  widthRatio?: number;
  borderradius?: number;
  backgroundcolor?: string;
  textcolor?: string;
  opacity?: number;
}>`
  padding: ${(props) => props.paddingvertical || 8}px 0;
  width: ${(props) => props.widthRatio || 40}%;
  border-radius: ${(props) => props.borderradius || 8}px;
  background-color: ${(porps) => porps.backgroundcolor || '#000'};
  color: ${(props) => props.textcolor || '#eee'};
  cursor: pointer;
  &:hover {
    opacity: ${(props) => props.opacity || 0.5};
  }
  &:disabled {
    background-color: #bbb;
    opacity: 1;
  }
`;

export default PrimaryButton;
