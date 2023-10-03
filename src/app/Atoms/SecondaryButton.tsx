'use client';
import styled from 'styled-components';

const SecondaryButton = styled.button<{
  paddingvertical?: number;
  widthratio?: number;
  borderradius?: number;
  backgroundcolor?: string;
  textcolor?: string;
  opacity?: number;
  bordercolor?: string;
}>`
  padding: ${(props) => props.paddingvertical || 8}px 0;
  width: ${(props) => props.widthratio || 40}%;
  border-radius: ${(props) => props.borderradius || 8}px;
  background-color: #${(porps) => porps.backgroundcolor || 'fff'};
  color: ${(props) => props.textcolor || '#111'};
  border: 1px solid #${(props) => props.bordercolor || '111'};
  cursor: pointer;
  &:disabled {
    background-color: #bbb;
    opacity: 1;
    border: 1px solid #bbb;
  }
  &:hover {
    opacity: ${(props) => props.opacity || 0.5};
  }
`;

export default SecondaryButton;
