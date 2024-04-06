import { createPortal } from 'react-dom';

interface Props {
  isOpen: boolean;
  title: string;
  buttonLabel: string;
  onClickButton: () => void;
}

export default function Modal({
  isOpen,
  title,
  buttonLabel,
  onClickButton,
}: Props) {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center max-w-[430px] mx-auto">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full mx-4 flex flex-col items-center justify-center h-[150px]">
        <span>{title}</span>
        <button
          className="mx-auto w-[80px] mt-4 bg-brandTop hover:bg-brandBottom text-white font-bold py-2 px-4 rounded"
          onClick={onClickButton}
        >
          {buttonLabel}
        </button>
      </div>
    </div>,
    document.body,
  );
}
