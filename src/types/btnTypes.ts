import { MouseEventHandler } from "react";
import { Option } from "fp-ts/lib/Option";

export type CustomBtnProps = {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles: Option<string>;
  textStyles: Option<string>;
  title: string;
  rightIcon: Option<string>;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};

export type CloseModalBtnProps = {
  closeModal: () => void;
};
