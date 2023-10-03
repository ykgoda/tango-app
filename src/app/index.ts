import App from 'next/app';

// Pages
export { default as Main } from '@/app/Pages/Main/page';

// Organisms
export { default as Header } from '@/app/Organisms/Header';
export { default as BookItem } from '@/app/Organisms/BookItem';
export { default as PlayBookItem } from '@/app/Organisms/PlayBookItem';

//Templates
export { default as MenuGuide } from '@/app/Templates/MenuGuide';
export { default as SlideContent } from '@/app/Templates/SlideContent';
export { default as SlideSettingContent } from '@/app/Templates/SlideSettingContent';
export { default as Slide } from '@/app/Templates/Slide';
export { default as BookList } from '@/app/Templates/BookList';
export { default as PlayBook } from '@/app/Templates/PlayBook';

//Molecules
export { default as MenuButton } from '@/app/Molecules/MenuButton';
export { default as PlayBookCard } from '@/app/Molecules/PlayBookCard';

//Atoms
export { default as CommonText } from '@/app/Atoms/CommonText';
export { default as PrimaryButton } from '@/app/Atoms/PrimaryButton';
export { default as SecondaryButton } from '@/app/Atoms/SecondaryButton';
