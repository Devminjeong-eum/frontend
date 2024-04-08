import MenuSvg from '@/components/svgComponent/MenuSvg';
import LogoSvg from '@/components/svgComponent/LogoSvg';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';
import QuizButton from '@/components/main/QuizButton';

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-main-gradiant-top h-[48px] flex items-center p-6 justify-between border-none">
        <div className="flex-1">
          <a href="/">
            <LogoSvg />
          </a>{' '}
        </div>
        <QuizButton />
        <button onClick={() => navigate('/notice')}>
          <MenuSvg />
        </button>
      </div>
      <SearchBar />
    </>
  );
}
