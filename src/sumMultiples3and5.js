export const sumMultiples3and5 = num => {
  let sum = 0;
    while (--num > 0) {
        if (num % 3 === 0) {
            sum += num;
        } else if (num % 5 === 0) {
            sum += num;
        }            
    }
    return sum;
};
