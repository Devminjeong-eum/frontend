export default function Main() {
  return (
    <div className="p-[20px] rounded-[24px] bg-white -mt-[20px] flex flex-col gap-[12px]">
      {Array.from({ length: 10 }, (_, i) => {
        return (
          <div
            key={i}
            className="w-full h-[106px] border border-blue-500 rounded-2xl"
          ></div>
        );
      })}
    </div>
  );
}
