let start;
const calculateVert = (space, i, j) => {
  let counter = 1;
  let y = i;
  while (start[++y] && start[y][j] === space) {
    counter++;
  }
  return {
    id: space,
    size: counter,
    vert: true,
    x: j,
    y: i,
    blockers: []
  };
};
const blocks = {};
const state = [];
let COLS;
let solution;
const solutionStates = [];
// positive: true for up/right, false for down/left.
// Returns the block id that is in the way or "SUCCESS".
const move = (block, positive) => {
  block = blocks[block];
  if (block.vert) {
    if (positive) {
      // Attempt to move up.
      if (block.y === 0) {
        return false;
      }
      if (state[block.y - 1][block.x] !== " ") {
        return state[block.y - 1][block.x];
      }
      state[block.y - 1][block.x] = block.id;
      state[block.y + block.size - 1][block.x] = " ";
      block.y--;
      return "SUCCESS";
    }
    else {
      // Attempt to move down.
      if (block.y + block.size === COLS) {
        return false;
      }
      if (state[block.y + block.size][block.x] !== " ") {
        return state[block.y + block.size][block.x];
      }
      state[block.y + block.size][block.x] = block.id;
      state[block.y][block.x] = " ";
      block.y++;
      return "SUCCESS";
    }
  }
  if (positive) {
    // Attempt to move right.
    if (block.x + block.size === COLS) {
      return false;
    }
    if (state[block.y][block.x + block.size] !== " ") {
      return state[block.y][block.x + block.size];
    }
    state[block.y][block.x + block.size] = block.id;
    state[block.y][block.x] = " ";
    block.x++;
    return "SUCCESS";
  }
  else {
    // Attempt to down left.
    if (block.x === 0) {
      return false;
    }
    if (state[block.y][block.x - 1] !== " ") {
      return state[block.y][block.x - 1];
    }
    state[block.y][block.x - 1] = block.id;
    state[block.y][block.x + block.size - 1] = " ";
    block.x--;
    return "SUCCESS";
  }
};

// Whether or not the problem is solved.
const clear = () => {
  const block = blocks.X;
  let x = block.x;
  while (state[block.y][x + block.size] === " ") {
    if (x++ + block.size === COLS - 1) {
      return "CLEAR";
    }
  }
  return state[block.y][x + block.size];
};

// id: id of the block
// clear: relevant coordinate that needs to be clear
// Returns an array of all possible options to clear the block from the space.
const findDestinations = (id, clear) => {
  const block = blocks[id];
  const pOptions = clear - block.size + 1;
  const nOptions = COLS - (clear + block.size);
  const options = [];
  if (block.vert) {
    let upCounter = COLS - block.y;
    for (let i = 0; i < pOptions; i++) {
      options.push({
        dir: true,
        count: upCounter--
      });
    }
    let downCounter = COLS - (block.y + block.size);
    for (let i = 0; i < nOptions; i++) {
      options.push({
        dir: false,
        count: downCounter--
      });
    }
    return options;
  }
  // horizontal
  let rightCounter = COLS - (block.x + block.size);
  for (let i = 0; i < nOptions; i++) {
    options.push({
      dir: true,
      count: rightCounter--
    });
  }
  let leftCounter = block.x;
  for (let i = 0; i < pOptions; i++) {
    options.push({
      dir: false,
      count: leftCounter--
    });
  }
  return options;
};
let blocker;
let current;
let solved = false;

/*
Process:
Find the block in the way of X.
Try to move that block out the way.
If another block is in the way, try to move that one first.
Repeat recursively until a block can be successfully moved.
Follow the chain back up to move X.
*/
const iterate = (to, steps) => {
  if (solved) {
    return;
  }
  current = blocks[blocker];
  const options = findDestinations(blocker, to);
  for (const o of options.reverse()) {
    
    let x = current.x;
    let y = current.y;
    if (current.vert) {
      y += o.dir ? -o.count : o.count + current.size - 1;
    }
    else {
      x += o.dir ? o.count + current.size - 1 : -o.count;
    }
    const space = state[y][x];
    if (space === " ") {
      // Check to see if entire space is empty
      let realSolution = true;
      if (current.vert) {
        for (let i = current.y; i < y + current.size - 1; i++) {
          if (state[i][x] !== " " && state[i][x] !== blocker) {
            realSolution = false;
            break;
          }
        }
      }
      else {
        for (let i = current.x; i < x + current.size - 1; i++) {
          if (state[y][i] !== " " && state[y][i] !== blocker) {
            realSolution = false;
            break;
          }
        }
      }
      if (realSolution) {
        solved = true;
        steps.push({id: blocker, step: o});
        solution = steps.reverse();
        return;
      }
      else {
        continue;
      }
    }
    steps.push({id: blocker, step: o});
    blocker = space;
    iterate(blocks[blocker].vert ? y : x, Object.assign([], steps));
  }
};
export const unblockIt = (puzzle) => {
  start = Object.assign([], puzzle);
  COLS = start[0].length;
  for (let i = 0; i < start.length; i++) {
    state.push(start[i].split(""));
    for (let j = 0; j < COLS; j++) {
      const space = start[i][j];
      if (space === " " || blocks.hasOwnProperty(space)) {
        continue;
      }
      if (j === COLS - 1) {
        // vert
        blocks[space] = calculateVert(space, i, j);
      }
      if (start[i][j + 1] === space) {
        // Should probably increase j to decrease useless iterations.
        // hori
        const end = start[i].lastIndexOf(space);
        const size = end - j + 1;
        blocks[space] = {
          id: space,
          size,
          vert: false,
          x: j,
          y: i,
          blockers: []
        };
        continue;
      }
      // vert
      blocks[space] = calculateVert(space, i, j);
    }
  }
  blocker = clear();
  iterate(blocks.X.y, []);
  let arr;
  for (const step of solution) {
    for (let i = 0; i < step.step.count; i++) {
      move(step.id, step.step.dir);
    }
    arr = [];
    for (const row of state) {
      arr.push(Object.assign([], row));
    }
    solutionStates.push(Object.assign([], arr));
  }
  while (move("X", true) === "SUCCESS");
  solutionStates.push(Object.assign([], state));
  const final = [];
  for (const board of solutionStates) {
    const indiv = [];
    for (const row of board) {
      indiv.push(row.join(""));
    }
    final.push(indiv);
  }
  return final;
};