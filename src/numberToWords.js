export const numberToWords = (number = null) => {
  if (typeof number !== 'number' || isNaN(number)) {
    throw new Error('Number required');
  }

  const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const from10To19 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eigteen', 'nineteen'];
  const dozens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const [HUNDRED, AND] = ['hundred', 'and'];

  let numberInWords = [];

  if (number > 99) {
    const nHundred = parseInt(number/100);
    numberInWords.push(digits[nHundred], HUNDRED, AND);
    number = number - (nHundred * 100);
  }

  if (number < 20) {
    if (number > 9) {
      const lastDigit = number - 10;
      numberInWords.push(from10To19[lastDigit]);
    } else {
      numberInWords.push(digits[number]);
    }
  } else {
    const nDozen = parseInt(number/10);
    numberInWords.push(dozens[nDozen]);
    number = number - (nDozen * 10);
    if (number !== 0) {
      numberInWords.push(digits[number]);
    }
  }

  return numberInWords.join(" ").trim();
};
