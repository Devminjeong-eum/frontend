import BigMagnifierSvg from '@/components/svg-component/BigMagnifierSvg';

type Props = {
  wordName: string;
};

export default function NotFoundWord({ wordName }: Props) {
  return (
    <div className="flex flex-col justify-center items-center pt-[200px] ">
      <BigMagnifierSvg />
      <div className="mt-5 text-[#A8AEBC]">
        앗! {wordName}에 대한 검색 결과가 없어요.
      </div>
    </div>
  );
}
