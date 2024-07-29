import BackButton from '@/components/common/BackButton';

export default function WordbookHeader() {
  return (
    <header className="h-12 flex items-center px-[16px]">
      <div className="flex-1 flex items-center">
        <BackButton />
      </div>
      <h1 className="flex-1 text-center text-white text-base font-semibold">
        좋아요를 누른 용어
      </h1>
      <div className="flex-1" />
    </header>
  );
}
