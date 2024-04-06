import { MainItem } from './MainItem';

export default function Main() {
  return (
    <main className="p-4 rounded-[24px] bg-white -mt-[20px] z-50 flex flex-col gap-[12px]">
      {Array.from({ length: 10 }, (_, i) => (
        <MainItem key={i} id={i} />
      ))}
    </main>
  );
}
