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
import NonLoginProfileInfo from './NonLoginProfileInfo';
import { useEffect, useState } from 'react';
import LogoutModal from './Modal/LogoutModal';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import LoginAlertModal from '@/components/common/LoginAlertModal';

type Props = {
  userId?: string;
  likeCount?: number;
  name?: string;
  profileImage?: string;
  isToken?: boolean;
};

export default function Profile({
  userId,
  likeCount,
  name,
  profileImage,
  isToken,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);
  const router = useRouter();

  const handleLoginToast = () => {
    if (!isToken) {
      setIsToastOpen(true);
      setTimeout(() => {
        setIsToastOpen(false);
      }, 2000);
    } else {
      router.push(WORDBOOK_PATH);
    }
  };

  const handleModalClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (userId) {
      router.push(`/profile/${userId}`);
    }
  }, [userId, router]);

  return (
    <>
      <ProfileHeader text={'마이페이지'} userId={userId} />

      {profileImage && name ? (
        <ProfileInfo profileImage={profileImage} name={name} />
      ) : (
        <NonLoginProfileInfo />
      )}

      <button className="w-full" onClick={handleLoginToast}>
        <div className="flex items-center bg-[#3D4FF3] h-[72px] mx-[20px] px-[22px] rounded-[16px] mt-[26px] mb-[22px] ">
          <span className="w-[20px] mr-[20px]">
            <WordBookSvg />
          </span>
          <span className="text-white text-[17px]">좋아요를 누른 단어</span>
          <span className="text-white h-[18px] w-[18px] flex items-center ml-auto">
            {likeCount ? likeCount : 0}
          </span>
        </div>
      </button>

      <div className="bg-[#F1F4FA] flex flex-col">
        <Link href={QUIZ_PATH}>
          <div className="bg-white mt-[22px] mx-[20px] h-[60px] text-[17px] rounded-[16px] flex items-center px-[22px]">
            <span className="w-[20px] mr-[20px]">
              <QuizSvg />
            </span>
            <span className="text-[17px]">개발 용어 발음 퀴즈</span>
            <span className="ml-auto">
              <RightAngleBracketSvg />
            </span>
          </div>
        </Link>

        <Link href={REPORT_FORM_URL} target="_blank">
          <div className="bg-white mt-[22px] mx-[20px] h-[60px] text-[17px] rounded-[16px] flex items-center px-[22px]">
            <span className="w-[20px] mr-[20px]">
              <EmailSvg />
            </span>
            <span className=" text-[17px]">잘못된 정보 문의하기</span>
            <span className="ml-auto">
              <RightAngleBracketSvg />
            </span>
          </div>
        </Link>

        <div
          className={clsx(
            'mt-[60px] mb-[32px] flex justify-center items-center',
            !userId && 'invisible',
          )}
        >
          <span>
            <PowerSvg />
          </span>
          <button className="text-[#A8AEBC]" onClick={handleModalClick}>
            로그아웃
          </button>
          <span className="border border-l mx-[35px] h-[16px]"></span>

          <Link href={'/profile/DeleteAccount'}>
            <button className="text-[#A8AEBC] mr-[20px]">탈퇴하기</button>
          </Link>
        </div>
      </div>
      {isOpen && (
        <LogoutModal isOpen={isOpen} handleModalClick={handleModalClick} />
      )}
      {!isToken && <LoginAlertModal isOpen={isToastOpen} />}
    </>
  );
}
