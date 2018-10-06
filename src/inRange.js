export const inRange = (number, start, end) => {
  if(number === undefined || start === undefined || end === undefined){
    throw Error('Missing Arguments')
  }

  if(number > start && number < end){
    return true;
  } else {
    return false;
  }
};
