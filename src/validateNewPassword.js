// A valid password should contain at least:
//   - 6 characters
//   - 1 uppercase
//   - 1 lowercase
//   - 1 number
//   - 1 special character (not 0-9, a-z, A-Z)
export const validateNewPassword = (password) => {
  const requirements = {
    lowercase: x => x.toUpperCase() !== x,
    uppercase: x => x.toLowerCase() !== x,
    number: x => !isNaN(parseInt(x, 10)),
    special: x => /[^a-zA-Z0-9]/.test(x),
  };

  // Length validation
  if (password.length < 6) {
    return false;
  }

  // Char requirements validation
  for (const char of password) {
    for (const r in requirements) {
      if (requirements[r](char)) {
        delete requirements[r];
      }
    }
  }

  return Object.keys(requirements).length === 0;
};
