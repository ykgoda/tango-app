'use client';
import styled from 'styled-components';
import { CommonText } from '@/app/index';
import React from 'react';

type Props = {
  theme: string;
  content: string;
};

const PlayBookCard: React.FC<Props> = React.memo(({ theme, content }) => {
  return (
    <SPlayBookCard>
      <SRow>
        <CommonText fontsize={96}>{theme}</CommonText>
      </SRow>
      <SRow>
        <CommonText fontsize={64}>{content}</CommonText>
      </SRow>
    </SPlayBookCard>
  );
});

export default PlayBookCard;

const SPlayBookCard = styled.div``;

const SRow = styled.div``;
