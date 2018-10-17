export const sudokuSolver = startGrid => {
  let currentGrid = getGrid(startGrid);
  currentGrid = solve(currentGrid);
  return toArray(currentGrid);
};

const isSolved = grid => {
  for (let i = 0; i < grid.length; i++) {
    if (grid[i].filter(number => number !== 0).length === 0) {
      return true;
    }
    return false;
  }
};

const toArray = grid => {
  return grid.reduce((arr, val) => arr.concat(val), []);
};

const getGrid = array => {
  let rows = [];
  for (let i = 0; i < array.length / 9; i++) {
    rows[i] = array.slice(9 * i, 9 * i + 9);
  }
  return rows;
};

const solve = grid => {
  let newGrid = grid;
  if (isSolved(newGrid)) {
    return newGrid;
  } else {
    const nextCell = getNextCell(newGrid);
    if (!nextCell || nextCell.possibilities.length === 0) {
      return newGrid;
    }
    for (let i = 0; i < nextCell.possibilities.length; i++) {
      const guess = nextCell.possibilities[i];
      newGrid[nextCell.y][nextCell.x] = guess;
      if (solve(newGrid) === newGrid) {
        return newGrid;
      } else {
        newGrid[nextCell.y][nextCell.x] = 0;
      }
    }
  }
};

const getNextCell = grid => {
  let nextCell;

  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      if (grid[y][x] !== 0) {
        continue;
      }
      let loopCell = checkCell(grid, x, y);
      if (!nextCell && loopCell.possibilities.length !== 0) {
        nextCell = loopCell;
      } else if (
        loopCell.possibilities.length <= nextCell.possibilities.length
      ) {
        nextCell = loopCell;
      }
    }
  }

  return nextCell;
};

const checkCell = (grid, x, y) => {
  if (grid[y][x] !== 0) return grid[y][x];

  var row = grid[y];
  var column = grid.map(currentRow => currentRow[x]);
  var block = getBlock(grid, x, y);

  var knowns = row.concat(column, block);

  var possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(function(item) {
    return knowns.indexOf(item) === -1;
  });

  return {
    possibilities,
    x,
    y
  };
};

const getBlock = (grid, x, y) => {
  x = Math.floor(x / 3) * 3;
  y = Math.floor(y / 3) * 3;

  var arr = [];

  for (let i = x; i < x + 3; i++) {
    for (let j = y; j < y + 3; j++) {
      arr.push(grid[j][i]);
    }
  }

  return arr;
};
