export const numCommonPrimeFactors = (numberA, numberB) => {
  const factorsDictA = getFactorsDict(numberA);
  const factorsDictB = getFactorsDict(numberB);
  let count = 0;
  for (let key in factorsDictA) {
    if (key in factorsDictB)
      count += Math.min(factorsDictA[key], factorsDictB[key]);
  }
  return count;
};

const getFactorsDict = (number) => {
  let factorsDict = {};
  while (number % 2 === 0) {
    if (2 in factorsDict)
      factorsDict[2]++;
    else
      factorsDict[2] = 1;
    number /= 2;
  }
  for (let factor = 3; factor * factor <= number; factor += 2) {
    while (number % factor === 0) {
      if (factor in factorsDict)
        factorsDict[factor]++;
      else
        factorsDict[factor] = 1;
      number /= factor;
    }
  }
  if (number > 2) {
    factorsDict[number] = 1;
  }
  return factorsDict;
};
