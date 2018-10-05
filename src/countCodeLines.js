export const countCodeLines = (codeString) => {

  if (typeof codeString != 'string' || !codeString || codeString == undefined || codeString.length == 0)
    return 0;
  let nTotal = 0, nUnwanted = 0, nCommentBlock = 0;
  let splitted = codeString.split('\n');
  if (!splitted || splitted.length == 0)
    return 0;
  nTotal = splitted.length;
  splitted.forEach((line, index) => {
    if (line.trim() == '' || line.trim().startsWith('//')) {
      // console.log(line.trim())
      nCommentBlock += 1;
    }
    if (line.includes('/*')) {

      if (line.trim().startsWith('/*')) {
        for (let i = index; i < splitted.length; i++) {
          if (splitted[i].trim() == '' || splitted[i].trim().startsWith('//')) {
            nCommentBlock -= 1;
          }
          if (splitted[i].trim().endsWith('*/')) {
            nCommentBlock += 1;
            break;
          }
          nCommentBlock += 1;
          if (splitted[i].indexOf('*/') !== -1 && splitted[i].indexOf('*/') <= splitted[i].length - 2) {
            nCommentBlock += 1;
            break;
          }
        }
      } else {
        for (let i = index + 1; i < splitted.length; i++) {
          if (splitted[i].trim() == '' || splitted[i].trim().startsWith('//')) {
            // console.log(splitted[i].trim())
            nCommentBlock -= 1;
          }
          // console.log(splitted[i], splitted[i].length, splitted[i].indexOf('*/'), splitted[i].endsWith('*/'))
          if (splitted[i].trim().endsWith('*/')) {
            nCommentBlock += 1;
            break;
          }
          // nCommentBlock += 1;
          if (splitted[i].indexOf('*/') !== -1 && splitted[i].indexOf('*/') <= splitted[i].length - 2) {
            nCommentBlock += 1;
            break;
          }
        }
      }
    }

  })
  // console.log(nUnwanted, nTotal, nCommentBlock)
  return (parseInt(nTotal - nCommentBlock));

};