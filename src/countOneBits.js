export const countOneBits = (val) => {
   if(typeof val !== "number") {
     throw ('Invalid number');
   }
    if(val == 0) {
      return 0;
    }
    else {
      return (val & 1) + countOneBits( val >> 1);
    }
};