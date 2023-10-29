import { reduce, map } from "fp-ts/lib/Array";
import { pipe } from "fp-ts/lib/function";
import { chain } from "fp-ts/lib/Array";

export const reverseArray = <T>(arr: T[]): T[] => {
  return [...arr].reverse();
};

const splitArray = <A>(arr: A[], chunkSize: number): A[][] => {
  return pipe(
    arr,
    reduce<A, [A[][], A[]]>([[], []], ([result, currentChunk], element) => {
      if (currentChunk.length === chunkSize) {
        return [result.concat([currentChunk]), [element]];
      } else {
        return [result, currentChunk.concat([element])];
      }
    }),
    ([result, currentChunk]) => result.concat([currentChunk]),
  );
};

export const reverseArrInChunksOf3 = <A>(arr: A[]) =>
  pipe(
    splitArray(arr, 3),
    map(reverseArray),
    chain((chunk) => chunk), // Flatten the array of arrays
  );
