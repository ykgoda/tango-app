'use client';
import { PlayBookCard } from '@/app/index';
import styled from 'styled-components';

type Props = {
  frontTheme: string;
  backTheme: string;
  isBack: boolean;
  content: BookContent;
};

type BookContent = {
  front: string;
  back: string;
};

const PlayBookItem: React.FC<Props> = ({
  frontTheme,
  backTheme,
  isBack,
  content,
}) => {
  return (
    <SPlayBookItem>
      {isBack ? (
        <PlayBookCard theme={backTheme} content={content.back} />
      ) : (
        <PlayBookCard theme={frontTheme} content={content.front} />
      )}
    </SPlayBookItem>
  );
};

export default PlayBookItem;

const SPlayBookItem = styled.div`
  width: 100%;
  margin-bottom: 48px;
  text-align: center;
`;
