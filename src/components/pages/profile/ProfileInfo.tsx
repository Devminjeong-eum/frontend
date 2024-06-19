import Image from 'next/image';

type Props = {
  profileImage: string;
  name: string;
};

export default function ProfileInfo({ profileImage, name }: Props) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={profileImage}
        alt="Profile Image"
        width={88}
        height={88}
        className="rounded-[31px] mt-[8px] mb-[16px]"
        priority
      />

      <div className="font-semibold text-[22px]">
        {name}
        <span className="font-normal">님</span>
      </div>

      <div className="text-[18px]">오늘도 화이팅!</div>

      {/* <div className="bg-[#FBFCFE] text-[12px] text-center text-[#5E5E5E] rounded-[61px] ring-1 px-[14px] ring-[#F2F4F9] py-[8px] w-[86px]">
        내 정보 수정
      </div> */}
    </div>
  );
}
