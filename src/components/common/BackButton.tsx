import BackButtonSvg from '@/components/svgComponent/BackButtonSvg.tsx';
import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)}>
      <BackButtonSvg />
    </button>
  );
}
