'use client';

import WordBookSvg from '@/components/svg-component/WordBookSvg';
import RightAngleBracketSvg from '@/components/svg-component/RightAngleBracketSvg';
import QuizSvg from '@/components/svg-component/QuizSvg';
import EmailSvg from '@/components/svg-component/EmailSvg';
import PowerSvg from '@/components/svg-component/PowerSvg';
import ProfileHeader from './ProfileHeader';
import ProfileInfo from './ProfileInfo';
import Link from 'next/link';
import { QUIZ_PATH, REPORT_FORM_URL, WORDBOOK_PATH } from '@/routes/path';

/**
 * NOTE:
 * 1. 좋아요 갯수 추가
 */

export default function Profile() {
  return (
    <>
      <ProfileHeader />
      <ProfileInfo />

      <Link href={WORDBOOK_PATH}>
        <div className="flex items-center bg-[#3D4FF3] h-[72px] mx-[20px] px-[22px] rounded-[16px] mt-[26px] mb-[22px] ">
          <span className="w-[20px] mr-[10px]">
            <WordBookSvg />
          </span>
          <span className="text-white text-[17px]">좋아요를 누른 단어</span>
          <span className="text-white h-[18px] w-[18px] flex items-center ml-auto">
            {4}
          </span>
        </div>
      </Link>

      <div className="bg-[#F1F4FA] flex flex-col">
        <Link href={QUIZ_PATH}>
          <div className="bg-white mt-[22px] mx-[20px] h-[60px] text-[17px] rounded-[16px] flex items-center px-[22px]">
            <span className="w-[20px] mr-[10px]">
              <QuizSvg />
            </span>
            <span className=" text-[17px]">개발 용어 발음 퀴즈</span>
            <span className="ml-auto">
              <RightAngleBracketSvg />
            </span>
          </div>
        </Link>

        <Link href={REPORT_FORM_URL}>
          <div className="bg-white mt-[22px] mx-[20px] h-[60px] text-[17px] rounded-[16px] flex items-center px-[22px]">
            <span className="w-[20px] mr-[10px]">
              <EmailSvg />
            </span>
            <span className=" text-[17px]">잘못된 정보 문의하기</span>
            <span className="ml-auto">
              <RightAngleBracketSvg />
            </span>
          </div>
        </Link>

        <div className="mt-[60px] mb-[32px] flex justify-center items-center">
          <span>
            <PowerSvg />
          </span>
          <span className="text-[#A8AEBC]">로그아웃</span>
          <span className="border border-l mx-[35px] h-[16px]"></span>
          <span className="text-[#A8AEBC] mr-[20px]">탈퇴하기</span>
        </div>
      </div>
    </>
  );
}
