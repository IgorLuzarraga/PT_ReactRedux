export const toLowerCase = (inputString: string): string =>
  inputString.toLowerCase();

export const compareStrings = (string1: string, string2: string): boolean =>
  toLowerCase(string1) === toLowerCase(string2);

export const includeString = (string1: string, string2: string): boolean =>
  toLowerCase(string1).includes(toLowerCase(string2));
