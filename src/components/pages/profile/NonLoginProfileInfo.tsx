import NonLoginImage from '@/components/svg-component/NonLoginImage';
import Link from 'next/link';
import { LOGIN_PATH } from '@/routes/path';

export default function NonLoginProfileInfo() {
  return (
    <div className="flex flex-col items-center">
      <div className="mt-[8px] mb-[16px]">
        <NonLoginImage />
      </div>

      <div className="text-[20px] mb-[8px] h-[33px]">
        <span className="font-semibold">로그인</span>이 필요해요.
      </div>

      <Link href={LOGIN_PATH}>
        <div className="bg-[#4057DB] text-[12px] text-center text-white rounded-[61px] ring-1 ring-[#F2F4F9] py-[6px] w-[86px]">
          로그인하기
        </div>
      </Link>
    </div>
  );
}
