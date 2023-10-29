export type Authorized = {
  kind: "Authorized";
  payload: string;
};

export type NotAuthorized = {
  kind: "NotAuthorized";
};

export type AuthUser = Authorized | NotAuthorized;

export const authorized = (token: string): Authorized => {
  return {
    kind: "Authorized",
    payload: token,
  };
};

export const notAuthorized = (): NotAuthorized => {
  return {
    kind: "NotAuthorized",
  };
};
