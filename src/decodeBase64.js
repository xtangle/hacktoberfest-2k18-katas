/**
 * Decode a base64 encoded string into plain text.
 *
 * @param {string} encodedStr
 * @returns {string}
 */
export const decodeBase64 = encodedStr => {
  return (new Buffer(encodedStr, 'base64')).toString();
};
