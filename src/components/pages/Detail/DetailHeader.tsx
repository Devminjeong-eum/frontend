import BackButton from '@/components/common/BackButton.tsx';

export default function DetailHeader() {
  return (
    <div className="h-12 flex justify-between items-center border-b border-[#4152C1]">
      <BackButton />
      <h1 className="text-white">개발용어</h1>
      <div />
    </div>
  );
}
