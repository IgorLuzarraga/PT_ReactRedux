import { setAuthUser } from "../features/user/userSlice";
import { useAppDispatch } from "../app/hooks";
import { notAuthorized } from "../app/types/authUser";
import { useNavigate } from "react-router-dom";

const LoginOutBtn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
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

export default LoginOutBtn;
