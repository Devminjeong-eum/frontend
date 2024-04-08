import { ErrorHandlingProps } from '@/types/errorHandling';
import { useNavigate } from 'react-router-dom';

export const ErrorHandlingMarkup = ({
  title,
  description,
  svg,
}: ErrorHandlingProps) => {
  const navigate = useNavigate();
  const moveToHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center min-h-screen justify-center -mt-16">
      {svg}
      <h1 className="mt-[27px] text-main-black font-semibold text-[18px]">
        {title}
      </h1>
      <h2 className="mt-[14px] text-main-charcoal">{description}</h2>
      <button
        onClick={moveToHome}
        className="fixed bottom-12 w-full max-w-[320px] h-[54px] bg-[#E7EBF8] rounded-[16px] "
      >
        <p className="text-[#383697]">홈으로 돌아가기</p>
      </button>
    </div>
  );
};
