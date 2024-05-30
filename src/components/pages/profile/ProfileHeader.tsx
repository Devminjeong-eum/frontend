import { useRouter } from 'next/navigation';
import CloseSvg from '@/components/svg-component/CloseSvg';

type Props = {
  text?: string;
};

export default function ProfileHeader({ text }: Props) {
  const router = useRouter();

  return (
    <div className="w-full h-[48px] flex flex-row-reverse items-center pr-[16px]">
      {text && <div>{text}</div>}
      <button onClick={router.back}>
        <CloseSvg />
      </button>
    </div>
  );
}
