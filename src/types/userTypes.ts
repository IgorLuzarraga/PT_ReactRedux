import { UserType } from "../app/types/userTypes";

export type UserModelType = {
  // username: string;
  email: string;
  password: string;
};
export const userModelInitial: UserModelType = {
  // username: "Test",
  email: "Test@gmail.com",
  password: "secret",
};

export const userModelEmpty: UserModelType = {
  // username: "",
  email: "",
  password: "",
};

export type UserDetailsProps = {
  isOpen: boolean;
  closeModal: () => void;
  user: UserType;
};
