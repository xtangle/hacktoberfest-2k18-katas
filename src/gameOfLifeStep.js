export const gameOfLifeStep = (m) => {
  const ALIVE = '*';
  const DEAD = ' ';
  let result = [];
  const getNeighbours = (m, i, j) => {
    let neighbours = [];
    let r;
    for (const k of [-1, 1]) {
      if (m[i+k]) {
        r = m[i+k];
        neighbours.push(r[j-1], r[j], r[j+1]); // add top and bottom neighbours
      }
    }
    neighbours.push(m[i][j-1], m[i][j+1]); // add same row left and right neighbours
    return neighbours.filter(e => e); // remove undefined (such as m[-1][-1])
  }
  for (let i = 0; i < m.length; i++) {
    let r = []; // to hold row next state
    let n; // to hold current char next state
    for (let j = 0; j < m[i].length; j++) {
      const c = m[i][j]; // current cell
      const ne = getNeighbours(m, i, j); // neighbours
      const ln = ne.filter(e => e == ALIVE).length; // no of live neighbours
      const dn = ne.filter(e => e == DEAD).length; // no of dead neighbours
      // decide next state
      if (c == ALIVE) {
        if (ln < 2 || ln > 3) {
          n = DEAD;
        } else {
          n = ALIVE;
        }
      } else if (ln == 3) {
        n = ALIVE;
      } else {
        n = c;
      }
      r.push(n);
    }
    result.push(r);
  }
  return result;
};
