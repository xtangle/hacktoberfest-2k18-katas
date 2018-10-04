import { sum } from "./sum";

export const isHarshad = number => {
  const digits = number
    .toString()
    .split("")
    .map(Number);

  return !(number % sum(digits));
};
