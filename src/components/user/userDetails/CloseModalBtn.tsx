import { CloseModalBtnProps } from "../../../types/btnTypes";

const CloseModalBtn = ({ closeModal }: CloseModalBtnProps) => {
  return (
    <button
      type="button"
      className="absolute top-2 left-2 z-10 w-fit p-2 bg-blue-100 rounded-full"
      onClick={closeModal}
    >
      <img
        src="/close.svg"
        alt="close"
        width={20}
        height={20}
        className="object-contain"
      />
    </button>
  );
};

export default CloseModalBtn;
