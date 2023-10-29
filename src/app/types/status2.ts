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
};

export type Status = Idle | Loading | Failed | Loaded;

export const loading = (): Loading => {
  return {
    kind: "Loading",
  };
};

export const idle = (): Idle => {
  return {
    kind: "Idle",
  };
};

export const failed = (): Failed => {
  return {
    kind: "Failed",
  };
};

export const loaded = (): Loaded => {
  return {
    kind: "Loaded",
  };
};
