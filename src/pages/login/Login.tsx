import { useAppDispatch } from "../../app/hooks";
import { useEffect, useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";
import * as Option from "fp-ts/lib/Option";
import { pipe } from "fp-ts/lib/function";
import { loginUser } from "../../services/API_proyect/user.service";
import { UserModelType, userModelEmpty } from "../../types/userTypes";
import { useAppContext } from "../../context/appContextUtils";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";
import { authorized } from "../../app/types/authUser";
import { setAuthUser } from "../../features/user/userSlice";
import { AxiosResponse } from "axios";
import { AxiosResponseData } from "../../types/axiosTypes";
import { AppState } from "../../types/appType";

const formConfig = {
  defaultValues: userModelEmpty,
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserModelType>(formConfig);
  const [res, setRes] = useState<AxiosResponse>();
  const [send, setSend] = useState(false);
  const { state } = useAppContext();
  const [loginOk, setLoginOk] = useState(false);
  const dispatch = useAppDispatch();

  //! ---------- FUNCION QUE GESTIONA LA DATA DEL FORMULARIO-----------------------
  const formSubmit = async (formData: UserModelType) => {
    setSend(true);
    setRes(await loginUser(formData));
    setSend(false);
  };

  useEffect(() => {
    console.log(res);
    handleLoginError(state, res, setLoginOk);
  }, [res]);

  if (loginOk) {
    const axiosResponse = res as AxiosResponse<AxiosResponseData>;

    // Store the user's auth token
    pipe(axiosResponse.data.token, authorized, setAuthUser, dispatch);

    // Show the list of users
    return <Navigate to="/users" />;
  }

  return (
    <div
      className="mx-5 my-24 p-16 flex flex-col justify-center items-center
                  bg-blue-900 shadow-2xl"
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-2xl">{state.texts.loginForm.welcome}</p>
        <h2 className="text-2xl font-bold">
          {state.texts.loginForm.initSesion}
        </h2>
      </div>

      <form
        className="flex flex-col gap-7 justify-center items-center mt-9"
        onSubmit={handleSubmit(formSubmit)}
      >
        <input
          placeholder={`${state.texts.user.email}`}
          className="bg-blue-300 text-black rounded-lg pl-3 p-1"
          type="text"
          id="email"
          autoComplete="false"
          {...register("email", { required: true })}
        />
        {showErrorFormField(errors.email, state.texts.formErrors.requiredField)}

        <div className="flex flex-col">
          <input
            placeholder={`${state.texts.user.password}`}
            className=" bg-blue-300 text-black rounded-lg pl-3 p-1"
            type="password"
            id="password"
            autoComplete="false"
            {...register("password", { required: true })}
          />
          {showErrorFormField(
            errors.password,
            state.texts.formErrors.requiredField,
          )}
        </div>

        <button
          className="flex justify-center items-center p-3 w-36 h-10 bg-orange-400
                   text-white rounded-[30px] hover:cursor-pointer 
                    hover:bg-white hover:text-orange-400 transition duration-500"
          type="submit"
          disabled={send}
        >
          {state.texts.loginForm.loginBtn}
        </button>
      </form>

      <div className="mt-10 flex flex-col justify-center items-center gap-4">
        <p className="text-lg flex flex-col sm:flex-row gap-2 justify-center items-center">
          {state.texts.loginForm.areYouRegistered}
          <span className="hover:cursor-pointer hover:text-purple-400">
            {state.texts.loginForm.registerHere}
          </span>
        </p>
        <p className="text-lg">{state.texts.loginForm.forgotYourPassword}</p>
        <span className="hover:cursor-pointer hover:text-purple-400">
          {state.texts.loginForm.changePassword}
        </span>
      </div>
    </div>
  );
};

const showErrorFormField = (
  error: FieldErrors<UserModelType> | undefined,
  errorText: string,
) =>
  pipe(
    error,
    Option.fromNullable,
    Option.fold(
      () => <></>, // If error is None (i.e., undefined), return an empty JSX fragment
      () => <p className="text-red-300 text-xs">{errorText}</p>, // If error is Some (i.e., defined), return the error message JSX
    ),
  );

const handleLoginError = (
  state: AppState,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  res: any,
  setLoginOk: (arg0: () => boolean) => void,
) => {
  // -------404 o un 500  en este caso --------->res.response
  // -------200 ---> entramos directos a la ---->res.data
  //! -------status: 500

  if (res?.response?.status == 500)
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Internal Server Error ❎!",
      showConfirmButton: false,
      timer: 1500,
      customClass: "bg-blue-100",
    });

  if (res?.response?.status == 400)
    Swal.fire({
      icon: "error",
      title: `${state.texts.loginAlert.title400}`,
      text: `${state.texts.loginAlert.text400}`,
      showConfirmButton: false,
      timer: 1500,
      customClass: "bg-blue-100",
    });

  //! ---------- 200
  if (res?.status == 200) {
    setLoginOk(() => true);
    Swal.fire({
      icon: "success",
      title: `${state.texts.loginAlert.title200}`,
      text: `${state.texts.loginAlert.text200}`,
      showConfirmButton: false,
      timer: 1500,
      customClass: "bg-blue-100",
    });
  }
};

export default Login;
