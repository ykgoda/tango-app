'use client';
import styled from 'styled-components';

const Header: React.FC = () => {
  return <SHeader>My単語帳</SHeader>;
};

export default Header;

const SHeader = styled.div`
  width: 100%;
  height: 8vh;
  text-align: center;
  border-bottom: 1px solid #333;
  line-height: 8vh;
`;
