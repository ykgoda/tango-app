'use client';

import styled from 'styled-components';
import { MenuGuide } from '@/app/index';

const Main: React.FC = () => {
  return (
    <SMain>
      <MenuGuide text="単語帳を作る" link="/Pages/MakeBook" />
      <MenuGuide text="単語帳を見る" link="/Pages/ShowBook" />
    </SMain>
  );
};

export default Main;

const SMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
