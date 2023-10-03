'use client';
import styled from 'styled-components';

const CommonText = styled.span<{
  fontsize?: number;
  color?: string;
  cursor?: string;
  opacity?: number;
  hoveropacity?: number;
}>`
  font-size: ${(props) => props.fontsize || 16}px;
  color: #${(props) => props.color || '333'};
  cursor: ${(props) => props.cursor};
  opacity: ${(props) => props.opacity || 1};
  &: hover {
    opacity: ${(props) => props.hoveropacity || 1};
  }
`;

export default CommonText;
