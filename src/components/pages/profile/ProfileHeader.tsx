import { useRouter } from 'next/navigation';
import BlackBackSpaceSVG from '@/components/svg-component/BlackBackSpaceSVG';
import { WORD_LIST_PATH } from '@/routes/path';

type Props = {
  text: string;
  userId?: string;
};

export default function ProfileHeader({ text, userId }: Props) {
  const router = useRouter();

  const handleback = () => {
    if (userId) {
      router.back();
    } else {
      router.push(WORD_LIST_PATH);
    }
  };

  return (
    <div className="h-[48px] flex items-center mx-[16px] font-medium">
      <button onClick={handleback}>
        <BlackBackSpaceSVG />
      </button>
      <div className="mx-auto text-[#181818]">{text}</div>
    </div>
  );
}
