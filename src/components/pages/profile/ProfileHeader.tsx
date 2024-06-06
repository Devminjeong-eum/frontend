import { useRouter } from 'next/navigation';
import BlackBackSpaceSVG from '@/components/svg-component/BlackBackSpaceSVG';

type Props = {
  text: string;
};

export default function ProfileHeader({ text }: Props) {
  const router = useRouter();

  return (
    <div className="h-[48px] flex items-center mx-[16px] font-medium">
      <button onClick={router.back}>
        <BlackBackSpaceSVG />
      </button>
      <div className="mx-auto">{text}</div>
    </div>
  );
}
