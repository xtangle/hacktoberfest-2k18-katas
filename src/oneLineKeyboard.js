/*
 * Determine whether a given String can be typed using only one line of a standard UK QWERTY keyboard.
 */

export const oneLineKeyboard = (str) => {
  const keyboard = [
    /^[-0-9`=]*$/,
    /^[[\]wetyuio-r]*$/,
    /^[#asdf-hj-l;'\\:"|]*$/i,
    /^[<zxcvbnm>,./?]*$/i,
    /^ *$/
  ]
  for (const row of keyboard)
    if(row.exec(str))
      return true;
  return false;
};
