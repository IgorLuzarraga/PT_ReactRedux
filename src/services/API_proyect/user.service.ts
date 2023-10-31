import { API } from "./service.config";
import { UserModelType } from "../../types/userTypes";

//! -------------------------LOGIN ---------------------------------------
export const loginUser = async (formData: UserModelType) => {
  return API.post("login", formData)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

//! -------------------------LOGOUT ---------------------------------------
export const logoutUser = async () => {
  return API.post("logout")
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
