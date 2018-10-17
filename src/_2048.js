export const _2048 = (board, direction) => {
  const result = [[...board[0]], [...board[1]], [...board[2]], [...board[3]]];

  const get = (i, j) => {
    switch (direction) {
      case 0: // for left
        return result[i][j];
      case 1: // for up
        return result[j][i];
      case 2: // for right
        return result[i][3 - j];
      case 3: // for down
        return result[3 - j][i];
    }
  };
  const set = (i, j, val) => {
    switch (direction) {
      case 0: // for left
        result[i][j] = val;
        break;
      case 1: // for up
        result[j][i] = val;
        break;
      case 2: // for right
        result[i][3 - j] = val;
        break;
      case 3: // for down
        result[3 - j][i] = val;
        break;
    }
  };

  for (let i = 0; i < 4; i++) {
    let j = 0;
    for (let k = 1; k < 4; k++) {
      const val = get(i, k);
      if (val === 0) {
        continue;
      } else if (get(i, j) === 0) {
        set(i, k, 0);
        set(i, j, val);
      } else if (get(i, j) === val) {
        set(i, j, val * 2);
        set(i, k, 0);
        j++;
      } else {
        j++;
        set(i, k, 0);
        set(i, j, val);
      }
    }
  }
  return result;
};
