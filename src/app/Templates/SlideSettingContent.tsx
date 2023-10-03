'use client';
import { CommonText } from '@/app/index';
import { useEffect } from 'react';

type Props = {
  label: string;
  id: string;
  val: string;
  setIsFilled: Function;
  setFrontTheme: Function;
  setBackTheme: Function;
  slideSettingContents: SlideSettingContentType[];
  setSlideSettingContents: Function;
  pageIndex: number;
};

type SlideSettingContentType = {
  label: string;
  id: string;
  val: string;
};

const SlideSettingContent: React.FC<Props> = ({
  label,
  id,
  val,
  setIsFilled,
  setFrontTheme,
  setBackTheme,
  slideSettingContents,
  setSlideSettingContents,
  pageIndex,
}) => {
  useEffect(() => {
    setIsFilled(val.length != 0);
  }, [val]);

  return (
    <div>
      <label htmlFor={id}>
        <CommonText>{label}</CommonText>
      </label>
      <input
        type="text"
        id={id}
        value={val}
        onChange={(e) => {
          setSlideSettingContents(
            slideSettingContents.map((content, index) =>
              index === pageIndex
                ? { ...content, val: e.target.value }
                : content
            )
          );
          console.log(slideSettingContents);
          if (id === 'front') {
            setFrontTheme(e.target.value);
          } else if (id === 'back') {
            setBackTheme(e.target.value);
          }
        }}
      />
    </div>
  );
};

export default SlideSettingContent;
