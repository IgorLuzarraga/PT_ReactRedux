import "../styles/swal_styles.css";
import Swal from "sweetalert2";

const useLoginError = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  res: any,
  setLoginOk: (value: boolean) => void,
  userlogin: (data: string) => void,
) => {
  if (res?.response?.status == 500)
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Internal Server Error ❎!",
      showConfirmButton: false,
      timer: 1500,
      customClass: "custom-swal-bg",
    });

  if (res?.status == 200) {
    const dataCustom = {
      token: res.data.token,
      user: res.data.user.name,
      email: res.data.user.email,
      image: res.data.user.image,
      check: res.data.user.check,
      _id: res.data.user._id,
    };

    const dataString = JSON.stringify(dataCustom);
    userlogin(dataString);
    setLoginOk(true);
    Swal.fire({
      icon: "success",
      title: "¡Hola, bienvenida/o a nuestra web!",
      text: "Iniciado sesión con éxito ✅",
      showConfirmButton: false,
      timer: 1500,
      customClass: "custom-swal-bg",
    });
  }

  if (res?.response?.data?.includes("Fail matching passwords"))
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Password don't match!",
      showConfirmButton: false,
      timer: 1500,
      customClass: "custom-swal-bg",
    });

  if (res?.response?.data?.includes("Fail registering user"))
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Usuario no registrado",
      showConfirmButton: false,
      timer: 1500,
      customClass: "custom-swal-bg",
    });

  if (res?.response?.data?.includes("Wrong password, please try again"))
    Swal.fire({
      icon: "error",
      title: "Contraseña incorrecta",
      text: "La contraseña que introducida es incorrecta. Inténtalo de nuevo",
      showConfirmButton: false,
      timer: 1500,
      customClass: "custom-swal-bg",
    });

  if (res?.response?.data?.includes("Wrong email address, please try again"))
    Swal.fire({
      icon: "error",
      title: "Email incorrecto",
      text: "El correo electrónico introducido es incorrecto. Inténtalo de nuevo",
      showConfirmButton: false,
      timer: 1500,
      customClass: "custom-swal-bg",
    });
};

export default useLoginError;
