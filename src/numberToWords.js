export const numberToWords = (number = null) => {
  if (typeof number !== 'number' || isNaN(number)) {
    throw new Error('Number required');
  }

  const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const atbts = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eigteen', 'nineteen'];
  const dozens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const [HUNDRED, AND] = ['hundred', 'and'];

  const arrNumber = String(number).split("");
  const originalLength = arrNumber.length;
  let numberInWords = '';
  let isATBT = false;

  while (arrNumber.length) {
    const currLength = arrNumber.length;
    const num = Number(arrNumber.shift());
    if (currLength === 3) {
      numberInWords += `${digits[num]} hundred`;
    } else if (currLength === 2 && num !== 0) {
      isATBT = num === 1;
      if (!isATBT) {
        if (originalLength === 3) {
          numberInWords += ` and`;
        }
        numberInWords += ` ${dozens[num]}`;
      }
    } else if (currLength === 1) {
      if (!isATBT) {
        numberInWords += ` ${digits[num]}`;
      } else {
        numberInWords += ` ${atbts[num]}`;
      }
    }
  }
  return numberInWords.trim();
};
