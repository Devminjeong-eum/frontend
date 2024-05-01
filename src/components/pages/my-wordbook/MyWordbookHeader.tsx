import BackButton from '@/components/common/BackButton';

export default function MyWordbookHeader() {
  return (
    <header className="h-12 flex justify-between items-center px-[16px]">
      <div className="flex-1 flex items-center">
        <BackButton />
      </div>
      <h1 className="flex-1 text-center text-white text-base font-semibold">
        좋아요 누른 단어
      </h1>
      <div className="flex-1" />
    </header>
  );
}
