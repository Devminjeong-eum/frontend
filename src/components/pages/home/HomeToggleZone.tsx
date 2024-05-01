import clsx from 'clsx';

type Props = {
  handleToggle: (isTrending: boolean) => void;
  isTrending: boolean;
};

export default function HomeToggleZone({ handleToggle, isTrending }: Props) {
  return (
    <div className="text-main-blue flex gap-20 mx-auto w-full justify-center relative mb-[16px]">
      <div
        className={clsx(
          'absolute w-[182px] -top-[8px] h-[40px] rounded-full bg-[#ECF0FF] transition-transform duration-300',
          {
            '-translate-x-[84px]': isTrending,
            'translate-x-[84px]': !isTrending,
          },
        )}
      />
      <button
        onClick={() => handleToggle(true)}
        className={clsx(
          'z-10 w-[90px]',
          isTrending ? 'text-main-blue font-semibold ' : 'text-[#D7DCEB]',
        )}
      >
        트렌딩단어
      </button>
      <button
        onClick={() => handleToggle(false)}
        className={clsx(
          'z-10',
          isTrending ? 'text-[#D7DCEB]' : 'text-main-blue font-semibold ',
        )}
      >
        모든 용어 보기
      </button>
    </div>
  );
}
