'use client';
import { BookItem } from '@/app/index';
import styled from 'styled-components';
import { useEffect } from 'react';
import axios from 'axios';

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

const dummyData: Book[] = [
  {
    id: 0,
    title: '単語帳',
    frontTheme: '日本語',
    backTheme: '英語',
    contents: [{ front: '犬', back: 'dog' }],
  },
  {
    id: 1,
    title: '単語帳2',
    frontTheme: '日本語',
    backTheme: '英語',
    contents: [{ front: '猫', back: 'cat' }],
  },
];

const BookList: React.FC = () => {
  useEffect(() => {
    axios.get(`http://localhost:8080/book/0`).then((res) => {
      console.log(res);
    });
  });
  return (
    <SBookList>
      {dummyData.map((data, index) => (
        <BookItem
          key={index}
          id={data.id}
          title={data.title}
          frontTheme={data.frontTheme}
          backTheme={data.backTheme}
          contents={data.contents}
        />
      ))}
    </SBookList>
  );
};

export default BookList;

const SBookList = styled.div`
  width: 40%;
  margin: 32px auto;
`;
