import CustomButton from '@/components/common/CustomButton.tsx';
import BackButtonSvg from '@/components/svgComponent/BackButtonSvg.tsx';
import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <CustomButton onClick={() => navigate(-1)}>
      <BackButtonSvg />
    </CustomButton>
  );
}
