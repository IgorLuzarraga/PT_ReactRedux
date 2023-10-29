import { UsersType } from "../app/types/userTypes";
import { compareStrings, includeString } from "./stringsUtils";

export const filterUsersByName = (name: string) => (users: UsersType) => {
  if (name === "" || name === null || name === undefined) return users;

  return users.filter((user) => compareStrings(user.first_name, name));
};

// returns users that his/her name includes part of the name to filter with
export const filterUsersByName2 = (name: string) => (users: UsersType) => {
  if (name === "" || name === null || name === undefined) return users;

  return users.filter((user) => includeString(user.first_name, name));
};
