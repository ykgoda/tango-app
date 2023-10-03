'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { Header, PlayBook } from '@/app/index';

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

const BookPage: React.FC = () => {
  //   const router = useRouter();
  const id = useSearchParams().get('id');
  const dummyBook: Book = {
    id: 0,
    title: '単語帳',
    frontTheme: '日本語',
    backTheme: '英語',
    contents: [
      { front: '犬', back: 'dog' },
      { front: '猫', back: 'cat' },
    ],
  };

  return (
    <div>
      <Header />
      <PlayBook
        id={dummyBook.id}
        title={dummyBook.title}
        frontTheme={dummyBook.frontTheme}
        backTheme={dummyBook.backTheme}
        contents={dummyBook.contents}
      />
    </div>
  );
};

export default BookPage;
