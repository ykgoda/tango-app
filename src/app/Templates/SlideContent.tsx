'use client';

import { CommonText } from '@/app/index';
import { useState, useEffect } from 'react';

type SlideContentType = {
  frontLabel: string;
  frontId: string;
  frontVal: string;
  backLabel: string;
  backId: string;
  backVal: string;
};

type Props = {
  frontLabel: string;
  frontId: string;
  frontVal: string;
  backLabel: string;
  backId: string;
  backVal: string;
  setIsFilled: Function;
  slideContents: SlideContentType[];
  setSlideContents: Function;
  pageIndex: number;
};

const SlideContent: React.FC<Props> = ({
  frontLabel,
  frontId,
  frontVal,
  backLabel,
  backId,
  backVal,
  setIsFilled,
  slideContents,
  setSlideContents,
  pageIndex,
}) => {
  useEffect(() => {
    setIsFilled(frontVal.length != 0 && backVal.length != 0);
  }, [frontVal, backVal]);

  return (
    <div>
      <div>
        <label htmlFor={frontId}>
          <CommonText>{frontLabel}</CommonText>
        </label>
        <input
          type="text"
          id={frontId}
          value={frontVal}
          onChange={(e) => {
            // setIsFrontFilled(e.target.value.length != 0);
            setSlideContents(
              slideContents.map((content, index) => {
                return index === pageIndex - 3
                  ? { ...content, frontVal: e.target.value }
                  : content;
              })
            );
            console.log(slideContents);
            // isFrontFilled && isBackFilled
            //   ? setIsFilled(true)
            //   : setIsFilled(false);
          }}
        />
      </div>
      <div>
        <label htmlFor={backId}>
          <CommonText>{backLabel}</CommonText>
        </label>
        <input
          type="text"
          id={backId}
          value={backVal}
          onChange={(e) => {
            // setIsBackFilled(e.target.value.length != 0);
            setSlideContents(
              slideContents.map((content, index) => {
                return index === pageIndex - 3
                  ? { ...content, backVal: e.target.value }
                  : content;
              })
            );
            // isFrontFilled && isBackFilled
            //   ? setIsFilled(true)
            //   : setIsFilled(false);
          }}
        />
      </div>
    </div>
  );
};

export default SlideContent;
