'use client';
import { CommonText } from '@/app/index';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';

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

const BookItem: React.FC<Book> = ({
  id,
  title,
  frontTheme,
  backTheme,
  contents,
}) => {
  const router = useRouter();
  const showBookDetail = () => {
    router.push(`/Pages/BookPage/${id}`);
  };
  return (
    <SBookItem onClick={() => showBookDetail()}>
      <SBookTitle>
        <CommonText>{title}</CommonText>
      </SBookTitle>
      <div>
        <div>
          <div>
            <CommonText>表 {frontTheme}</CommonText>
          </div>
          <div>
            <CommonText>裏 {backTheme}</CommonText>
          </div>
        </div>
      </div>
      <SNavigation>
        <CommonText fontsize={24}>Play</CommonText>
        <span className="material-symbols-outlined">arrow_circle_right</span>
      </SNavigation>
    </SBookItem>
  );
};

export default BookItem;

const SBookItem = styled.div`
  width: 100%;
  height: 64px;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 4px 32px;
  margin-bottom: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  &:hover {
    opacity: 0.8;
    background-color: #ddd;
  }
`;

const SBookTitle = styled.div`
  margin-right: 10%;
  width: 20%;
  text-align: center;
`;

const SNavigation = styled.div`
  width: 16%;
  position: absolute;
  right: 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
