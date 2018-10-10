export const milesKmConverter = (obj) => {
  if (typeof obj == 'boolean' || typeof obj != 'object' || Object.keys(obj).length !== 1)
    return () => { throw new Error() };
  let result = 0;
  for (let key in obj) {
    {
      if (key == 'km') {
        result = obj[key] * 0.62137113915;
      } else if (key == 'miles') {
        result = obj[key] * 1.60934400;
      }
    }
    let b4 = result.toFixed(2).split('.')[0];
    let aftr = result.toFixed(3).split('.')[1];
    return +(b4 + '.' + aftr.substring(0, 2));
  }
};