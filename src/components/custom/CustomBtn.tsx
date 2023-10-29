import { CustomBtnProps } from "../../types/btnTypes";
import { Option, match } from "fp-ts/lib/Option";
import { pipe } from "fp-ts/function";

const CustomBtn = ({
  isDisabled,
  btnType,
  containerStyles,
  textStyles,
  title,
  rightIcon,
  handleClick,
}: CustomBtnProps) => (
  <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${getContainerStyles(
      containerStyles,
    )}`}
    onClick={handleClick}
  >
    <span className={`flex-1 ${getTextStyles(textStyles)}`}>{title}</span>
    {showOptionImage(rightIcon)}
  </button>
);

const getContainerStyles = (containerStyles: Option<string>) =>
  pipe(
    containerStyles,
    match(
      () => "",
      (containerStylesStr) => containerStylesStr,
    ),
  );

const getTextStyles = (textStyles: Option<string>) =>
  pipe(
    textStyles,
    match(
      () => "",
      (textStylesStr) => textStylesStr,
    ),
  );

const showOptionImage = (rightIcon: Option<string>) =>
  pipe(
    rightIcon,
    match(
      () => <></>, // onNone handler
      (rightIconStr) => showImage(rightIconStr),
    ),
  );

const showImage = (rightIcon: string) => (
  <div className="relative w-6 h-6">
    <img src={rightIcon} alt="arrow_left" className="object-contain" />
  </div>
);

export default CustomBtn;
