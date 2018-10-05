export const countCodeLines = (codeString) => {

  if (typeof codeString != 'string' || !codeString || codeString == undefined || codeString.length == 0)
    return 0;
  let nTotal = 0, nUnwanted = 0, nCommentBlock = 0;
  let splitted = codeString.split('\n');
  if (!splitted || splitted.length == 0)
    return 0;
  nTotal = splitted.length;
  splitted.forEach((line, index) => {

    if (line.includes('/*')) {

      if (line.trim().startsWith('/*')) {
        for (let i = index; i < splitted.length; i++) {
          if ((splitted[i].trim() == '' || splitted[i].trim().startsWith('//')) && splitted[i].trim().includes('*/') == false) {
            nCommentBlock -= 1;
          }
          if (splitted[i].trim().endsWith('*/')) {
            nCommentBlock += 1;
            return;
          }
          nCommentBlock += 1;
          if (splitted[i].indexOf('*/') !== -1 && splitted[i].indexOf('*/') <= splitted[i].length - 2) {
            nCommentBlock += 1;
            return;
          }
        }
      } else {
        for (let i = index; i < splitted.length; i++) {
          if (splitted[i].trim() == '' || splitted[i].trim().startsWith('//')) {
            nCommentBlock -= 1;
            return;
          }
          if (splitted[i].trim().endsWith('*/')) {
            nCommentBlock += 1;
            return;
          }
          nCommentBlock += 1;
          if (splitted[i].indexOf('*/') !== -1 && splitted[i].indexOf('*/') <= splitted[i].length - 2) {
            nCommentBlock += 1;
            return;
          }
        }
      }
    } else if (line.trim() == '' || line.trim().startsWith('//')) {
      nCommentBlock += 1;
      return;
    }

  })
  return (parseInt(nTotal - nCommentBlock));
};
