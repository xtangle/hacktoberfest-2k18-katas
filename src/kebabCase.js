export const kebabCase = (str) => {
  let result = str.trim();

  // Early return as null, if trimmed string is empty.
  if (!result || result.length === 0) {
    return null;
  }

  // Otherwise, run string through various checks and transmutations to get to kebab-case.
  return result.replace(/([a-z][A-Z])/g, (match) => {
    `${match.substr(0, 1)}-${match.substr(1, 1).toLowerCase()}`;
  })
  .toLowerCase()
  .replace(/[^-a-z0-9]+/g, '-')
  .replace(/^-+/, '').replace(/-$/, '');
};
