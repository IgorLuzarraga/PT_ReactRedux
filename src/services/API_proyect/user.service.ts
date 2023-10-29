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
