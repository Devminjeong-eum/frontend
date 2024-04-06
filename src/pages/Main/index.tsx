import { MainItem } from './MainItem';

export default function Main() {
  return (
    <main className="p-5 rounded-[24px] bg-[#FBFCFE] -mt-[20px] z-50 flex flex-col gap-[12px]">
      {Array.from({ length: 10 }, (_, keyIndex) => (
        <MainItem key={keyIndex} id={keyIndex} />
      ))}
    </main>
  );
}
