'use client';
import { useState } from 'react';
import { PlayBookItem, PrimaryButton, SecondaryButton } from '@/app/index';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

type Book = {
  id: number;
  title: string;
  frontTheme: string;
  backTheme: string;
  contents: BookContent[];
};

type BookContent = {
  front: string;
  back: string;
};

const PlayBook: React.FC<Book> = ({
  title,
  frontTheme,
  backTheme,
  contents,
}) => {
  const router = useRouter();

  const [pageIndex, setPageIndex] = useState<number>(0);
  const [isBack, setIsBack] = useState<boolean>(false); // Flag back side is shown or not

  const backPage = () => {
    setPageIndex(pageIndex - 1);
  };
  const nextPage = () => {
    setPageIndex(pageIndex + 1);
  };
  const finishPlay = () => {
    router.push('/Pages/ShowBook');
  };
  return (
    <SPlayBook>
      <PlayBookItem
        frontTheme={frontTheme}
        backTheme={backTheme}
        isBack={isBack}
        content={contents[pageIndex]}
      />
      <SButtonRow>
        <SecondaryButton
          onClick={() => backPage()}
          widthratio={10}
          disabled={pageIndex === 0}
        >
          ←
        </SecondaryButton>
        {isBack ? (
          <SecondaryButton
            onClick={() => {
              setIsBack(false);
            }}
            bordercolor="31CEF7"
            backgroundcolor="31CEF7"
            widthratio={30}
          >
            表を見る
          </SecondaryButton>
        ) : (
          <SecondaryButton
            onClick={() => {
              setIsBack(true);
            }}
            bordercolor="31CEF7"
            backgroundcolor="31CEF7"
            widthratio={30}
          >
            裏を見る
          </SecondaryButton>
        )}
        {pageIndex === contents.length - 1 ? (
          <PrimaryButton onClick={() => finishPlay()} widthRatio={10}>
            終了
          </PrimaryButton>
        ) : (
          <PrimaryButton onClick={() => nextPage()} widthRatio={10}>
            →
          </PrimaryButton>
        )}
      </SButtonRow>
    </SPlayBook>
  );
};

export default PlayBook;

const SPlayBook = styled.div`
  width: 80%;
  margin: 128px auto;
`;

const SButtonRow = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
