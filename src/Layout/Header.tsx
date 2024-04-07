import { useState } from 'react';
import Modal from '@/components/common/Modal';
import MenuSvg from '@/components/svgComponent/MenuSvg';
import CustomButton from '@/components/common/CustomButton';
import LogoSvg from '@/components/svgComponent/LogoSvg';
import SearchBar from './SearchBar';
import { useLocation } from 'react-router-dom';
// '/words/:wordId' 형태의 경로를 식별하기 위한 정규 표현식
const depthRoutes = [/^\/words\/\d+$/];
function DefaultHeader() {
  const [open, setIsOpen] = useState(false);
  const onClickMenu = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="bg-main-gradiant-top h-12 flex items-center p-6 justify-between border-none">
        <LogoSvg />
        <CustomButton onClick={onClickMenu}>
          <MenuSvg />
        </CustomButton>
      </div>
      <SearchBar />

      <Modal
        isOpen={open}
        buttonLabel="닫기"
        title="다양한 기능을 추가할 계획이니, 많은 기대 부탁드려요!"
        onClickButton={() => setIsOpen(false)}
      />
    </>
  );
}

export default function Header() {
  const location = useLocation();

  // 현재 경로가 정규 표현식과 매칭되는지 여부 확인
  const isDepthHeader = depthRoutes.some((routes) =>
    routes.test(location.pathname),
  );

  return isDepthHeader ? <div /> : <DefaultHeader />;
}
