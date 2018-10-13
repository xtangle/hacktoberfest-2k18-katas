export const calculateTrig = (func, x) => {
    return (
      func === 'cos' ?  Math.cos(x) :
      func === 'sin' ?  Math.sin(x) :
      func === 'tan' ?  Math.tan(x) :
      'null');
  };
