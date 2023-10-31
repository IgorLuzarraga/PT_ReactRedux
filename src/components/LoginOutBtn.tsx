import { setAuthUser } from "../features/user/userSlice";
import { useAppDispatch } from "../app/hooks";
import { notAuthorized } from "../app/types/authUser";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/API_proyect/user.service";
import Swal from "sweetalert2";
import { useAppContext } from "../context/appContextUtils.ts";
import { AppState } from "../types/appType.ts";

const LoginOutBtn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { state } = useAppContext();

  const handleLogout = async () => {
    // The API answer is always 200, so in this particular case, we don't need to handle
    // other cases, in a real app, we should.
    await logoutUser();
    succesUserLogout(state);
    dispatch(setAuthUser(notAuthorized()));
    navigate("/");
  };

  return (
    <button
      className="transition duration-500 hover:text-white"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

const succesUserLogout = (state: AppState) => {
  Swal.fire({
    icon: "success",
    title: `${state.texts.logoutAlert.title}`,
    text: `${state.texts.logoutAlert.text}`,
    showConfirmButton: false,
    timer: 1500,
    customClass: "bg-blue-100",
  });
};

export default LoginOutBtn;
