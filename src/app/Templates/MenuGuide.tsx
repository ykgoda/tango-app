'use client';
import Link from 'next/link';
import styled from 'styled-components';
import { CommonText, MenuButton } from '@/app/index';

type Props = {
  text: string;
  link: string;
};

const MenuGuide: React.FC<Props> = ({ text, link }) => {
  return (
    <SMakeBookGuide>
      <Link href={link}>
        <MenuButton widthratio={60} heightratio={50} position="absolute">
          <CommonText>{text}</CommonText>
        </MenuButton>
      </Link>
    </SMakeBookGuide>
  );
};

export default MenuGuide;

const SMakeBookGuide = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
`;
