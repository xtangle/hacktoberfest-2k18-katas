export const decimalToFraction = (number) => {
  const wholeNumber = Math.floor(number);
  const decimalPart = number % 1;
  if (decimalPart <= 0.04) {
    return `${wholeNumber}`;
  } else if (decimalPart < 1 / 16) {
    return `${wholeNumber} 1/16`;
  } else if (decimalPart > 15 / 16) {
    return `${wholeNumber + 1}`
  } else {
    return `${wholeNumber} ${convertDecimalPart(decimalPart)}`;
  }
};

function convertDecimalPart(decimalPart) {
  let numerator = decimalPart * 16;
  let denominator = 16;
  const commonDivisor = greatestCommonDivisor(numerator, denominator);
  if (commonDivisor > 1) {
    numerator /= commonDivisor;
    denominator /= commonDivisor;
  }
  return `${numerator}/${denominator}`;
}

function greatestCommonDivisor(a, b) {
  if (!b) {
    return a;
  }

  return greatestCommonDivisor(b, a % b);
}
