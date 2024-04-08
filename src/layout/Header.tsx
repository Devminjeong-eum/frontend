import MenuSvg from '@/components/svgComponent/MenuSvg';
import LogoSvg from '@/components/svgComponent/LogoSvg';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';
import QuizButton from '@/components/main/QuizButton';
import { NOTICE_PATH, WORD_LIST_PATH } from '@/routes/path.ts';

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-main-gradiant-top h-[48px] flex items-center p-6 justify-between border-none">
        <div className="flex-1">
          <a href={WORD_LIST_PATH}>
            <LogoSvg />
          </a>{' '}
        </div>
        <QuizButton />
        <button onClick={() => navigate(NOTICE_PATH)}>
          <MenuSvg />
        </button>
      </div>
      <SearchBar />
    </>
  );
}
