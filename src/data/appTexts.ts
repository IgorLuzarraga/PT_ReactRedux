import { TextsType } from "../types/languageTypes";

export const engTexts: TextsType = {
  navbarMenu: {
    home: "Home",
    login: "Login",
  },
  user: {
    name: "Name",
    firstName: "First Name",
    email: "Email",
    password: "Password",
  },
  loginForm: {
    initSesion: "Init sesion",
    welcome: "Welcome again!",
    loginBtn: "Log in",
    areYouRegistered: "Are you registered?",
    registerHere: "Register here",
    forgotYourPassword: "Forgot your password?",
    changePassword: "Change Password",
  },
  formErrors: {
    requiredField: "This field is required",
  },
  landing: {
    welcome:
      "Welcome to my technical test! The test consists of a Single Page Application (SPA) using React and Redux, which connects to a test API. The goal is for the user to authenticate and access a list of users. If not authenticated, the user should not be able to access the list view.",
    viewLogin:
      "View: 'Login' This view should be displayed at the /login route in the browser. With the following endpoint [POST] https://reqres.in/api/login.",
    visewUserList: `View: 'Listing' This view should be displayed at the /users route in the browser. A list of users obtained via the API should be displayed in this view. For each user in the list, the following details must be shown:
    ● avatar
    ● email
    ● first name
    ● last name.`,
    technicalTestPart1: "Technical",
    technicalTestPart2: "Test",
  },
  usersList: {
    listOfUsers: "List of Users"
  },
  footer: {
    madeWithText: "Made with",
    inText: "in",
    cityText: "Barcelona",
  },
};

export const espTexts: TextsType = {
  navbarMenu: {
    home: "Inicio",
    login: "Iniciar sesión",
  },
  user: {
    name: "Nombre",
    firstName: "Primer Apellido",
    email: "Email",
    password: "Contraseña",
  },
  loginForm: {
    initSesion: "Inicia sesión",
    welcome: "¡Bienvenido de nuevo!",
    loginBtn: "Iniciar sesión",
    areYouRegistered: "¿Estás registrado/a?",
    registerHere: "Registrarse aquí",
    forgotYourPassword: "Has olvidado la contraseña?",
    changePassword: "Cambiar la contraseña",
  },
  formErrors: {
    requiredField: "Este campo es requerido",
  },
  landing: {
    welcome: `Bienvenido/a a mi prueba técnica!
    La prueba consiste en una aplicación tipo SPA con React y Redux, la cual se conecte a una API de pruebas. El objetivo es que el usuario pueda autenticarse y, así acceder a un listado de users. Si no está autenticado, el usuario no deberá poder acceder a la vista de listado.`,
    viewLogin: `Vista: 'Login'
    Esta vista deberá mostrarse en la ruta /login del navegador.
    Con el siguiente endpoint [POST] https://reqres.in/api/login.`,
    visewUserList: `Vista: 'Listado'
    Esta vista deberá mostrarse en la ruta /users del navegador.
Deberá mostrarse un listado de users obtenidos mediante la API. En este listado, por cada user deberá mostrarse:
● avatar
● correo electrónico
● nombre
● apellido.`,
    technicalTestPart1: "Prueba",
    technicalTestPart2: "Técnica",
  },
  usersList: {
    listOfUsers: "Lista de Usuarios"
  },
  footer: {
    madeWithText: "Hecho con",
    inText: "en",
    cityText: "Barcelona",
  },
};

export const catTexts: TextsType = {
  navbarMenu: {
    home: "Inici",
    login: "Iniciar sessió",
  },
  user: {
    name: "Nom",
    firstName: "Primer Cognom",
    email: "Correu electrònic",
    password: "Contrasenya",
  },
  loginForm: {
    initSesion: "Inicia sessió",
    welcome: "Benvingut de nou!",
    loginBtn: "Inicia sessió",
    areYouRegistered: "Estàs registrat/da?",
    registerHere: "Registra't aquí",
    forgotYourPassword: "Has oblidat la contrasenya?",
    changePassword: "Canviar la contrasenya",
  },
  formErrors: {
    requiredField: "Aquest camp és obligatori",
  },
  landing: {
    welcome:
      "Benvingut/da a la meva prova tècnica! La prova consisteix en una aplicació tipus SPA amb React i Redux, que es connecta a una API de proves. L'objectiu és que l'usuari pugui autenticar-se i, d'aquesta manera, accedir a un llistat d'usuaris. Si no està autenticat, l'usuari no hauria de poder accedir a la vista del llistat.",
    viewLogin:
      "Vista: 'Login' Aquesta vista s'hauria de mostrar a la ruta /login del navegador. Amb l'endpoint següent [POST] https://reqres.in/api/login.",
    visewUserList: `Vista: 'Llistat' Aquesta vista s'hauria de mostrar a la ruta /users del navegador. En aquesta vista s'hauria de mostrar un llistat de usuaris obtingut mitjançant l'API. En aquest llistat, per a cada usuari, s'haurien de mostrar els següents detalls:
    ● avatar
    ● correu electrònic
    ● nom
    ● cognom.`,
    technicalTestPart1: "Prova",
    technicalTestPart2: "Tècnica",
  },
  usersList: {
    listOfUsers: "Llista d'usuaris",
  },
  footer: {
    madeWithText: "Fet amb",
    inText: "a",
    cityText: "Barcelona",
  },
};
