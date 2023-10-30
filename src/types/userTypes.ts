import { UserType } from "../app/types/userTypes";

export type UserModelType = {
  email: string;
  password: string;
};
export const userModelInitial: UserModelType = {
  email: "Test@gmail.com",
  password: "secret",
};

export const userModelEmpty: UserModelType = {
  email: "",
  password: "",
};

export type UserDetailsProps = {
  isOpen: boolean;
  closeModal: () => void;
  user: UserType;
};
