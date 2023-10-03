'use client';
import { useEffect, useState } from 'react';
import { SlideContent, SlideSettingContent } from '@/app/index';
import axios from 'axios';

type SlideSettingContentType = {
  label: string;
  id: string;
  val: string;
};

type SlideContentType = {
  frontLabel: string;
  frontId: string;
  frontVal: string;
  backLabel: string;
  backId: string;
  backVal: string;
};

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

const Slide: React.FC = () => {
  const [slideSettingContents, setSlideSettingContents] = useState<
    SlideSettingContentType[]
  >([
    { label: '単語帳名', id: 'title', val: '' },
    { label: '表の内容', id: 'front', val: '' },
    { label: '裏の内容', id: 'back', val: '' },
  ]);

  const [slideContents, setSlideContents] = useState<SlideContentType[]>([]);
  const [frontTheme, setFrontTheme] = useState<string>('');
  const [backTheme, setBackTheme] = useState<string>('');
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [isFilled, setIsFilled] = useState<boolean>(false);

  const addPage = () => {
    const newPage: SlideContentType = {
      frontLabel: frontTheme,
      frontId: `${frontTheme + (pageIndex - 2)}`,
      frontVal: '',
      backLabel: backTheme,
      backId: `${backTheme + (pageIndex - 2)}`,
      backVal: '',
    };
    setSlideContents([...slideContents, newPage]);
    setPageIndex(pageIndex + 1);
  };

  const goNextPage = () => {
    setPageIndex(pageIndex + 1);
  };

  const backPrevPage = () => {
    setPageIndex(pageIndex - 1);
  };

  const finishMake = () => {
    const contents: BookContent[] = slideContents.map((content) => {
      return {
        front: content.frontVal,
        back: content.backVal,
      };
    });
    const newBook: Book = {
      id: 0,
      title: slideSettingContents[0].val,
      frontTheme: slideSettingContents[1].val,
      backTheme: slideSettingContents[2].val,
      contents: contents,
    };
    axios
      .post(`http://localhost:8080/book/`, newBook, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        return res;
      });
  };

  return (
    <div>
      {pageIndex < 3 ? (
        <SlideSettingContent
          label={slideSettingContents[pageIndex].label}
          id={slideSettingContents[pageIndex].id}
          val={slideSettingContents[pageIndex].val}
          setIsFilled={setIsFilled}
          setFrontTheme={setFrontTheme}
          setBackTheme={setBackTheme}
          slideSettingContents={slideSettingContents}
          setSlideSettingContents={setSlideSettingContents}
          pageIndex={pageIndex}
        />
      ) : (
        <SlideContent
          frontLabel={slideContents[pageIndex - 3].frontLabel}
          frontId={slideContents[pageIndex - 3].frontId}
          frontVal={slideContents[pageIndex - 3].frontVal}
          backLabel={slideContents[pageIndex - 3].backLabel}
          backId={slideContents[pageIndex - 3].backId}
          backVal={slideContents[pageIndex - 3].backVal}
          setIsFilled={setIsFilled}
          slideContents={slideContents}
          setSlideContents={setSlideContents}
          pageIndex={pageIndex}
        />
      )}
      {pageIndex > 1 && <button onClick={() => addPage()}>+</button>}
      <button
        onClick={() => backPrevPage()}
        disabled={pageIndex === 0 || !isFilled}
      >
        ←
      </button>
      <button
        onClick={() => goNextPage()}
        disabled={
          (pageIndex > 2 && pageIndex === slideContents.length + 2) ||
          !isFilled ||
          (slideContents.length === 0 && pageIndex === 2)
        }
      >
        →
      </button>
      {pageIndex > 2 && (
        <button
          onClick={() => finishMake()}
          disabled={pageIndex < 3 || !isFilled}
        >
          作成完了
        </button>
      )}
    </div>
  );
};

export default Slide;
