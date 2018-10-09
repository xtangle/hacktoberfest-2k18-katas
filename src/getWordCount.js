export const getWordCount = (str) => {
  var words = str.split(new RegExp('[^A-Za-z]', 'g'));
  return words.length;
};
