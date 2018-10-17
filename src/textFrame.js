const checkOthers = (top, left, rest) => {
  const f = rest[0];
  const s = rest[1];
  if (f.length === left.length && f[0] === top[top.length - 1]) {
    // First element can be right side.
    if (s[0] === left[left.length - 1] && s.length === top.length) {
      return true;
    }
  }
  else if (s.length === left.length && s[0] === top[top.length - 1]) {
    // Second element can be right side.
    if (f[0] === left[left.length - 1] && f.length === top.length) {
      return true;
    }
  }
  return false;
}

export const textFrame = function(a, b, c, d) {
  const args = [a, b, c, d];
  if (args.some((arg) => arg.length <= 2)) {
    return false;
  }

  for (const word of args) {
    const arr = Object.assign([], args);
    arr.splice(args.indexOf(word), 1);
    for (const w2 of arr) {
      if (w2[0] === word[0]) {
        arr.splice(arr.indexOf(w2), 1);
        if (checkOthers(word, w2, arr)) {
          return true;
        }
      }
    }
  }
  return false;
};