import MenuSvg from '@/components/svgComponent/MenuSvg';
import LogoSvg from '@/components/svgComponent/LogoSvg';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';
import QuizButton from '@/components/main/QuizButton';
import ToolTip from '@/components/common/ToolTip';
import { useState } from 'react';
import useScroll from '@/hooks/useScroll';
import { useEffect } from 'react';
import { NOTICE_PATH, WORD_LIST_PATH } from '@/routes/path.ts';


export default function Header() {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const isScrolled = useScroll();

  useEffect(() => {
    if (sessionStorage.getItem('isOpen')) setIsOpen(false);
    if (!isOpen) sessionStorage.setItem('isOpen', 'false');
  }, [isOpen]);

  return (
    <>
      <div className="bg-main-gradiant-top h-[48px] flex items-center p-6 justify-between border-none">
        <div className="flex-1">
          <a href={WORD_LIST_PATH}>
            <LogoSvg />
          </a>
        </div>
        <div onClick={() => navigate('/quiz')}>
          <QuizButton />
        </div>
        <button onClick={() => navigate('/notice')}>
=======
        <QuizButton />
        <button onClick={() => navigate(NOTICE_PATH)}>
          <MenuSvg />
        </button>
      </div>
      <SearchBar />
      {!isScrolled && (
        <ToolTip isOpen={isOpen} setIsOpen={() => setIsOpen(false)} />
      )}
    </>
  );
}
