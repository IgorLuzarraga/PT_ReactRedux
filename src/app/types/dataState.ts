export type Idle = {
  kind: "Idle";
};

export type Loading = {
  kind: "Loading";
};

export type Failed = {
  kind: "Failed";
};

export type Loaded = {
  kind: "Loaded";
  data: string;
};

export type State = Idle | Loading | Failed | Loaded;

export const stateLoading = (): Loading => {
  return {
    kind: "Loading",
  };
};

export const stateIdle = (): Idle => {
  return {
    kind: "Idle",
  };
};

export const stateFailed = (): Failed => {
  return {
    kind: "Failed",
  };
};

export const stateLoaded = (data: unknown) => {
  return {
    kind: "Loaded",
    payload: data,
  };
};
