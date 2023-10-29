export type Loaded<a> = {
  kind: "Loaded";
  value: a;
};

export type Loading = {
  kind: "Loading";
};

export type Failed<b> = {
  kind: "Failed";
  value: b;
};

export type Status<a, b> = Loading | Loaded<a> | Failed<b>;

export function loading(): Loading {
  return {
    kind: "Loading",
  };
}

export function loaded<a>(value: a): Loaded<a> {
  return {
    kind: "Loaded",
    value,
  };
}

export function failed<b>(value: b): Failed<b> {
  return {
    kind: "Failed",
    value,
  };
}
