export const railfenceCipher = (message, key, mode) => {
  message = message.replace(/[.,/#!$%^&*;:{}=\-_`~()?]/g,"");
  message = message.replace(/ /g,"");
  if (mode == 'encrypt') {
    let rows = [];
    for (let i = 0; i < key; i++) {
      let column = [];
      rows.push(column);
    }
    let index = 0;
    let down = true;
    for (let i = 0; i < message.length; i++) {
      rows[index].push(message.charAt(i));
      if (down) {
        index++;
        if (index >= key) {
          index = key - 2;
          down = false;
        }
      } else {
        index--;
        if (index < 0) {
          index = 1;
          down = true;
        }
      }
    }
    let s = rows.toString();
    s = s.replace(/,/g, '');
    return s;
  } else if (mode == 'decrypt') {
    // generate expected pattern
    let rows = [];
    for (let i = 0; i < key; i++) {
      let column = [];
      rows.push(column);
    }
    let index = 0;
    let down = true;
    for (let i = 0; i < message.length; i++) {
      rows[index].push('X');
      if (down) {
        index++;
        if (index >= key) {
          index = key - 2;
          down = false;
        }
      } else {
        index--;
        if (index < 0) {
          index = 1;
          down = true;
        }
      }
    }
    // fill in with corresponding letters
    let charCounter = 0;
    for(let i = 0; i < rows.length; i++) {
      for(let j = 0; j < rows[i].length; j++) {
        rows[i][j] = message.charAt(charCounter);
        charCounter++;
      }
    }
    // extract message
    let s = [];
    down = true;
    index = 0;
    for(let i = 0; i < message.length; i++) {
      s.push(rows[index][0]);
      rows[index].shift();
      if (down) {
        index++;
        if (index >= key) {
          index = key - 2;
          down = false;
        }
      } else {
        index--;
        if (index < 0) {
          index = 1;
          down = true;
        }
      }
    }
    s = s.toString()
    s = s.replace(/,/g, '');
    return s;
  }
};
