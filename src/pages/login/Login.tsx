import "./Login.css";
import { useAppDispatch } from "../../app/hooks";
import { useEffect, useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";
// import { Link } from 'react-router-dom';
import * as Option from "fp-ts/lib/Option";
import { pipe } from "fp-ts/lib/function";

// import { useAuth } from '../contexts/authContext';
// import useLoginError from '../../hooks/useLoginError';
import { loginUser } from "../../services/API_proyect/user.service";
import { UserModelType, userModelEmpty } from "../../types/userTypes";
import { useAppContext } from "../../context/appContextUtils";
// import { setAuthUser } from "../../features/user/userSlice";

const formConfig = {
  defaultValues: userModelEmpty,
};

const Login = () => {
  //   const { register, handleSubmit } = useForm();
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<UserModelType>(formConfig);
  const [res, setRes] = useState<AxiosResponse>();
  const [send, setSend] = useState(false);
  const { state } = useAppContext();
  const [loginOk, setLoginOk] = useState(false);
  const dispatch = useAppDispatch();
  //   const { userlogin } = useAuth();

  //! ---------- FUNCION QUE GESTIONA LA DATA DEL FORMULARIO-----------------------
  const formSubmit = async (formData: UserModelType) => {
    setSend(true);
    setRes(await loginUser(formData));
    setSend(false);
  };

  //! ---------USEffect ASOCIADO A LA RES PARA GESTIONAR LOS ERRORES----------------
  // useEffect(() => {
  //   useLoginError(res, setLoginOk, userlogin);
  // }, [res, userlogin]);

  useEffect(() => {
    console.log(res);
    handleLoginError(res, setLoginOk);
  }, [res]);

  //   useEffect(() => {
  //     const handleLoginError = () => {
  //       // eslint-disable-next-line react-hooks/rules-of-hooks
  //       useLoginError(res, setLoginOk, userlogin);
  //     };

  //     handleLoginError();
  //   }, [res, userlogin]);

  //! ---------- LOS CONDICIONALES QUE GESTIONAN LOS ESTADOS DE NAVEGACION--------------

  if (loginOk) {
    const axiosResponse = res as AxiosResponse<AxiosResponseData>;

    // Store the user's auth token
    pipe(axiosResponse.data.token, authorized, setAuthUser, dispatch);

    // Show the list of users
    return <Navigate to="/users" />;
  }

  return (
    <div className="login-container">
      <div className="login-form-wrap">
        <h2 className="login-title">Inicia sesión</h2>

        <p>Bienvenido de nuevo!</p>

        <form
          className="login-form-container"
          onSubmit={handleSubmit(formSubmit)}
        >
          <input
            placeholder={`${state.texts.user.email}`}
            className=" bg-blue-300 text-black rounded-lg pl-3 p-1"
            type="text"
            id="email"
            autoComplete="false"
            {...register("email", { required: true })}
          />
          {showErrorFormField(
            errors.email,
            state.texts.formErrors.requiredField,
          )}

          <div className=" flex flex-col">
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

          <button className="login-button" type="submit" disabled={send}>
            Iniciar sesión
          </button>
        </form>
      </div>

      <div className="login-text">
        <p className="parrafoLogin">
          Estás registrado?
          {/* <Link className="parrafoRegisterHere" to="/register"> */}
          <span className="login-span-two">Registrate aquí</span>
          {/* </Link> */}
        </p>
        <p> Has olvidado la contraseña?</p>
        {/* <Link to="/forgotpassword" className="anchorCustom"> */}
        &nbsp;&nbsp;<span className="login-span-one">Cambiar Contraseña</span>
        {/* </Link> */}
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

//

// import Swal from 'sweetalert2/dist/sweetalert2.all.js';
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";
import { authorized } from "../../app/types/authUser";
import { setAuthUser } from "../../features/user/userSlice";
import { AxiosResponse } from "axios";
import { AxiosResponseData } from "../../types/axiosTypes";
// import { AxiosResponse } from 'axios';

//const handleLoginError = (res: { response: { status: number; }; status: number; }, setLoginOk: (arg0: () => boolean) => void) => {
const handleLoginError = (
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
      // customClass: 'custom-swal-bg',
    });

  if (res?.response?.status == 400)
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "User not found ❎!",
      showConfirmButton: false,
      timer: 1500,
      // customClass: 'custom-swal-bg',
    });

  //! ---------- 200
  if (res?.status == 200) {
    setLoginOk(() => true);
    Swal.fire({
      icon: "success",
      title: "¡Hola, bienvenida/o a nuestra web!",
      text: "Iniciado sesión con éxito ✅",
      showConfirmButton: false,
      timer: 1500,
      // customClass: 'custom-swal-bg',
    });
  }
};

//
export default Login;
